import React, {useState} from "react";
import { Breadcrumb, Modal, Button } from "react-bootstrap";
import { FaSignInAlt, FaRegStar } from 'react-icons/fa';
import { LoginComponent } from "../LoginComponent/LoginComponent";
import { SignUpComponent } from "../SignUpComponent/SignUpComponent";

export const UserlessOptionComponent : React.FC<any> = () => {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose1 = (e:any) => {setShow1(false);  };
  const handleShow1 = () => {setShow1(true)};

  const handleClose2 = (e:any) => {setShow2(false);  };
  const handleShow2 = () => {setShow2(true)};

  return (
    <div>
    <Breadcrumb>
        <Breadcrumb.Item onClick={handleShow1}><FaSignInAlt/> Sign In</Breadcrumb.Item>
        <Breadcrumb.Item onClick={handleShow2}><FaRegStar/> Sign up</Breadcrumb.Item>
    </Breadcrumb>       

    <Modal centered show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title >Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginComponent/>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose1}>
            Cancel
        </Button>
        </Modal.Footer>
    </Modal>

    <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title >Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill out the requested information</p>
          <SignUpComponent/>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose2}>
            Cancel
        </Button>
        </Modal.Footer>
    </Modal>
    </div>
  )
}