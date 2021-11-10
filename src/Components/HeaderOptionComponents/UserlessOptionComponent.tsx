import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { FaSignInAlt, FaRegStar } from 'react-icons/fa';

export const UserlessOptionComponent : React.FC<any> = () => {

  return (
    <div>
    <Breadcrumb>
        <Breadcrumb.Item href="#"><FaSignInAlt/> Sign In</Breadcrumb.Item>
        <Breadcrumb.Item href="#"><FaRegStar/> Sign up</Breadcrumb.Item>
    </Breadcrumb>       
    </div>
  )
}