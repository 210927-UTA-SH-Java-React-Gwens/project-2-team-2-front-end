import React, { useState } from "react";
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

  let formatAsMoney = (value: string) => {
    let x: string = "";
    let decimal: number = -1;
    let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    for (let i of value) {
      // No decimal and i is decimal point
      if (decimal === -1 && i === ".") {
        x += i;
        decimal = 0;
      }

      // Nonnumeric character
      else if (!(i in numbers)) continue;
      // Decimal has been set
      else if (decimal > -1) {
        decimal++;
        x += i;
        if (decimal === 2) break;
      }

      // Just a number
      else x += i;
    }
    return x;
  };

  let formSubmit = (event:any) => {
    event.preventDefault();

    setFsetDisabled(true);
  }

  return (
    <div id="new-listing">
      <form id="nl-form" onSubmit={formSubmit}>
        <fieldset id="nl-fset" disabled={fsetDisabled}>
          <div id="nl-fields">
            <div id="nl-simple">
              <label htmlFor="title">Listing title</label>
              <input id="nl-title" type="text" name="title" />

              <label htmlFor="price">Price</label>
              <div id="price">
                <span style={{marginRight: '.2em'}}>$</span>
                <input
                  name="price"
                  onChange={(e) =>
                    (e.target.value = formatAsMoney(e.target.value))
                  }
                />
              </div>

              <label htmlFor="category">Category</label>
              <select
                name="category"
                onChange={(e) => {
                  setCustomView(e.target.value === "Custom");
                }}
              >
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
              />
            </div>

            <div id="nl-desc-div">
              <label htmlFor="desc">Description</label>
              <br />
              <textarea name="desc" placeholder="Description..."></textarea>
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
