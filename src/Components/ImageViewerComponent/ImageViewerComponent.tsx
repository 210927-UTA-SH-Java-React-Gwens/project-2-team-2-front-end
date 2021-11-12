import React, { useState, useEffect } from "react";
import { Image, Button, Modal } from "react-bootstrap";
import './ImageViewer.css';

export type Img = {
  name: string;
  data: File;
  key: string;
  src: string;
};

export const ImageViewer: React.FC<any> = (props: any) => {
  const [curIndex, setCurIndex] = useState(0);
  const [showModal, setShowModal] = useState("");
  const [length, setLength] = useState(0);

  function changeImage(i: number) {
    while (i < 0) i += props.images.length;
    setCurIndex(i % props.images.length);
    console.log(curIndex, props.images);
    if (props.setKey) props.setKey(props.images[curIndex]["key"]);
  }

  function changeImageByKey(key: string) {
    for (let i = 0; i < props.images.length; i++)
      if (props.images[i]['key'] === key) {
        changeImage(i);
        return;
      }
  }

  useEffect(() => {
    if (props.images.length > length) {
      // Image appended
      setLength(props.images.length);
      changeImage(props.images.length - 1);
    } else if (props.images.length < length) {
      // Image removed
      setLength(props.images.length);
      if (props.images.length === 0)
        return;
      else if (curIndex === props.images.length)
        changeImage(curIndex - 1);
      else changeImage(curIndex);
    }
    // eslint-disable-next-line
  }, [props.images]);

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
          className="image"
          src={props.images.length ? props.images[curIndex]["src"] : ""}
          alt={props.images.length ? props.images[curIndex]["name"] : ""}
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
