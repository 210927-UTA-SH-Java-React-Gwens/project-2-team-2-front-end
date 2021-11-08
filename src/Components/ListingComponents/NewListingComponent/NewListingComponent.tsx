import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { formatAsMoney } from "../listing";
import "./NewListing.css";

export const NewListing: React.FC<any> = () => {
  let categories = [
    "Collectibles",
    "Electronics",
    "Clothing",
    "Sports",
    "Music",
    "Movies",
    "Home",
    "Toys",
    "Other",
  ];

  const [customView, setCustomView] = useState(false);
  const [fsetDisabled, setFsetDisabled] = useState(false);
  const [customCat, setCustomCat] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    desc: "",
    category: "",
  });

  let updateFormData = (name: string, value: any) => {
    setFormData({ ...formData, [name]: value });
  };

  

  let formSubmit = (event: any) => {
    event.preventDefault();

    //setFsetDisabled(true);
    console.log(formData);
  };

  return (
    <div id="new-listing">
      <form id="nl-form" onSubmit={formSubmit}>
        <fieldset id="nl-fset" disabled={fsetDisabled}>
          <div id="nl-fields">
            <div id="nl-simple">
              <label htmlFor="title">Listing title</label>
              <input
                id="nl-title"
                type="text"
                name="title"
                placeholder="Title..."
                onChange={(e) => updateFormData("title", e.target.value)}
                required
              />

              <label htmlFor="price">Price</label>
              <div id="price">
                <span style={{ marginRight: ".2em" }}>$</span>
                <input
                  name="price"
                  onBlur={(e) => {
                    e.target.value = formatAsMoney(e.target.value);
                    updateFormData("price", Number(e.target.value));
                  }}
                  placeholder="0.00"
                />
              </div>

              <label htmlFor="category">Category</label>
              <select
                name="category"
                onChange={(e) => {
                  if (e.target.value === "Custom") {
                    setCustomView(true);
                    updateFormData("category", customCat);
                  } else {
                    setCustomView(false);
                    updateFormData("category", e.target.value);
                  }
                }}
                required
              >
                <option disabled selected>
                  Select a category
                </option>
                {categories.map((cat) => (
                  <option value={cat}>{cat}</option>
                ))}
                <option value="Custom">Custom</option>
              </select>
              <label
                style={{ visibility: customView ? "visible" : "hidden" }}
                htmlFor="custom"
              ></label>
              <input
                id="custom-input"
                style={{ visibility: customView ? "visible" : "hidden" }}
                type="text"
                name="custom"
                placeholder="Custom category..."
                onChange={(e) => {
                  setCustomCat(e.target.value);
                  updateFormData("category", e.target.value);
                }}
              />
            </div>

            <div id="nl-desc-div">
              <label htmlFor="desc">Description</label>
              <br />
              <ReactQuill
                id="description"
                theme="snow"
                placeholder="Description..."
                onChange={(value) => updateFormData("desc", value)}
              />
            </div>
          </div>
          <input
            id="nl-submit"
            type="submit"
            name="nl-submit"
            value="Create listing"
          />
        </fieldset>
      </form>
    </div>
  );
};
