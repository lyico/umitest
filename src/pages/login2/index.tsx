/*
 * @Description  : 登录
 * @Author       : chenLiang
 * @Date         : 2022-02-18 10:00:48
 * @LastEditors  : chenLiang
 * @LastEditTime : 2022-02-18 16:28:17
 */
import { IRouteComponentProps } from 'umi';
import { Form, Input, Button, message } from "antd";
import styles from './index.less';
import logo from 'img/logo.png';

export default (props: IRouteComponentProps) => {

	/**
	 * 提交
	 *
	 * @param {{ [key: string]: string }} data
	 */
	const finish = (data: { [key: string]: string }) => {
		Object.keys(data).forEach((key: string) => {
			console.log(`${key}: ${data[key]}`);
		});
		console.log(data);
	}

	/**
	 * 还有未填写表单项
	 *
	 * @param {*} error
	 */
	const finishFailed = (error: any) => {
		console.log(error);
		message.error('请完善表单数据');
	}


	return <div className={styles.login_page_box}>
		<div className={styles.login_form_box}>
			<div className={styles.logo_box}>
				<img src={logo} />
			</div>
			<Form labelCol={{ span: 4 }} onFinish={finish} onFinishFailed={finishFailed}>
				<Form.Item label="账号" name='username' rules={[{ required: true, message: '请输入账号' }]}>
					<Input />
				</Form.Item>
				<Form.Item label="密码" name='passoword' rules={[{ required: true, message: '请输入密码' }]}>
					<Input.Password visibilityToggle={false} />
				</Form.Item>
				<Form.Item>
					<Button htmlType='submit' type="primary" block size='large'>登录</Button>
				</Form.Item>
			</Form>
		</div>
	</div>
}