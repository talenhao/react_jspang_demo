import axios from "axios";

const URL_GETLIST = 'http://localhost:8000/hook/reactdemo/';

export const urlGetListREQ = () => {
    const instance = axios.get(
        URL_GETLIST
    ).then(
        (res) => {
            console.log('res', res)
            return res.data
        }
    );
    return instance;
}