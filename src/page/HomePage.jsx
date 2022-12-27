import React, { useEffect, useState } from "react";
import FieldSet from "../components/Fields/FieldSet";
import CardV2 from "../components/CardV2";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import { pricesData, regionsData, sizesData } from "../seeds/data";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function HomePage() {
  const [form, setForm] = useState({
    category_id: null,
    city_id: null,
    price: null,
    size: null,
  });

  const rooms = useSelector((state) => state.room.rooms);

  const categories = useSelector((state) => state.room.categories);

  const navigate = useNavigate();

  const [prices, setPrices] = useState(pricesData);

  const [sizes, setSizes] = useState(sizesData);

  const [regions, setRegions] = useState(regionsData);

  useEffect(() => {
    document.title = "Booking";
  }, []);

  const search = () => {
    const newData = {};
    Object.entries(form)
      .filter(([, value]) => value !== null)
      .forEach(([key, value]) => (newData[key] = value));

    const qs = "?" + new URLSearchParams(newData);

    const route = "/search";
    navigate({
      pathname: route,
      search: qs,
    });
  };

  return (
    <div>
      <Header />
      <Slider />
      <section className="container py-[32px] md:flex md:justify-center max-md:px-1">
        <div className="grid grid-cols-5 items-center md:gap-[32px] gap-[12px]">
          <div className="col-span-full md:col-span-1">
            <FieldSet
              updateModelValue={(category_id) => setForm({ ...form, category_id })}
              field={{
                typeValue: "id",
                title: "Thể loại",
                type: "select_single",
                options: categories,
              }}
            />
          </div>
          <div className="col-span-full md:col-span-1">
            <FieldSet
              updateModelValue={(city_id) => setForm({ ...form, city_id })}
              field={{
                typeValue: "id",
                title: "Tỉnh/thành phố",
                type: "select_single",
                options: regions,
              }}
            />
          </div>
          <div className="col-span-full md:col-span-1">
            <FieldSet
              updateModelValue={(price) => setForm({ ...form, price })}
              field={{
                typeValue: "string",
                title: "Giá ",
                type: "select_single",
                options: prices,
              }}
            />
          </div>
          <div className="col-span-full md:col-span-1">
            <FieldSet
              updateModelValue={(size) => setForm({ ...form, size })}
              field={{
                typeValue: "string",
                title: "Diện tích ",
                type: "select_single",
                options: sizes,
              }}
            />
          </div>
          <div className="col-span-full md:col-span-1 flex items-end h-full">
            <button className="btn btn-primary" onClick={() => search()}>
              Tìm kiếm
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container grid grid-cols-2 py-[32px]">
          <div className="text-[24px]  col-span-full md:col-span-1 max-md:text-justify">
            <div className="font-bold text-black pb-2">Kênh thông tin Phòng Trọ số 1 Việt Nam</div>
            <div className="text-[14px]">Kênh thông tin Phòng Trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.</div>
          </div>
        </div>
      </section>
      <section>
        <div className="container grid grid-cols-12 gap-[12px] md:gap-[32px] py-[32px]">
          {categories.map((item, index) => {
            return <CardV2 props={item} key={index} />;
          })}
        </div>
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

export default HomePage;
