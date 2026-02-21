import React, {useState} from 'react';
import s from './Counter.module.scss'

const Counter = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div className={s.counter} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <button style={{ width: 50, height: 50 }} onClick={() => setCount(prev => prev - 1)}>dec</button>
      <span style={{ fontSize: 32 }} >{count}</span>
      <button style={{ width: 50, height: 50 }} onClick={() => setCount(prev => prev + 1)}>inc</button>
    </div>
  );
};

export default Counter;
