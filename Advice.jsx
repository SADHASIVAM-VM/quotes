import React, { useEffect, useState } from 'react';
import '../Css/AdviceApx.css';

const AdviceApx = () => {
  const [advice, setAdvice] = useState('Click the button to get a quote');
  const [count, setCount] = useState(1);

  async function handleClick() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const newAdvice = await response.json()
      .then((res) => res.slip.advice)
      .catch((e) => console.log(e));
    setAdvice(newAdvice);
    setCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return (
    <>
    <h1 className="text">Quote Pulse 👋</h1>

    <div className="advice-container">
      <h1 className="advice-quote">
        <q>{advice}</q>
      </h1>
     <div className="btn">
     <button className="advice-button" onClick={handleClick}>
        New Advice
      </button>
      <p className="advice-counter">
        You have read <span className="counter">{count}</span> quotes
      </p>
     </div>
    </div>
    </>
  );
};

export default AdviceApx;
