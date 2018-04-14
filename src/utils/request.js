/**
 * Created by my on 2018-04-12 
 *
 * 提供统一的 http 服务，为后续统一处理未登录等情况做准备
 * 
 */

import axios from 'axios';
import store from './store';
import { BASEURL } from './vars'



const httpFactory = (url, opts) => {

    const defaultOpts = {
        method: 'get',
        timeout: 1000

    }

    const finalOpts = Object.assign({}, defaultOpts, opts, opts.method.toUpperCase() === 'GET' ? { params: opts.data } : {});

    // get 等请求去掉
    if (opts.method.toUpperCase() === 'GET') {
        Object.assign(finalOpts, { params: opts.data });
        delete finalOpts.data;
    }
    if (opts.method.toUpperCase() === 'POST' && opts.isFormData) {


        Object.assign(finalOpts, {
            transformRequest: [function(data, headers) {

                let ret = ''
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }]
        });


    }

    if(opts.isFormData){
    	Object.assign(finalOpts, {
    		headers:{
    			 'Content-Type': 'multipart/form-data'
    		}
    	});
    	delete finalOpts.isFormData;
    }

    const {data, ...resOpts} = finalOpts;

    

    // 创建实例
    var instance = axios.create(Object.assign({}, {
        baseURL: BASEURL,
        timeout: finalOpts.timeout
    }, resOpts));

    instance.interceptors.response.use((res) => {

        console.log(res, 'response interceptors');
        if (res.status === '401') {
            store.dispatch({
                type: 'app/login'
            });
            return;
        }
        return res;
    }, (error) => {
        // 对响应错误做点什么
        return Promise.reject(error);
    });
    // const { method, ...userOpts } = finalOpts;
    return instance[finalOpts.method](url, data);
}
const http = {
    get: function(url, opts) {
        return httpFactory(url, Object.assign({}, opts, { method: 'get' }));
    },
    post: function(url, opts) {
        return httpFactory(url, Object.assign({}, opts, { method: 'post' }));
    }
}

export default http;