/*
 * @Description  : 
 * @Author       : chenLiang
 * @Date         : 2022-02-11 17:29:40
 * @LastEditors  : chenLiang
 * @LastEditTime : 2022-02-11 17:51:12
 */

import { Form, Input, Button } from "antd";

interface  User {
    usename: string;
    password: string;
}

const LoginPage = () => {

    const onFinish = (values: User) => {
        console.log("success: ", values);
        Object.keys(values).forEach((key: string) => {
            // console.log(values[item]);
        })
    }

    const onFinishFailed = (error: any) => {
        console.log('Failed:', error);
    }


    return <div className="login-page-box">
        <Form className="login-form-box" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
            <Form.Item label="用户名" name="usename" rules={[{ required: true, message: '请输入用户名' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default LoginPage;