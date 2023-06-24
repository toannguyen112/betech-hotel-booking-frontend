import React, { useEffect, useState } from "react";
import Table from "../../../components/Table";
import Authenticated from '../../../Layout/Authenticated'

function Room() {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/admin/rooms`)
      .then((res) => res.json())
      .then((res) => {
        const room = res
        setRooms(room);
      })
    window.scrollTo(0, 0);

  }, []);

  return (
    <Authenticated>
      <div className="font-bold text-[32px] py-[32px]">
        Room
      </div>
      <Table
      isDelete={false}
        route="/admin/room"
        data={rooms}
        columns={[
          { field: "id", label: "id" },
          { field: "name", label: "name" },
          { field: "price", label: "price" },
          { field: "status", label: "status" },
          { field: "phone", label: "phone" },
          { field: "star", label: "star" },
        ]} />

    </Authenticated>
  );
}

export default Room