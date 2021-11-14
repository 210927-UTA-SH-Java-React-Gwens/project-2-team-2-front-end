import React, { useEffect, useState } from "react";
import { formatAsMoney } from "./listing";
import axios from "axios";
import { SERVER_ADDRESS } from "../../server";
import { useLocation } from "react-router";
import "./ListingView.css";
import internal from "stream";
import { ImageViewer, Img } from "../ImageViewerComponent/ImageViewerComponent";

export const ListingView: React.FC<any> = (props) => {
  const [id, setId] = useState(-1);
  const [listingFound, setListingFound] = useState(true);

  let [listing, setListing] = useState({
    title: "",
    content: "",
    price: 0,
    images: new Array<Img>(),
    category: "",
    posted: new Date(0),
  });

  const [poster, setPoster] = useState({
    id: 0,
    username: "",
    email: "",
  });

  const [purchaser, setPurchaser] = useState({
    id: 0,
    username: "",
    email: "",
  });

  const sendGet = async (l_id?: number) => {
    if (!l_id || l_id < 1) l_id = id;

    let res = await axios.get(SERVER_ADDRESS + "listing?id=" + l_id);
    if (res.status === 404) {
      setListingFound(false);
      return;
    }

    listing = {
      ...listing,
      title: res.data.title,
      content: res.data.content,
      price: res.data.price / 100,
      category: res.data.category,
      posted: new Date(res.data.posted),
    };

    setPoster({
      id: res.data.poster.id,
      username: res.data.poster.username,
      email: res.data.poster.email,
    });

    if (res.data.purchaser)
      setPurchaser({
        id: res.data.purchaser.id,
        username: res.data.purchaser.username,
        email: res.data.purchaser.email,
      });

    res = await axios.get(SERVER_ADDRESS + "listing-image/cnt?listingId=" + l_id);
    let data = res.data;
    for (let index of data)  {
      res = await axios.get(
        `${SERVER_ADDRESS}/listing-image?listing=${l_id}&index=${index}`,
        { responseType: 'arraybuffer' }
      );

      console.log(typeof res.data)
      //console.log(new Uint8Array)

      if (res.status === 200) {
        let blob = new Blob([res.data], {
          type: res.headers["content-type"],
        });

        let file = new File(
          [blob],
          `${l_id}-${index}.${
            blob.type === 'image/jpeg' ? 'jpg' : blob.type.split("/")[1]}`
        );

        let fr = new FileReader();

        await (() => {
          return new Promise((resolve, reject) => {
            fr.onload = resolve;
            fr.onerror = reject;
            fr.readAsDataURL(blob);
          })
        })().then(() => {
          listing.images.push({
              name: file.name,
              data: file,
              key: file.name.split(".")[0],
              src: fr.result as string
          })
        })
      }
    }

    setListingFound(true);
    setListing(listing); 
    console.log({'endofsendget': listing})
  };

  useEffect(() => {
    let params = new URLSearchParams(window.location.href.split("?")[1]);
    if (params.get("id")) {
      setId(Number(params.get("id")));
      sendGet(Number(params.get("id")));
    }
    console.log("LVC::useEffect");
    console.log(listing);
  }, []);

  if (!listingFound)
    return (
      <p style={{ color: "red" }}>
        No listing with ID [{id}] could be found. It may have been deleted by
        the original lister.
      </p>
    );
  else
    return (
      <div className="listing-view-full" key={props.id}>
        <h1 className="lv-title">{listing.title}</h1>
        <p>
          In category <em>{listing.category}</em>
        </p>
        <p>{"$" + formatAsMoney(Number(listing.price).toString())}</p>
        <div
          className="lv-desc"
          dangerouslySetInnerHTML={{ __html: listing.content }}
          style={{ textAlign: "left" }}
        ></div>
        <p>
          Posted by {poster.username} on {listing.posted.toLocaleString()}
        </p>
        <p style={{ display: purchaser.id !== 0 ? "block" : "none" }}>
          Purchased by {purchaser.username ? purchaser.username : ""}
        </p>
        <div className="lv-img">
          <ImageViewer images={listing.images} />
        </div>
      </div>
    );
};
