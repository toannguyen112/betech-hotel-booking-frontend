import React, { useEffect, useState } from "react";
import FieldSet from "../components/Fields/FieldSet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import CategoriesApi from "../api/services/CategoriesApi";
import { sizesData } from "../seeds/data";
import { useDispatch } from "react-redux";
import { createRoom } from "../app/features/room/roomAction";
import { useNavigate } from "react-router-dom";
import { Form } from 'antd';
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

function PostRoom() {

  const [form, setForm] = useState({
    name: "232",
    info: "",
    category_id: 1,
    address: "",
    size: 0,
    number_room: 0,
    lat: 0,
    lng: 0,
    type_room: "",
  });

  const [sizes, setSizes] = useState(sizesData)

  const [files, setFiles] = useState([])

  const [imageFiles, setImageFiles] = useState([]);
  const [categories, setCategories] = useState([])

  useEffect(() => {
    new CategoriesApi().getCategories().then((res) => {
      const categories = res.data.data
      setCategories(categories)
    })
  }, []);

  const [fileList, setFileList] = useState([])

  const formData = new FormData();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const uploadFile = async () => {
    if (!form.name) return alert("Tên không được bỏ trống")

    const formData = new FormData();
    for (const image of files) {
      formData.append('files', image);
    }

    formData.append("data", JSON.stringify(form));
    formData.append("files", files);

    await dispatch(createRoom(formData));
    alert("Đăng tin thành công đợi xin đợi Admin duyệt");
    navigate({
      pathname: '/tenant/rooms',
    });
  }

  return (
    <div>
      <Header />
      <Slider />
      <section className="container py-[32px]">
        <div className="flex justify-center text-[28px] text-center my-[32px] font-bold">Đăng tin</div>
        <Form onFinish={uploadFile}>
          <div className="grid grid-cols-12 md:gap-[32px]">
            <div className="col-span-4">
              <FieldSet
                updateModelValue={(name) => setForm({ ...form, name })}
                field={{
                  className: "w-full border rounded-md border-black p-[12px]",
                  title: "Tiêu đề",
                  placeholder: "Tiêu đề",
                }}
              />
            </div>
            <div className="col-span-4">
              <FieldSet
                updateModelValue={(address) => setForm({ ...form, address })}
                field={{
                  className: "w-full border rounded-md border-black p-[12px]",
                  title: "Địa chỉ",
                  placeholder: "Địa chỉ",
                }}
              />
            </div>
            <div className="col-span-4">
              <FieldSet
                updateModelValue={(price) => setForm({ ...form, price })}
                field={{
                  className: "w-full border rounded-md border-black p-[12px]",
                  title: "Giá",
                  type: "number",
                  placeholder: "Giá",
                }}
              />
            </div>

            <div className="col-span-4">
              <FieldSet
                updateModelValue={(number_room) => setForm({ ...form, number_room })}
                field={{
                  className: "w-full border rounded-md border-black p-[12px]",
                  title: "Số lượng phòng",
                  type: "number",
                  placeholder: "Số lượng phòng",
                }}
              />
            </div>
            <div className="col-span-4">
              <FieldSet
                updateModelValue={(size) => setForm({ ...form, size })}
                field={{
                  className: "w-full border rounded-md border-black p-[12px]",
                  title: "Diện tích",
                  type: "select_single",
                  options: sizes
                }}
              />
            </div>
            <div className="col-span-4">
              <FieldSet
                updateModelValue={(type_room) => setForm({ ...form, type_room })}
                field={{
                  className: "w-full border rounded-md border-black p-[12px]",
                  title: "Thể loại",
                  type: "select_single",
                  options: categories
                }}
              />
            </div>
            <div className="col-span-4">
              <FieldSet
                updateModelValue={(lat) => setForm({ ...form, lat })}
                field={{
                  className: "w-full border rounded-md border-black p-[12px]",
                  title: "Lat",
                  type: "number",
                  placeholder: "Lat",
                }}
              />
            </div>
            <div className="col-span-4">
              <FieldSet
                updateModelValue={(lng) => setForm({ ...form, lng })}
                field={{
                  className: "w-full border rounded-md border-black p-[12px]",
                  title: "Lng",
                  type: "number",
                  placeholder: "Lng",
                }}
              />
            </div>
            <div className="col-span-4">
              <FieldSet
                updateModelValue={(info) => setForm({ ...form, info })}
                field={{
                  className: "border-black p-[12px] border w-full rounded-md",
                  title: "Mô tả",
                  placeholder: "Mô tả",
                }}
              />
            </div>
            <div className="col-span-4 space-y-3">
              <FilePond
                files={files}
                allowMultiple={true}
                maxFiles={3}
                name="files"
                onupdatefiles={fileItems => {
                  const images = fileItems.map(fileItem => fileItem.file);
                  setFiles(images)
                }}
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              />
            </div>
            <div className="col-span-full flex justify-end">
              <button type="submit" className="flex items-center justify-center overflow-hidden relative text-white px-[20px] py-[10px] rounded-full bg-black">
                Đăng tin
              </button>
            </div>

          </div>
        </Form>
      </section >
      <Footer />
    </div >
  );
}

export default PostRoom;
