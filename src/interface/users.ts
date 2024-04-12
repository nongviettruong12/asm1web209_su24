export interface IUser {
        id:string,
        name:string,
        phone:string,
        email:string,
        password:string
}
export type IUserRegister = Pick<IUser,'name'|'phone'|'email'|'password'>
export type IUserLogin = Pick<IUser,'email'|'password'>