/*
 * @Description  : 
 * @Author       : chenLiang
 * @Date         : 2022-02-15 10:20:17
 * @LastEditors  : chenLiang
 * @LastEditTime : 2022-02-17 17:57:58
 */
import { ComponentProps ,Ref} from 'react';
import { Input, RateProps, Rate } from "antd";

console.log();

type cc = Input['props'];

/** aaaa */
interface ClInputProps extends ComponentProps<typeof Input>   {
    /** 1231阿萨德 */
    cc: number;
    ref?: React.Ref<Input>
}

export const ClInput = (props: ClInputProps) => {
    const { cc } = props;
    
    return <div >{cc} <Input  ref={props.ref}/></div>
}

// type RateProps = Rate['props'];


interface PinProps extends RateProps {
    beta: string
};

export const TestRate = (props: PinProps) =>{
    const {beta} = props;
    console.log(beta);

    return <Rate {...props}/>
}