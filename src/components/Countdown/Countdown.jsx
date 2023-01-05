import { useState, useEffect } from "react";

import "./Countdown.scss";

const Countdown = () => {
  const [countDownDate, setCountDownDate] = useState();

  useEffect(() => {
    const tempDate = new Date("2023/03/29"); // add skule 150 time
    const tempCountDownDate = new Date(tempDate).getTime();

    setCountDownDate(tempCountDownDate);
    console.log(tempDate);
  }, []);

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const getDateValues = (countDown) => {
    if (countDown <= 0) {
      return [0, 0, 0, 0];
    }
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  };

  const checkNaN = (value) => {
    if (isNaN(value)) {
      return 0;
    } else {
      return value;
    }
  };

  const padWith0 = (number) => {
    const numString = number.toString();
    if (numString.length >= 2) {
      return numString;
    } else {
      return "0".repeat(2 - numString.length) + number;
    }
  };

  return (
    <div className="countdown-wrap">
      <div className="countdown">
        <div className="countdown-number day">
          <h1>{padWith0(checkNaN(getDateValues(countDown)[0]))}</h1>
          <h3>DAYS</h3>
        </div>
        <div className="countdown-number hour">
          <h1>{padWith0(checkNaN(getDateValues(countDown)[1]))}</h1>
          <h3>HOURS</h3>
        </div>
        <div className="countdown-number minute" >
          <h1>{padWith0(checkNaN(getDateValues(countDown)[2]))}</h1>
          <h3>MINUTES</h3>
        </div>
        <div className="countdown-number second">
          <h1>{padWith0(checkNaN(getDateValues(countDown)[3]))}</h1>
          <h3>SECONDS</h3>
        </div>
      </div>
    </div>
  );
};

export { Countdown };
