import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import CloseIcon from "@mui/icons-material/Close";

import useCartStore from "../store/cartStore";

export default function CartCard({ data }) {
  const [size, setSize] = useState();
  const removeItem = useCartStore((state) => state.RemoveCartItem);
  const EditItem = useCartStore((state) => state.EditCartItem);

  //this block gives a wrong output
  function handleSizeChange(itemToEdit, newSize) {
    setSize(newSize);
    EditItem(itemToEdit, newSize);
  }

  function handleRemoveItem(itemId) {
    removeItem(itemId);
  }

  return (
    <div className="cartCard">
      <div className="flex-none w-32 text-gray-500 bg-gray-300 overflow-scroll">
        <img src={data.imgUrl} alt={data.productName} className="" />
      </div>
      <div className="grow w-48  text-xl text-left px-4 py-2">
        <p className="font-bold text-gray-700">{data.productName}</p>
        <div>
          <label for="sizes" className="text-red-500">
            size:{" "}
          </label>
          <select
            className="bg-white text-black border-2"
            name="sizes"
            id="sizes"
            value={data.size}
            //this block give a wrong output
            onChange={(e) => handleSizeChange(data, e.target.value)}
          >
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
          </select>
        </div>

        <div className="flex justify-between my-2 text-black">
          <p className="">
            Qty:{" "}
            <input
              type="number"
              className="w-6 border-2 rounded bg-white"
              value={data.qty}
            />
          </p>
          <p className="font-bold text-purple-500">${data.productPrice} x 1</p>
        </div>
      </div>
      <div className="py-11">
        <button
          className="flex-none w-7  border-2  h-7 rounded-full bg-red-300"
          onClick={() => handleRemoveItem(data.id)}
        >
          <CloseIcon sx={{ fontSize: "12px", marginBottom: "3px" }} />
        </button>
      </div>
    </div>
  );
}
