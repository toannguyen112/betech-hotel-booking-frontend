import api from "../api";

class TenantApi {

    async getTenants() {
        return await api.get("/tenant/index");
    }

    async create(data) {
        return await api.post("/tenant/index", data);
    }

    async show(id) {
        return await api.get(`/tenant/show/${id}`);
    }

    async delete(id) {
        return await api.delete(`/tenant/delete/${id}`);
    }

    async update(id,data) {
        return await api.put(`/tenant/update/${id}`,data);
    }
}

export default TenantApi