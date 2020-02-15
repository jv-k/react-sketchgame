import { useState, useEffect } from 'react';

export const useTimer = (timeToCountDown, callBack) => {
  const [timeLeft, setTimeLeft] = useState(timeToCountDown);
  const [isActive, setIsActive] = useState(false);

  function start() {
    setIsActive(true);
  }

  function stop() {
    setIsActive(false);
  }

  function reset() {
    stop();
    setTimeLeft(timeToCountDown);
  }

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      if (timeLeft === 0) {
        stop();
        clearInterval(interval);
        callBack.call();
        return;
      }
  
      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(interval);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, timeLeft]);

  return { 
    timeLeft: timeLeft, 
    startTimer: () => start(),
    stopTimer: () => stop(),
    resetTimer: ()=> reset()
  }
};