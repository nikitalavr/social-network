import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "0d5dafff-c621-4405-9828-f143351e7294",
  },
});

export const authAPI = {
  me() {
    return instance.get<ResponseType<AuthMeDataType>>("auth/me");
  },
  login(data: AuthLoginRequestType) {
    return instance.post<
      AuthLoginRequestType,
      AxiosResponse<ResponseType<{ userId: number }>>
    >("auth/login", data);
  },
  logout() {
    return instance.delete<ResponseType>("auth/login");
  },
};

export const usersAPI = {
  get(count?: number, page?: number, term?: string, friend?: boolean) {
    return instance.get<UserResponseType>(
      `users?${count ? `count=${count}` : ""}${page ? `&page=${page}` : ``}`
    );
  },
};

export const followAPI = {
  getStatus(userId: number) {
    return instance.get<true>(`follow/${userId}`);
  },
  follow(userId: number) {
    return instance.post<ResponseType>(`follow/${userId}`);
  },
  unfollow(userId: number) {
    return instance.delete<ResponseType>(`follow/${userId}`);
  },
};


export const profileAPI = {
  getUserProfile(userId: number) {
    return instance.get<UserProfileType>(`profile/${userId}`);
  },
};

type UserResponseType = {
  items: UserType[];
  totalCount: number;
  error: string;
};

export type UserType = {
  name: string;
  id: number;
  photos: PhotosType;
  status: string;
  followed: boolean;
};

type PhotosType = {
  large: string;
  small: string;
};

export type AuthLoginRequestType = {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: boolean;
};
export type AuthResponseDataType = {
  id: number;
  email: string;
  login: string;
};

type AuthMeDataType = {
  id: number;
  email: string;
  login: string;
};

export type ResponseType<D = {}> = {
  resultCode: number;
  messages: string[];
  data: D;
};

export type UserProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
  photos: {
    small: string;
    large: string;
  };
};
