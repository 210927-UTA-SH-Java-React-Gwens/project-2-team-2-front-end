import React, { useState, useEffect } from "react";
import { Image, Button, Modal } from "react-bootstrap";
import { Img } from "../../Store/types";
import './ImageViewer.css';

export const ImageViewer: React.FC<any> = (props: {images:Img[]}&any) => {
  // Index of the image currently being displayed
  const [curIndex, setCurIndex] = useState(0);
  // The modal displays the current image in a focused, larger view
  const [showModal, setShowModal] = useState("");

  function changeImage(i: number) {
    // Make sure i is between 0 and images length
    while (i < 0)
      i += props.images.length;
    i %= props.images.length;

    setCurIndex(i);
    if (props.setKey)
      props.setKey(props.images[i]["key"]);
  }

  function changeImageByKey(key: string) {
    for (let i = 0; i < props.images.length; i++)
      if (props.images[i]['key'] === key) {
        changeImage(i);
        return;
      }
  }

  return (
    <div>
      <div>
        <Button
          variant="secondary"
          style={{ borderRadius: ".25rem 0 0 .25rem" }}
          onClick={() => changeImage(curIndex - 1)}
        >
          {"<"}
        </Button>
        <img
          className="main-image"
          src={props.images?.length && props.images[curIndex]["src"]}
          alt={props.images?.length && props.images[curIndex]["name"]}
          onClick={() => setShowModal(props.images[curIndex]["src"])}
        />
        <Button
          variant="secondary"
          style={{ borderRadius: "0 .25rem .25rem 0" }}
          onClick={() => changeImage(curIndex + 1)}
        >
          {">"}
        </Button>
      </div>
      <div className="thumbnails">
        {props.images.map((img: Img) => (
          <img
            className="tb"
            src={img["src"]}
            alt={img["name"]}
            key={img["key"] + "-tb"}
            onClick={()=> changeImageByKey(img['key'])}
          />
        ))}
      </div>
      <Modal
        show={showModal.length}
        onHide={() => setShowModal("")}
        size="xl"
        animation={false}
        centered
      >
        <Image src={showModal} />
      </Modal>
    </div>
  );
};
