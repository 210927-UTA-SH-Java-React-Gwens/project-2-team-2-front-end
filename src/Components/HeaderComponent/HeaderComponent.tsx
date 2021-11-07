import React from "react";
import { Title } from "../TitleComponent/TitleComponent";
import './Header.css'

export const Header : React.FC<any> = () => {

  return (
    <div id="gwen-header">
      <Title/>
    </div>
  )
}