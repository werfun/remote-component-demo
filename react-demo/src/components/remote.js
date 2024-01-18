import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const RemoteBaseComponent = (props) => {

  const { url } = props;

  const [Comp, setComponent] = useState();

  const importComponent = useCallback(() => {
    return axios.get(url).then(res => res.data);
  }, [url])

  const loadComp = useCallback(async () => {
    // new Function(`${await importComponent()}`)();
    window.eval(`${await importComponent()}`)
    const { default: component } = window.MyComponent;
    setComponent(() => component); // 这里需要注意，不能用setComponent(component)，因为compoennt是一个函数，而setComponent接受两种形式的参数，一种是字面量，一种是函数，函数会被执行
  }, [importComponent, setComponent])

  useEffect(() => {
    loadComp();
  }, [loadComp]);

  if (Comp) {
    return <Comp {...props}/>
  }

  return null;
}

export default RemoteBaseComponent
