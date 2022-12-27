import api from "../api";

class RoomApi {
  async getRooms(params = {}) {
    return await api.get("/rooms/index", {
      params
    }).then((res) => res.data);
  }

  async create(data) {
    return await api.post("/rooms/create", data);
  }

  async show(id) {
    return await api.get(`/rooms/show/${id}`);
  }

  async delete(id) {
    return await api.delete(`/rooms/delete/${id}`);
  }

  async update(id, body) {
    return await api.put(`/rooms/update/${id}`, { ...body });
  }
}
export default RoomApi