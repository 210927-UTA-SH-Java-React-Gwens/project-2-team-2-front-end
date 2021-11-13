import React, { useEffect, useState } from "react";
import { formatAsMoney } from "./listing";
import axios from "axios";
import { SERVER_ADDRESS } from "../../server";
import { useLocation } from "react-router";
import "./ListingView.css";
import internal from "stream";

type Listing = {
  title: string;
  desc: string;
  price: number;
  images: any;
  category: string;
  poster: string;
  posted: Date;
  purchaser: string;
  watchers: number;
}

export const ListingView: React.FC<any> = (props) => {
  const [id, setId] = useState(-1);
  const [listingFound, setListingFound] = useState(false);

  const [listing, setListing] = useState<Listing>({
    title: "",
    desc: "",
    price: 0,
    images: null,
    category: "",
    poster: "",
    posted: new Date(0),
    purchaser: "",
    watchers: 0
  });

  const sendGet = (l_id?: number) => {
    if (!l_id || l_id < 1) l_id = id;
    axios
      .get(SERVER_ADDRESS + "listing?id=" + l_id)
      .then((res) => {
        console.log(res);
        setListing({
          title: res.data.title,
          desc: res.data.content,
          price: res.data.price,
          images: res.data.images,
          category: res.data.category,
          poster: res.data.poster,
          posted: new Date(res.data.posted),
          purchaser: res.data.purchaser,
          watchers: res.data.watchers ? res.data.watchers.length : 0,
        });
        setListingFound(true);
      })
      .catch((err) => {
        console.log(err);
        setListingFound(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(Number(e.currentTarget.value));
  };

  useEffect(() => {
    let params = new URLSearchParams(window.location.href.split("?")[1]);
    if (params.get("id")) {
      setId(Number(params.get("id")));
      sendGet(Number(params.get("id")));
    }
  }, []);

  return (
    <div className="listing-view-full" key={props.id}>
      <div style={{ display: listingFound ? "none" : "block" }}>
        <h1 style={{ color: "red" }}>
          Error: No listing with ID [{id}] could be found.
        </h1>
      </div>
      <div style={{ display: listingFound ? "block" : "none" }}>
        <input type="text" onChange={handleChange} />
        <button type="button" onClick={() => sendGet()}>
          Submit
        </button>
        <h1 className="lv-title">{listing.title}</h1>
        <p>
          In category <em>{listing.category}</em>
        </p>
        <p>{"$" + formatAsMoney(Number(listing.price).toString())}</p>
        <div
          className="lv-desc"
          dangerouslySetInnerHTML={{ __html: listing.desc }}
          style={{ textAlign: "left" }}
        ></div>
        <p>
          Posted by {listing.poster} on {listing.posted.toLocaleString()}
        </p>
        <p>{listing.watchers} watchers</p>
        <p style={{ display: listing.purchaser ? "block" : "none" }}>
          Purchased by {listing.purchaser}
        </p>
      </div>
    </div>
  );
};
