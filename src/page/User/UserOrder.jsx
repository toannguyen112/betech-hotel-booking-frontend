import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserApi from '../../api/services/UserApi';

function UserOrder() {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { userInfo, userToken } = useSelector((state) => state.user);

  useEffect(() => {

    setIsLoading(true);
    fetch(`${process.env.REACT_APP_BACKEND_URL}/user/${userInfo?.id}/get-user-order`)
      .then(res => res.json()).then((result) => {
        setRooms(result.data)
        setIsLoading(false);
      }).catch((err) => {
        console.log(err);
      });


  }, [userInfo]);

  const remove = async (roomId) => {
    new UserApi().userDeleteRoom(userInfo?.id, roomId).then((res) => {
      const rooms = res.data.data;
      setRooms(rooms)
      setIsLoading(false);
    });
  }

  return (
    <div >
      <Header />
      <section>
        <div className='container'>
          <div className='text-center font-bold text-[40px] py-[64px]'>Danh sách phòng đã đặt</div>
          <div className='container grid grid-cols-12 gap-[32px] py-[32px]' >
            {
              rooms.map((item, index) => {
                return (
                  <div key={index} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 col-span-3">
                    <div className="p-5">
                      <h5 className="mb-2 text-lg font-bold tracking-tight  text-black">{item.room_name} </h5>
                      <h5 className="mb-2 text-lg font-bold tracking-tight  text-black">{item.id} </h5>
                      <h6 className="mb-2 text-sm font-bold tracking-tight  text-black">Giá:{item.room_price}đ </h6>
                      <h6 className="mb-2 text-sm font-bold tracking-tight  text-black">Trạng thái:{item.status} </h6>
                      <div className='space-x-2 flex'>
                        <Link to={`/room/${item.id}`} href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Chi tiết
                        </Link>
                        <div onClick={() => remove(item.id)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Hủy
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default UserOrder
