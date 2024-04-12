import axiosService from "../axios/product";
import { IproductLite } from "../interface/product";

export const getAllProduct = async() =>{
        try {
            const { data } = await axiosService.get('/products')
            console.log(data);
            return data
        } catch (error) {
            console.log('error', error);
        }
}
export const getOneProduct = async(id:string) =>{
    try {
        const { data } = await axiosService.get(`/products/${id}`);
        console.log(data);
        return data
    } catch (error) {
        console.log('error', error);
    }
}
export const addProduct = async(product:IproductLite) =>{
    try {
        const { data } = await axiosService.post('/products',product)
        console.log(data);
        return data
    } catch (error) {
        console.log('error', error);
    }
}
export const removeProduct = async(pid:string) =>{
    try {
        const { data } = await axiosService.delete(`/products/${pid}`)
        console.log(data);
        return data
    } catch (error) {
        console.log('error', error);
    }
}
export const updateProduct = async(pid:string,product:IproductLite) =>{
    try {
        const { data } = await axiosService.put(`/products/${pid}`,product)
        console.log(data);
        return data
    } catch (error) {
        console.log('error', error);
    }
}
