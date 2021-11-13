import React, { useEffect, useState } from "react";
import { formatAsMoney } from "./listing";
import axios from "axios";
import { SERVER_ADDRESS } from "../../server";
import { useLocation } from "react-router";
import "./ListingView.css";
import internal from "stream";

export const ListingView: React.FC<any> = (props) => {
  const [id, setId] = useState(-1);
  const [listingFound, setListingFound] = useState(false);

  const [listing, setListing] = useState({
    title: "",
    content: "",
    price: 0,
    images: null,
    category: "",
    posted: new Date(0)
  });

  const [poster, setPoster] = useState({
    id: 0,
    username: "",
    email: ""
  });

  const [purchaser, setPurchaser] = useState({
    id: 0,
    username: "",
    email: ""
  });

  const sendGet = (l_id?: number) => {
    if (!l_id || l_id < 1) l_id = id;
    axios
      .get(SERVER_ADDRESS + "listing?id=" + l_id)
      .then((res) => {
        console.log(res);
        setListing({
          title: res.data.title,
          content: res.data.content,
          price: res.data.price / 100,
          images: res.data.images,
          category: res.data.category,
          posted: new Date(res.data.posted)
        });

        setPoster({
          id: res.data.poster.id,
          username: res.data.poster.username,
          email: res.data.poster.email
        });
        if (res.data.purchaser)
          setPurchaser({
            id: res.data.purchaser.id,
            username: res.data.purchaser.username,
            email: res.data.purchaser.email
          });

        setListingFound(true);
      })
      .catch((err) => {
        console.log(err);
        setListingFound(false);
      });
  };

  useEffect(() => {
    let params = new URLSearchParams(window.location.href.split("?")[1]);
    if (params.get("id")) {
      setId(Number(params.get("id")));
      sendGet(Number(params.get("id")));
    }
  }, []);

  if (!listingFound) return <p style={{color: "red"}}>No listing with ID [{id}] could be found.</p>
  else return (
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
      </div>
  );
};
