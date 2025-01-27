import axios from "axios";
import axiosApiInstance from "../../../helper/axios";


export const makeOrder = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.api;
        // if (parseInt(data.quantity) >= 0) {
        axiosApiInstance
            .post(`${Url}/v1/order`, data)
            .then((res) => {
                dispatch({ type: "MAKE_ORDER", payload: res.data.data });
                resolve(res);
            })
            .catch((err) => {
                console.log(err);
                // reject(new Error(err.response));
            });
        // }
    });
};


