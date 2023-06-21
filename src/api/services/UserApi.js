import api from "../api";

class UserApi {
    async getUsers() {
        return await api.get("/user/get-users");
    }

    async show(id) {
        return await api.get(`/user/show/${id}`);
    }

    async delete(id) {
        return await api.get(`/user/delete/${id}`);
    }

    async login(data) {
        return await api.get("/user/login", { ...data });
    }

    async register(data) {
        return await api.post("/user/register", data);
    }

    async logout() {
        return await api.post("/user/logout");
    }

    async order(data) {
        return await api.post("/user/order", { ...data });
    }

    async userOrders(id) {
        return await api.get(`/user/${id}/get-user-order`);
    }

    async userDeleteRoom(userId, roomId) {
        return await api.delete(`/user/${userId}/delete-room/${roomId}`);
    }
}

export default UserApi