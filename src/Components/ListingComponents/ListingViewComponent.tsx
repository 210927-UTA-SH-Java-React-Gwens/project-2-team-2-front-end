import React, { useEffect, useState } from "react";
import { formatAsMoney } from "./listing";
import { Img } from "../ImageViewerComponent/ImageViewerComponent";
import axios from "axios";
import { SERVER_ADDRESS } from "../../server";
import { Button, InputGroup } from "react-bootstrap";
import './ListingView.css';

export const ListingView : React.FC<any> = (props) => {
  const [id, setId] = useState(-1);

  const [listing, setListing] = useState({
    title: "",
    desc: "",
    price: 0,
    images: null,
    category: "",
    poster: "",
    posted: "",
    purchaser: "",
    watchers: 0
  });

  const updateListing = (data:Object) => {
    setListing({...listing, ...data});
  }
  
  const sendGet = () => {
    axios.get(SERVER_ADDRESS + 'listing?id=' + id)
      .then(res => updateListing({
        title: res.data.title,
        desc: res.data.content,
        price: res.data.price,
        images: res.data.images,
        category: res.data.category,
        poster: res.data.poster,
        purchaser: res.data.purchaser,
        watchers: res.data.watchers.length
      }));
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setId(Number(e.currentTarget.value));
  }

  return (
    <div className="listing-view-full" key={props.id}>
      <input type="text" onChange={handleChange} />
      <button type="button" onClick={sendGet}>Submit</button>
      <h1 className="lv-title">{listing.title}</h1>
      <p>{'$' + formatAsMoney(listing.price.toString())}</p>
      <div className="lv-desc" dangerouslySetInnerHTML={{__html: listing.desc}}></div>
      <p>Posted by {listing.poster} on {listing.posted}</p>
      <p>{listing.watchers} watchers</p>
      <p style={{display: listing.purchaser ? "block" : "none"}}>Purchased by {listing.purchaser}</p>
    </div>
  )
}