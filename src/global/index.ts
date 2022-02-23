/*
 * @Description  : 
 * @Author       : chenLiang
 * @Date         : 2022-02-23 15:23:20
 * @LastEditors  : chenLiang
 * @LastEditTime : 2022-02-23 16:31:51
 */

import { useEffect, useRef } from "react";

/**
 * 返回组件的挂载状态，如果还没挂载或者已经卸载，返回false；反之，返回true
 */
export const useMountedRef = () => {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    }
  })
  return mountedRef;
}

