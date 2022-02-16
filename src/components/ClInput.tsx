/*
 * @Description  : 
 * @Author       : chenLiang
 * @Date         : 2022-02-15 10:20:17
 * @LastEditors  : chenLiang
 * @LastEditTime : 2022-02-15 15:33:57
 */
import { ComponentProps } from 'react';
import { Input, RateProps, Rate } from "antd";

console.log();

type cc = Input['props'];

/** aaaa */
interface ClInputProps extends ComponentProps<typeof Input>  {
    /** 1231阿萨德 */
    cc: number
}

export const ClInput = (props: ClInputProps) => {
    const { cc } = props;
    
    return <div>{cc} <Input  {...props}/></div>
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