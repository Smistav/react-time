import { useState, useEffect } from 'react';

function Time({ onTime, direction, noRealTime }) {
  const [time, setTime] = useState({});

  useEffect(() => {
    const showTime = setInterval(() => getTime(), 1000);
    return () => { clearInterval(showTime); }
  });
  function controlDirectionTime(id) {
    if (id === 0) {
      if (direction) { return -1 }
      if (!direction) { return 1 }
    } else { return 0 }
  }
  function getTime() {
    const directionSecond = direction ? -1 : +1;
    let directionMinutes = 0;
    let directionHours = 0;
    const data = new Date();
    const seconds = data.getSeconds(noRealTime ? data.setSeconds(time.seconds + directionSecond) : '');
    directionMinutes = controlDirectionTime(seconds);
    const minutes = data.getMinutes(noRealTime ? data.setMinutes(time.minutes + directionMinutes) : '');
    // const minutes = noRealTime ? time.minutes + directionMinutes : data.getMinutes();
    directionHours = controlDirectionTime(minutes);
    const hours = data.getHours(noRealTime ? data.setHours(time.hours + directionHours) : '');
    const timeNow = {
      seconds: seconds,
      minutes: minutes,
      hours: hours,
    };
    setTime(timeNow);
    onTime(timeNow);
  }

  return (
    <h2>{time.hours}:{time.minutes}:{time.seconds}</h2>
  )
}
export default Time
