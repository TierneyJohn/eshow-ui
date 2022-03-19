import type { ResponseVO } from "./../plugin/axios";
import { http } from "../plugin/axios";

/**
 * 登录类型封装
 */
export enum LoginType {
  USERNAME,
  PHONE,
  EMAIL,
}

/**
 * 登录信息封装
 */
export interface LoginInfo {
  username?: string;
  phone?: string;
  email?: string;
  password: string;
  loginType: LoginType;
}

export interface User {
  id: string;
  username: string;
  password: string;
  phone: string;
  email: string;
}

const USER_API = {
  LOGIN: "/user/login",
};

export const getUser = (loginInfo: LoginInfo) => {
  return http.post<LoginInfo, ResponseVO<string>>(USER_API.LOGIN, loginInfo);
};
