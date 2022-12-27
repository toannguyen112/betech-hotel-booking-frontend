import React from "react";
import { Link } from "react-router-dom";
function CardV2({props}) {
  return (
    <div className="col-span-4 bg-white shadow-2xl rounded-xl hover:shadow-xl transition-all">
     <Link to={`/search?category_id=${props.id}`}>
        <div>
          <img src={props.image} alt="" className="h-full w-full rounded-t-[12px]" />
        </div>
        <div className="text-center py-[24px] font-bold text-black text-[18px]"> {props.name} </div>
     </Link>
    </div>
  );
}

export default CardV2;
