import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderRoom } from "../app/features/user/userActions";

function RoomDetail() {

  let { id } = useParams();

  const [room, setRoom] = useState({});
  const [images, setImages] = useState([]);

  const { userInfo, userToken } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/rooms/show/${id}`)
      .then((res) => res.json())
      .then((res) => {
        const room = res.data
        setRoom(room);
        setImages(room.images);
      })
    window.scrollTo(0, 0);

  }, []);

  const order = () => {
    if (!userToken) return alert("Yêu cầu đăng nhập");
    dispatch(orderRoom({
      user_id: userInfo.id,
      room_id: room.id,
    }));
  }

  return (
    <div>
      <Header />
      <Slider />
      <div className="container space-y-2 py-[32px] ">
        <div className="space-y-3 py-[32px]">
          <div className=" font-bold text-black text-[20px]"> {room.name} </div>
          <div className=" font-bold text-black text-[16px]">{room.address}</div>
        </div>
        <div className="grid grid-cols-12 md:gap-[32px] gap-[12px]">
          {images.map((image, index) => {
            return (
              <div key={index} className="col-span-4">
                <img src={image.path} alt={image.filename} className="w-full h-full aspect-square" />
              </div>
            )
          })}
        </div>
      </div>
      <section className="container space-y-4 text-black py-[32px]">
        <div className="text-[20px] font-bold">Chi tiết</div>
        <div> {room.info} </div>
        <div className="text-[20px] font-bold">Giá phòng</div>
        <div> {room.price}đ </div>
        <button className="btn btn-secondary" onClick={() => order()} >Đặt phòng</button>
      </section>
      <Footer />
    </div>
  );
}

export default RoomDetail;
