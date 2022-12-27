import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RoomApi from "../api/services/RoomApi";
import { useLocation } from "react-router-dom";

import {
  Link
} from "react-router-dom";
import Button from "../components/Button";

function SearchPage() {
  const [rooms, setRooms] = useState([]);

  const search = useLocation().search;
  const category_id = new URLSearchParams(search).get("category_id");
  const city_id = new URLSearchParams(search).get("city_id");
  const price = new URLSearchParams(search).get("price");
  const size = new URLSearchParams(search).get("size");

  useEffect(() => {
    new RoomApi()
      .getRooms({
        category_id,
        city_id,
        price,
        size,
      })
      .then((res) => {
        const rooms = res.items;
        setRooms(rooms);
      });
  }, []);

  return (
    <div>
      <Header />
      <section className="container items-center space-x-[12px] flex py-[64px]">
        <Link to="/">
          <div className="btn btn-primary" onClick={() => search()}>
            <Button title={"quay lại"} />
          </div>

        </Link>
        <div className="font-bold text-[40px]">Tìm kiếm</div>
      </section>
      <section>
        <div className="container grid grid-cols-12 md:gap-[32px] gap-[12px] py-[32px]">
          {rooms.map((item, index) => {
            return <Card props={item} key={index} />;
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SearchPage;
