import api from "../api";

class MediaApi {
  async getRooms(params = {}) {
    return await api.get("/rooms/index", {
      params
    }).then((res) => res.data);
  }

  async store(data) {
    return await api.post("/media/store", data);
  }

  async delete(id) {
    return await api.delete(`/rooms/delete/${id}`);
  }

  async update(id, body) {
    return await api.put(`/rooms/update/${id}`, { ...body });
  }
}
export default MediaApi