import axios from "axios";
import { SERVER_ADDRESS } from "../../server";
import { defaultListing } from "../../Store/defaults";
import { Img, Listing } from "../../Store/types";

export const formatAsMoney = (value: string) => {
  let x: string = "",
    decimal: number = -1, // -1: No decimal, 0: decimal pt, 1: 1 number after point, 2: 2 numbers after point
    sz: number = 0,
    index: number = 0;

  // Get number of numeric chars - used for placing commas
  for (let i of value)
    if (i === ".") break;
    else if (!isNaN(Number(i)) && i !== " ") sz++;

  if (sz === 0) x = "0";

  // Iterate over every char in value
  for (let char of value) {
    // No decimal and i is decimal point
    if (decimal === -1 && char === ".") {
      x += char;
      decimal = 0;
      index = sz + 1;
    }

    // Nonnumeric character
    else if (isNaN(Number(char)) || char === " ") continue;
    // Decimal has been set
    else if (decimal > -1) {
      decimal++;
      x += char;
      if (decimal === 2) break;
    }

    // Just a number
    else {
      x += char;
      if (++index < sz && (sz - index) % 3 === 0) x += ",";
    }
  }

  switch (decimal) {
    case -1:
      return x + ".00";
    case 0:
      return x + "00";
    case 1:
      return x + "0";
    default:
      return x;
  }
};

/**
 * Get all of the information needed to display a listing preview
 * @param l_id ID of the listing to get the preview info for
 * @returns Object representing a listing
 */
export const getListingPreview = async (l_id: number) => {
  let res = await axios.get(`${SERVER_ADDRESS}/listing/search?id=${l_id}`);
  if (res.status === 404) return defaultListing;

  console.log(res.data);

  return {
    id: res.data.id,
    title: res.data.title,
    content: res.data.content,
    price: Number(res.data.price) / 100,
    category: res.data.category,
    posted: new Date(res.data.posted),
    poster: res.data.poster,
    purchaser: res.data.purchaser,
    image: await getPreviewImage(Number(res.data.id)),
  };
};

/**
 * Send a GET request to the server for all of a listing's images
 * @param l_id ID of the listing to get the images for
 * @param ignore (Optional) Index of an image to not grab (like the main image)
 * @returns An object containing all of the images or an object containing
 * a bad status code and possibly an error message if an issue was encountered
 */
export async function* getListingImages(l_id: number, ignore?: number) {
  let res = await axios.get(
    `${SERVER_ADDRESS}/listing-image/cnt?listingId=${l_id}`
  );

  if (res.status === 404)
    return {};

  for (let index of res.data) {
    if (ignore !== undefined && index !== ignore) {
      res = await axios.get(
        `${SERVER_ADDRESS}/listing-image?listing=${l_id}&index=${index}`,
        { responseType: "arraybuffer" }
      );

      if (res.status === 200) {
        let image = await convertImage({
          bytes: res.data,
          type: res.headers["content-type"],
          listing: l_id,
          index: index,
        });
        yield image;
      }
    }
  }
}

/** Type representing the data that needs to be passed to convertImage() */
type ImgData = {
  bytes: any;
  type: string;
  listing: number;
  index: number;
};

/**
 * Convert a byte array to a
 * @param data (ImgData) All of the data necessary to convert the image byte array
 * @returns Img object containing the converted image file
 */
const convertImage = (data: ImgData) => {
  let blob = new Blob([data.bytes], {
    type: data.type,
  });

  let file = new File(
    [blob],
    `${data.listing}-${data.index}.${
      blob.type === "image/jpeg" ? "jpg" : blob.type.split("/")[1]
    }`
  );

  let fr = new FileReader();

  return (() => {
    return new Promise((resolve, reject) => {
      fr.onload = resolve;
      fr.onerror = reject;
      fr.readAsDataURL(blob); // WHY IS THIS ASYNC AND WHY CAN I NOT USE AWAIT THIS MESS IS ALL YOUR FAULT
    });
  })().then(
    () =>
      <Img>{
        name: file.name,
        data: file,
        key: file.name.split(".")[0],
        src: fr.result as string,
      }
  );
};

/**
 * Get the main image of a listing
 * @param listing Listing ID to get image for
 * @returns Img object
 */
export const getPreviewImage = (listing: number) => {
  return axios
    .get(`${SERVER_ADDRESS}/listing-image?listing=${listing}&index=${0}`, {
      responseType: "arraybuffer",
    })
    .then((res) =>
      convertImage(<ImgData>{
        bytes: res.data,
        type: res.headers["content-type"],
        listing: listing,
        index: 0,
      })
    );
};

export async function* getListingPreviewsByURL(url: string) {
  let res = await axios.get(`${SERVER_ADDRESS}/listing/${url}`);
  let listings = res.data;
  for (let i = 0; i < listings.length; i++)
    listings[i].price = listings[i].price / 100;

  for (let listing of listings) {
    let img = await getPreviewImage(listing.id);
    listing["image"] = img;
    yield listing;
  }
}

/**
 * Get the most recent listing objects
 * @returns Array containing the most recent listings
 */
export async function* getRecentListings() {
  yield* getListingPreviewsByURL(`${SERVER_ADDRESS}/listing/recent`);
}

/**
 * Get all listings for which the title or description contains the passed-in keyword
 * @param keyword String to check against listing titles/descriptions
 * @returns List of listings that match the search criteria
 */
export async function* searchListings(keyword: string) {
  yield* getListingPreviewsByURL(
    `${SERVER_ADDRESS}/listing/search?query=${keyword}`
  );
}

export async function* getUserListings(username: string) {
  yield* getListingPreviewsByURL(
    `${SERVER_ADDRESS}/listing/search?user=${username}`
  );
}
