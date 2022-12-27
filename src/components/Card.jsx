import React from "react";
import location from "../svg/location.svg";

import { Link } from "react-router-dom";

function Card({ props }) {
  return (
    <Link to={`/room/${props.id}`} className="md:col-span-6 col-span-12">
      <div className="bg-white  grid grid-cols-3 rounded-md p-3 space-x-[12px] shadow-2xl hover:shadow-lg transition-all cursor-pointer">
        <div className="col-span-1 w-full max-h-[150px]"><img src={props.images && props.images.length ? props.images[0].path : "https://via.placeholder.com/150"} alt={props.name} className="aspect-square w-full object-cover round-[10px]" /></div>
        <div className="text-black col-span-2 ">
          <div className="mb-[12px] text-black">
            <div className="text-[20px] font-bold text-black">{props.name} ⭐⭐</div>
            <div className="text-[18px] py-2 text-black">{props.info}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-[8px]">
              <img src={location} alt="location" className="w-[18px] h-[18px]" />
              <div>{props.address} </div>
            </div>
            <div>{props.price}đ</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
