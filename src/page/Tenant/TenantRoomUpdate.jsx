import React, { useEffect, useState } from "react";
import FieldSet from "../../components/Fields/FieldSet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import { sizesData } from "../../seeds/data";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { updateRoom } from "../../app/features/room/roomAction";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

function TenantRoomUpdate() {

    let { id } = useParams();

    const [images, setImages] = useState([]);

    const [form, setForm] = useState({
        name: "",
        info: "",
        category_id: 1,
        tenant_id: 1,
        address: "",
        size: 0,
        number_room: 0,
        lat: 0,
        lng: 0,
        type_room: "",
        images: []
    });

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_BACKEND_URL}/rooms/show/${id}`)
            .then((res) => res.json())
            .then((res) => {
                const room = res.data
                setForm(room);
                setImages(room.images);
            })
        window.scrollTo(0, 0);

    }, []);

    const navigate = useNavigate();

    const categories = useSelector((state) => state.room.categories);

    const [files, setFiles] = useState([])

    const [sizes, setSizes] = useState(sizesData)

    const [imageFiles, setImageFiles] = useState([]);

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        if (!form.name) return alert("Tên không được bỏ trống");

        const formData = new FormData();
        for (const image of files) {
            formData.append('files', image);
        }

        formData.append("data", JSON.stringify(form));
        formData.append("files", files);

        await dispatch(updateRoom(formData));
        alert("Update Success");
        navigate({
            pathname: '/tenant/rooms',
        });
    };

    return (
        <div>
            <Header />
            <Slider />
            <section className="container py-[32px]">
                <div className="flex justify-center text-[28px] text-center my-[32px] font-bold">Cập nhật phòng {id} </div>
                <div className="grid grid-cols-12 md:gap-[32px]">
                    <div className="col-span-4">
                        <FieldSet
                            modelValue={form.name}
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
                            modelValue={form.address}
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
                            modelValue={form.price}
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
                            modelValue={form.number_room}
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
                            modelValue={form.size}
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
                            modelValue={form.type_room}
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
                            modelValue={form.lat}
                            updateModelValue={(lat) => setForm({ ...form, lat })}
                            field={{
                                className: "w-full border rounded-md border-black p-[12px]",
                                title: "Lat",
                                type: "number",
                                placeholder: "0,0"
                            }}
                        />
                    </div>
                    <div className="col-span-4">
                        <FieldSet
                            modelValue={form.lng}
                            updateModelValue={(lng) => setForm({ ...form, lng })}
                            field={{
                                className: "w-full border rounded-md border-black p-[12px]",
                                title: "Lng",
                                type: "number",
                                placeholder: "0,0"
                            }}
                        />
                    </div>
                    <div className="col-span-4">
                        <FieldSet
                            modelValue={form.info}
                            updateModelValue={(info) => setForm({ ...form, info })}
                            field={{
                                className: "border-black p-[12px] border w-full rounded-md",
                                title: "Mô tả",
                                placeholder: "Mô tả",
                            }}
                        />
                    </div>
                    <div className="col-span-6 space-y-3">
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
                    <div className="col-span-6 flex">
                        {
                            images && images.length ? (
                                images.map((item, index) => {
                                    return (
                                        <div key={index}><img src={item.path} alt="" className="max-w-[200px]" /></div>
                                    )
                                })
                            ) : null
                        }
                    </div>

                    <div className="col-span-full flex justify-end">
                        <button className="btn btn-secondary" onClick={() => handleSubmit()}>
                            Cập nhật
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default TenantRoomUpdate;
