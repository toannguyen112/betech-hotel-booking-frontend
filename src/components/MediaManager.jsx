import React, { useEffect, useState } from 'react'
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { Spin } from 'antd';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

function MediaManager() {
    const [files, setFiles] = useState([]);
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!files.length > 0) return;
        const formData = new FormData();
        files.map(item => item.file).forEach(file => formData.append('files', file))
        formData.append("files", files);

        setLoading(true);
        fetch('http://localhost:8000/media/store', {
            method: 'post',
            body: formData
        }).then((res) => res.json())
            .then((res) => {
                setImages(res.data)
            }).then((res) => {
                setFiles([]);
            }).then((res) => {
                setLoading(false);
            });
    }, [files])


    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_BACKEND_URL}/media/index`)
            .then((res) => res.json())
            .then((res) => {
                setImages(res.data)
            })
        window.scrollTo(0, 0);

    }, []);

    return (
        <Spin tip="Loading..." className='h-full w-full' spinning={loading} delay={500}>
            <div className='container'>
                <div className='grid grid-cols-4 justify-between py-[32px] items-start gap-[32px]'>
                    <div className='col-span-3 grid grid-cols-4 gap-[32px]' >
                        {
                            images && images.length ? images.map((image, index) => {
                                return (
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg col-span-1" key={index}>
                                        <img src={image.path} alt="" className='w-full h-full' />
                                    </div>
                                )
                            }) : null
                        }
                    </div>
                    <div className='col-span-1'>
                        <FilePond
                            files={files}
                            allowMultiple={true}
                            name="files"
                            onupdatefiles={async (fileItems) => {
                                setFiles(fileItems);
                            }}
                            labelIdle='Upload File'
                        />

                    </div>
                </div>
            </div>
        </Spin>
    )
}

export default MediaManager