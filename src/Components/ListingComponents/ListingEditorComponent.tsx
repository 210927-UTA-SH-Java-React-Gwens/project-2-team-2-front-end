import React, { useState, useEffect } from "react";
import {
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
  Button,
  CloseButton,
} from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { formatAsMoney } from "./listing";
import { ImageViewer } from "../ImageViewerComponent/ImageViewerComponent";
import "./NewListing.css";
import axios from "axios";
import { SERVER_ADDRESS } from "../../server";
import { Redirect } from "react-router";
import { Img } from "../../Store/types";

export const ListingEditor: React.FC<any> = (props?: any) => {
  useEffect(() => {
    document.title = "Create a new listing | GWENslist";

    if (props?.defaults && props.defaults.images)
      setImages(props.defaults.images);
  }, []);

  // State for turning on/off the form fieldset disabled property
  const [fSetDisabled, setFsetDisabled] = useState(false);

  // State holding the set of user images
  const [images, setImages] = useState<Img[]>([]);

  // State holding count of images so each one has a unique key
  const [imgKey, setImgKey] = useState(0);

  // State holding key of image to be removed if closebutton is pressed
  const [remKey, setRemKey] = useState("");

  // State holding if the form has been validated
  const [formValidated, setFormValidated] = useState(false);

  // State holding the simple listing information to send to the backend
  const [formData, setFormData] = useState(new FormData());

  const [listingId, setListingId] = useState(0);

  let updateFormData = (name: string, value: any) => {
    formData.set(name, value);
    setFormData(formData);
  };

  let formSubmit = (event: any) => {
    event.preventDefault();

    let form = event.currentTarget;
    if (!form.checkValidity()) event.stopPropagation();
    else {
      setFsetDisabled(true);

      axios
        .post(SERVER_ADDRESS + "/listing/new", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          setListingId(res.data.id)
          console.log(res.data);
        })
        .catch(err => console.log(err));

      (() => new Promise((resolve) => setTimeout(resolve, 3000)))().then(() =>
        setFsetDisabled(false)
      );
    }

    setFormValidated(true);
  };

  let addImages = (imgs: Img[]) => {
    setImages([...images, ...imgs]);
    for (let img of imgs) formData.append("images", img.data);
    setFormData(formData);
  };

  let removeImage = (key: string) => {
    let imgs: Img[] = [];

    // Reset images to list of images excluding the one with the given key
    for (let image of images)
      if (image.key === key) continue;
      else imgs.push(image);
    setImages(imgs);

    // Reset form data images
    formData.delete("images");
    for (let img of images) formData.append("images", img.data);
    setFormData(formData);
  };

  let parseFiles = (target: HTMLInputElement) => {
    console.log(target.files);
    let imgs: Img[] = [];
    let key = imgKey;

    for (let i = 0; target.files && i < target.files.length; i++) {
      console.log(i, target.files[i]);
      imgs.push({
        src: URL.createObjectURL(target.files[i]),
        data: target.files[i],
        name: target.files[i].name,
        key: `img${key++}`,
      });
    }

    setImgKey(key + 1);
    addImages(imgs);
  };

  if (listingId !== 0)
    return (<Redirect to={'/listing?id=' + listingId}/>);
  else return (
    <div>
      <Form noValidate validated={formValidated} onSubmit={formSubmit}>
        <fieldset {...(fSetDisabled ? { disabled: true } : {})}>
          <Row id="fields-row">
            <Col id="simple-fields-row">
              {/* Listing title */}
              <Form.Group className="form-group">
                <Form.Label>Listing title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Listing title"
                  required
                  defaultValue={props?.title ? props.title : ""}
                  onChange={(e) => updateFormData("title", e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  You must give your listing a title
                </Form.Control.Feedback>
              </Form.Group>
              <Row id="cat-price-row">
                <CustomCategoryInput
                  defaultValue={props?.category ? props.category : ""}
                  update={updateFormData}
                />
                <PriceInput update={updateFormData} />
              </Row>
              {/* Images */}
              <Form.Group id="img-group" className="form-group">
                <Form.Label>Images</Form.Label>
                <Form.Control
                  type="file"
                  name="files"
                  accept="image/*"
                  multiple
                  required
                  onChange={(e) => parseFiles(e.target as HTMLInputElement)}
                  style={{ width: "50%" }}
                />
                <Form.Control.Feedback type="invalid">
                  You must add at least one image
                </Form.Control.Feedback>
                <div
                  style={{
                    display: images.length ? "flex" : "none",
                    margin: "1em",
                    height: "100%",
                  }}
                >
                  <CloseButton
                    onClick={() => {
                      removeImage(remKey);
                    }}
                  />
                  <ImageViewer images={images} setKey={setRemKey} />
                </div>
              </Form.Group>
            </Col>
            <Col id="desc-col" style={{ textAlign: "left" }}>
              {/* Description */}
              <label className="form-label">Listing Description</label>
              <br />
              <ReactQuill
                id="description"
                theme="snow"
                placeholder="Describe your item..."
                onChange={(value) => updateFormData("desc", value)}
                readOnly={fSetDisabled}
              />
            </Col>
          </Row>
        </fieldset>
        {/* Submit */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {/* Cancel */}
        <Button variant="outline-secondary" type="button">
          Cancel
        </Button>
      </Form>
    </div>
  );
};



/**
 * Functional Component representing a category select input field with
 * an Other field that lets the user input their own custom category.
 * 
 * @param props Should only contain the name of a category to set as
 * the default. If no category is specified, it will default to the
 * disabled empty value.
 * 
 * @returns The resulting component
 */
let CustomCategoryInput: React.FC<any> = (props?: any) => {
  let categories = [
    "Collectibles",
    "Electronics",
    "Digital",
    "Clothing",
    "Sports",
    "Music",
    "Movies",
    "Home",
    "Toys",
  ];

  const getDefaultValue = () => {
    if (!props)
      return "";

    // Check if a default value was passed in (not sure datatype)
    if (!(props.defaultValue in ["", null, undefined])) {
      if (props.defaultValue in categories)
        // Predefined default category
        return props.defaultValue;
      else {
        // Custom category, set custom category input
        setCustomView(true);
        setCustomCat(props.defaultValue);
        return "Other";
      }
    }

    // No default value
    return "";
  };

  const setCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomCat(e.target.value);
    if (e.target.value.length === 0)
      props.update("category", "Other");
    else props.update("category", e.target.value);
  };

  // State for turning on/off the custom category input display
  const [customView, setCustomView] = useState(props?.defaultValue ? true : false);

  // State holding the value of the custom category input field
  const [customCat, setCustomCat] = useState(props?.defaultValue ? props.defaultValue : "Other");

  return (
    <Form.Group as={Col} className="form-group">
      <Form.Label>Category</Form.Label>
      <Form.Control
        as="select"
        name="category"
        onChange={(e) => {
          if (e.target.value === "Other") {
            setCustomView(true);
            props.update("category", customCat);
          } else {
            setCustomView(false);
            props.update("category", e.target.value);
          }
        }}
        defaultValue={props?.defaultValue ? props.defaultValue : ""}
        required
      >
        <option value="" disabled>
          Select a category
        </option>
        {categories.map((cat) => (
          <option value={cat}>{cat}</option>
        ))}
        <option value="Other">Custom (leave blank for "Other")</option>
      </Form.Control>
      <Form.Control
        id="custom-input"
        style={{
          display: customView ? "block" : "none",
          marginTop: "1em",
        }}
        type="text"
        name="custom"
        placeholder="Custom category..."
        onChange={setCategory}
        defaultValue={props?.defaultValue ? props.defaultValue : ""}
      />
      <Form.Control.Feedback type="invalid">
        You must categorize your listing
      </Form.Control.Feedback>
    </Form.Group>
  );
};



let PriceInput: React.FC<any> = (props: any) => {
  const setPrice = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      e.target.value = formatAsMoney(e.target.value);
      console.log(Number(e.target.value.replace(",", "")));
      props.update("price", Number(e.target.value.replace(",", "")) * 100);
    }
  };

  return (
    <Form.Group as={Col} className="form-group">
      <Form.Label>Price</Form.Label>
      <InputGroup>
        <InputGroup.Text>$</InputGroup.Text>
        <FormControl
          type="text"
          name="price"
          placeholder="0.00"
          defaultValue={props.defaultValue ? props.defaultValue : ""}
          required
          onBlur={setPrice}
        />
        <Form.Control.Feedback type="invalid">
          You must set the price of your item
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
};
