/*
 * @Description  : 
 * @Author       : chenLiang
 * @Date         : 2022-02-11 17:29:40
 * @LastEditors  : chenLiang
 * @LastEditTime : 2022-02-18 09:25:27
 */

import { createContext, useRef, ComponentProps } from "react";

import { Form, Input, Button } from "antd";
import styles from './index.less'

import {ClInput, TestRate} from '../../components/ClInput'
// import {$http} from '../../global/$http';



// $http.get('test/123')

// $http.get('123',{}, {showErr: false})
interface User {
    usename: string;
    password: string;
} 

const LoginPage = () => {

    const btn = useRef<Input>(null);

    const onFinish = (values: {[key: string]: string}) => {
        console.log("success: ", values);
        Object.keys(values).forEach((key) => {
            console.log(values[key]);
        })
    }
    
    const onFinishFailed = (error: any) => {
        console.log('Failed:', error);
        console.log(btn.current);
    }

    const onCheckedChange = (flag: boolean) =>{
        console.log(flag);
    }

    return <div className={styles.login_page_box}>
        <TestRate value={1} beta={'123'} count={1} onChange={num=> onCheckedChange(!!num)} disabled/>
        <ClInput cc={123} placeholder="4156"/>
        <Form labelCol={{ span: 4 }} className={styles.login_form_box} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
            <Form.Item label="用户名" name="usename" rules={[{ required: true, message: '请输入用户名' }]}>
                <Input  ref={btn}/>
            </Form.Item>
            <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit"  block size="large">
                    提交
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default LoginPage;