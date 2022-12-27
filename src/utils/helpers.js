import { toast } from "react-toastify";
import { ERROR, SUCCESS, WARING } from "./constants";

export function formatPrice(price) {
    return price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

export function formatDate(date) {
    const local = new Date(date);
    return local.toLocaleString().slice(0, 10);
}

export const configMessage =
{
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
}

export function currentModel() {
    return window.location.pathname.split("/")[2];
};

export function alertMessage(message, type = "success") {
    const config =
    {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    }

    if (SUCCESS === type) return toast.success(`${message}`, config);

    if (ERROR === type) return toast.error(`${message}`, config);

    if (WARING === type) return toast.error(`${message}`, config);

}