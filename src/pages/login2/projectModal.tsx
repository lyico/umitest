/*
 * @Description  : 
 * @Author       : chenLiang
 * @Date         : 2022-02-23 16:18:15
 * @LastEditors  : chenLiang
 * @LastEditTime : 2022-02-23 16:31:35
 */

import { Drawer, Button } from "antd";


export const ProjectModal = (props: { projectModalOpen: boolean, onClose: () => void }) => {

  return <Drawer width={'100%'} onClose={props.onClose} visible={props.projectModalOpen}>
    <h1>Project Modal</h1>
    <Button onClick={props.onClose}>关闭</Button>
  </Drawer>
}