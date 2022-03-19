import config from "@/config";
import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

/**
 * 自定义响应结果封装类
 * @param T 返回值类型
 */
export interface ResponseVO<T> {
  /** 响应状态 */
  status: string;
  /** 响应是否成功 */
  success: boolean;
  /** 响应体 */
  result: T;
  /** 响应异常信息 */
  errors: Array<string>;
  /** 响应时间 */
  timestamp: Date;
}

/**
 * request 请求配置项
 */
const axiosConfig: AxiosRequestConfig = {
  baseURL: config.baseURL,
  timeout: config.apiTimeout,
};

const http: AxiosInstance = axios.create(axiosConfig);

/**
 * 异常拦截处理器
 * @param error 异常信息
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorHandler = (error: any) => {
  return new Promise(error);
};

/**
 * request 请求处理器
 */
http.interceptors.request.use((originConfig) => {
  const requestConfig = { ...originConfig };

  if (!requestConfig.url) {
    throw new Error("request need url");
  }

  if (!requestConfig.method) {
    requestConfig.method = "GET";
  }

  return requestConfig;
}, errorHandler);

/**
 * response 响应处理器
 */
http.interceptors.response.use(async (res) => {
  return res.data;
}, errorHandler);

export { http };
