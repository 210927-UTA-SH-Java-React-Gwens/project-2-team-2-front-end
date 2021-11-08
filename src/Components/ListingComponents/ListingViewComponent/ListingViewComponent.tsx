import React from "react";
import { formatAsMoney } from "../listing";

export const ListingView : React.FC<any> = (props) => {
  

  return (
    <div className="listing-view-full" key={props.id}>
      <h1 className="lv-title">{props.title}</h1>
      <p>{'$' + formatAsMoney(props.price)}</p>
      <div className="lv-desc">{props.desc}</div>
      <p>Posted by {props.poster} on {props.posted}</p>

    </div>
  )
}