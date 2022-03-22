import axios from "axios";
import {UserType} from "./types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': "b2d25b10-75d3-4d4a-a513-a9de8b4b57cf"
    }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

export const usersAPI = {
    getUsers(currentPage = 1,
             pageSize = 10,
             term: string = '',
             friend: null | boolean = null) {
        return instance.get<GetItemsType>(
            `users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`)
        )
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<APIResponseType>
    }
}



