import React from "react";
import momo from "../svg/momo.svg";
import shopepay from "../svg/shopepay.svg";

function Footer() {
  return (
    <footer className=" text-[#4B5563] border-t-2  border-[#F6F5FA]  py-[64px]">
      <div className="grid grid-cols-12 md:gap-[32px] gap-[12px] container">
        <div className="col-span-full md:col-span-4 space-y-[12px]">
          <div className="font-bold">Hỗ trợ</div>
          <div>Hotline: 0775600351</div>
          <div>Liên hệ hợp tác: support@gbetech.vn</div>
          <div>Cơ chế giải quyết tranh chấp, khiếu nại</div>
        </div>
        <div className="col-span-full md:col-span-4 space-y-[12px]">
          <div className="font-bold">Giới Thiệu</div>
          <div>Về chúng tôi</div>
          <div>Trang blog</div>
          <div>Cơ hội nghề nghiệp</div>
        </div>
        <div className="col-span-full md:col-span-4 space-y-[12px]">
          <div className="font-bold">Đối tác thanh toán</div>
          <div className="flex items-center space-x-[8px]">
            <img src={momo} alt="" />
            <img src={shopepay} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
