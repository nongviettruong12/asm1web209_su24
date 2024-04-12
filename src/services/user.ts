import { IUserLogin,IUserRegister } from "../interface/users";
import axiosService from "../axios/product";

export const UserRegister = async(dataUser:IUserRegister) =>{
    try {
        const { data } = await axiosService.post(`/register`,dataUser)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const UserLogin = async(dataUser:IUserLogin) =>{
    try {
        const { data } = await axiosService.post(`/login`,dataUser)
        return data
    } catch (error) {
        console.log(error);
        
    }
}