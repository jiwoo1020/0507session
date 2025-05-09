import React, { useState, useEffect } from "react";
import "./App.css";
import TimerDisplay from "./TimerDisplay";
import TimerButtons from "./TimerButtons";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // 타이머 상태 저장

  // 자동 증가 타이머
  useEffect(() => {
    let interval = null;

    if (isRunning) { //타이머를 시작했을때
      interval = setInterval(() => {
        setSeconds(prev => {
          if(prev == 20) {
            clearInterval(interval);
            setIsRunning(false);
            alert('20초가 지났습니다!');
            return prev;
          }
          return prev + 1; //아직 20초가 안됐을때는 1초 증가
        }); // 1초마다 시간 증가
      }, 1000);
    } else { //멈춤을 눌렀을때
      clearInterval(interval); // 멈췄을 때 타이머 제거
    }

    // cleanup: 컴포넌트가 unmount되거나 다시 실행될 때 정리
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    console.log("리셋되었습니다.");
  }


  return (
    <div className="container">
      <TimerDisplay seconds={seconds} />
      <TimerButtons onStart={handleStart} onStop={handleStop} onReset={handleReset} />
    </div>
  );
}

export default App;
