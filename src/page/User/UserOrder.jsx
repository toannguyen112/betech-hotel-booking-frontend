import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Table from '../../components/Table'
import { useSelector } from 'react-redux';

function UserOrder() {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { userInfo, userToken } = useSelector((state) => state.user);

  useEffect(() => {
    setIsLoading(true);
    fetch(`$${process.env.REACT_APP_BACKEND_URL}/user/${userInfo?.id}/get-user-order`).then(res => res.json()).then((result) => {
      setRooms(result.data)
      setIsLoading(false);
    }).catch((err) => {
      console.log(err);
    });

  }, [userInfo]);
  return (
    <div >
      <Header />
      <section>
        <div className='container'>
          <div className='text-center font-bold text-[40px] py-[64px]'>Danh sách phòng đã đặt</div>
          {!isLoading ? (
            rooms.length > 0 ? (
              <Table
                data={rooms}
                columns={[
                  { field: "id", label: "ID" },
                  { field: "room_name", label: "Tên Phòng" },
                  { field: "status", label: "Trạng thái" },
                  { field: "createdAt", label: "Ngày tạo" },
                  { field: "updatedAt", label: "Ngày cập nhật" },
                ]} />
            ) : <div className='text-center py-8'>Chưa có phòng nào</div>
          ) : <div>Loading...</div>}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default UserOrder
