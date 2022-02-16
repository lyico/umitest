/*
 * @Description  : 
 * @Author       : chenLiang
 * @Date         : 2022-02-14 11:35:07
 * @LastEditors  : chenLiang
 * @LastEditTime : 2022-02-16 17:43:40
 */
import axios from 'axios';

let requestUrl: string = '';

window._axiosLoading = 0;

axios.defaults.timeout = 0;

const service = axios.create();

/** This is a cool guy. */
interface Option {
    /** 是否展示全局错误信息 */
    showErr: boolean;
}

enum Method {
    'get' = 'get',
    'post' = 'post',
    'delete' = 'delete',
    'put' = 'put'
}

interface Options extends Option {
    method: 'get' | 'post'| 'delete' | 'put',
    url: string,
    data: any
}

const request = (options: Options) => {
    console.log(options);
    const methodType: string = options.method.toLowerCase();
    const axData = {
        url: requestUrl + options.url
    };

};


class $http extends Http {

    constructor () {
        super();
    }

    /**
     * get请求
     *
     * @static
     * @param {string} url 请求地址
     * @param {*} [data={}] 请求数据
     * @param {Option} [option={ showErr: true }]  请求统一处理参数
     * @return {*} 
     * @memberof $http
     */
    static [Method.get](url: string, data: any = {}, option: Option = { showErr: true }) {
        return request({
            method:  'get', 
            url,
            data,
            ...option
        })
    }
};