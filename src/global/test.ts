/*
 * @Description  : 泛型测试
 * @Author       : chenLiang
 * @Date         : 2022-02-16 10:27:29
 * @LastEditors  : chenLiang
 * @LastEditTime : 2022-02-16 14:35:13
 */

function test<T>(arg: T): T {
    return arg
}

const test2 = <T>(arg: T): T => {
    return arg
}

test2(123)
test(123);

interface Test<T = number> {
    (arg: T): T
}

function change<T, U>(arg: [T, U]): [U, T] {
    return [arg[1], arg[0]]
}

const arr = change([1, 2])

interface UserInfo {
    name: string;
    age: string;
}

function  request<T>(url: string): Promise<T> {
    return fetch(url).then(res=> res.json())
}

request<UserInfo>('user/info').then(res=>{
    console.log(res.name);
})

interface len{
    length: number
}

function printLen<T extends len>(arg: T): T {
    console.log(arg.length)
    return arg;
}

printLen('123')
// printLen(10) //error


class Stack<T> {
    private arr:T[] = [];
    push(item: T) {
        this.arr.push(item);
    }
    pop(){
        this.arr.pop();
    }
    // 泛型无法约束类的静态成员
    // static cc():T | undefined {
    //     return this.arr.pop();
    // }
}

const s1 = new Stack<number>();

// s1.push('12'); //error
s1.push(123);


// 开发实战

import axios from "axios";

interface API {
    'user/info' : {
        id: number
    };
    
    'add/user': {
        name: string;
        age: number
    }
}


function axiosRequest<T extends keyof API>(url: T, obj: API[T]) {
    return axios.post(url, obj);
}

axiosRequest('add/user', {
    name: '123',
    age: 123,
    // cc:'123' //error
})


// error
// axiosRequest('user/xxx', {
//     12312
// })