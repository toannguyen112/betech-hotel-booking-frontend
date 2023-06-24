import Footer from '../../components/Footer'
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/Header'
import { useDispatch } from 'react-redux';
import { deleteTenantRoom, getTenantRooms } from '../../app/features/tenant/tenantActions';

function TenantRooms() {
    const { tenantRooms } = useSelector((state) => state.tenant);

    const dispatch = useDispatch();

    const remove = async (id) => {
        await dispatch(deleteTenantRoom({ id }));
        await dispatch(getTenantRooms());
    }

    return (
        <React.Fragment>
            <Header />
            <div className='text-center text-[40px] py-[64px] font-bold'>Danh sách phòng </div>
            {
                tenantRooms.length ? (
                    <div className='container grid grid-cols-12 gap-[32px] py-[32px]' >
                        {
                            tenantRooms.map((item, index) => {
                                return (
                                    <div key={index} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 col-span-3">
                                        {
                                            item.images && item.images.length > 0 ? (
                                                <img className="rounded-t-lg" src={item.images[0]?.path} alt="" />
                                            ) : <div> <img src="https://via.placeholder.com/100" alt="" className='w-full h-full aspect-square ' /> </div>
                                        }
                                        <div className="p-5">
                                            <div href="#">
                                                <h5 className="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">{item.name} </h5>
                                            </div>
                                            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.info} </p> */}
                                            <div className='space-x-2 flex overflow-x-auto items-center'>
                                                <Link to={`/room/${item.id}`} href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    Chi tiết
                                                </Link>
                                                <Link to={`/tenant/room/update/${item.id}`} href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    Cập nhật phòng
                                                </Link>
                                                <div
                                                    onClick={() => remove(item.id)}
                                                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    Xóa bài đăng
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : <div className='text-center py-[64px]'>Chưa Có phòng</div>
            }
            <Footer />
        </React.Fragment>
    )
}

export default TenantRooms