/*
 * @Description  : 
 * @Author       : chenLiang
 * @Date         : 2022-02-23 14:36:10
 * @LastEditors  : chenLiang
 * @LastEditTime : 2022-02-23 15:45:02
 */
import { useCallback, useReducer, useState } from "react";


interface State<D> {
  error: Error | null;
  data: D | null;
  stat: 'idle' | 'loading' | 'error' | 'success';
}

const defaultInitialState: State<null> = {
  stat: 'idle',
  data: null,
  error: null
}

const defaultConfig = {
  throwOnError: false
}

export const useAsync = <D>(
  initialState?: State<D>,
  initialConfig?: typeof defaultConfig
) => {
  const config = { ...defaultConfig, ...initialConfig };
  const [state, setState] = useState<State<D>>({
    ...defaultInitialState,
    ...initialState
  });

  const [retry, setRetry] = useState(() => () => {

  })
}
