/*
 * @Description  : 登录
 * @Author       : chenLiang
 * @Date         : 2022-02-18 10:00:48
 * @LastEditors  : chenLiang
 * @LastEditTime : 2022-02-18 14:39:50
 */
import { IRouteProps,useParams, useLocation,Location,useHistory   } from 'umi';
import { Form, Input, Button } from "antd";

interface Params {
    id: string;
    q: string;
}

export default function (props:IRouteProps) {
    console.log('test22');
    console.log(props);
    let cc = useParams<Params>();
    console.log(cc.id);
    const {} = useLocation();
    console.log(location);
    console.log(cc);
    return <div>123</div>
}