import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { updateFor } from "typescript";
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

  let formatAsMoney = (value: string) => {
    let x: string = "",
        decimal: number = -1, // -1: No decimal, 0: decimal pt, 1: 1 number after point, 2: 2 numbers after point
        sz: number = 0,
        index: number = 0;

    // Get number of numeric chars - used for placing commas
    for (let i of value)
      if (i == ".") break;
      else if (!isNaN(Number(i))) sz++;

    // Iterate over every char in value
    for (let char of value) {
      // No decimal and i is decimal point
      if (decimal === -1 && char === ".") {
        x += char;
        decimal = 0;
        index = sz + 1;
      }

      // Nonnumeric character
      else if (isNaN(Number(char)) || char === " ")
        continue;
      
      // Decimal has been set
      else if (decimal > -1) {
        decimal++;
        x += char;
        if (decimal === 2) break;
      }

      // Just a number
      else {
        x += char;
        if (++index < sz && (sz - index) % 3 === 0)
            x += ",";
      }
    }

    switch (decimal) {
      case -1: return x + ".00";
      case  0: return x +  "00";
      case  1: return x +   "0";
      default: return x;
    }
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
