import {api} from "./api-config";
import {AxiosResponse} from "axios";

export const getAxios = (endpoint: string) => handle(api.get(endpoint));

export const postAxios = (endpoint: string, data: any) => handle(api.post(endpoint, data));

async function handle(axiosQuery: Promise<AxiosResponse>) {
    const response = await axiosQuery;
    return response.data;
}