/*
 * @Description  : 
 * @Author       : chenLiang
 * @Date         : 2022-02-18 16:43:30
 * @LastEditors  : chenLiang
 * @LastEditTime : 2022-02-18 17:53:54
 */
import axios, { AxiosRequestHeaders, AxiosRequestConfig } from "axios";

interface AxiosOptions {
  baseURL: string;
  timeout: number;
}

const config: AxiosOptions = {
  baseURL: '',
  timeout: 1000 * 30
};

class Http {
  // service;
  constructor(options: AxiosRequestConfig) {

  }
}