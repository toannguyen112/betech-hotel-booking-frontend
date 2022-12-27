import api from "../api";

class CategoriesApi {
  async getCategories() {
    return await api.get("/categories/index");
  }

  async create(data) {
    return await api.post("/categories/index", data);
  }

  async show(id) {
    return await api.get(`/categories/show/${id}`);
  }

  async delete(id) {
    return await api.delete(`/categories/delete/${id}`);
  }

  async update(id) {
    return await api.put(`/categories/update/${id}`);
  }

}
export default CategoriesApi