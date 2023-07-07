import {
  Link
} from "react-router-dom";

import React from "react";
import { useDispatch, useSelector } from 'react-redux';

export default function Table(props) {

  const dispatch = useDispatch();

  const renderField = (data) => {
    if (data === "ACTIVE") {
      return "Hoạt động";
    }

    if (data === "INACTIVE") {
      return "Ngừng hoạt động";
    }

    return data;
  }

  return (
    <div className="overflow-x-auto">
      <div >
        {
          props.isCreate ? (<div className="flex">
            <Link to={`${props.route}/create`}>
              <div className="btn btn-primary p-4 mb-4">Thêm mới</div>
            </Link>
          </div>) : ''
        }
      </div>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="table">
          <thead>
            <tr>
              {props.columns.map((item, index) => {
                return (
                  <th className="py-0" key={index}>
                    <div className="flex items-center space-between">{item.label}</div>
                  </th>
                );
              })}

              <th className="py-0">
                <div className="flex items-center space-between">...</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.data && props.data.length > 0 ? props.data.map((datum, index) => {
              return (
                <tr key={index}>
                  {props.columns.map((col, index) => {
                    return (
                      <td key={index}>
                        {col.field === "image" ? (
                          <div className="max-w-[100px] max-h-[100px]">
                            {datum[col.field]}
                            <img
                              alt=""
                              src={datum[col.field]} className="w-full h-full aspect-square" />
                          </div>
                        ) : <span> {renderField(datum[col.field])} </span>}

                      </td>
                    );
                  })}
                  <td>
                    <div className="flex items-center space-x-[12px]">
                      <Link to={`${props.route}/form?id=${datum['id']}`} >
                        <button className="btn btn-secondary">Chi tiết</button>
                      </Link>
                      {
                        props.isDelete ?? (
                          <button
                            onClick={() => { props.deleteRecord(datum['id']) }}
                            className="btn btn-secondary">Xóa</button>
                        )
                      }

                    </div>
                  </td>
                </tr>
              );
            }) : null}
          </tbody>
        </table>
      </div >
    </div>
  );
}
