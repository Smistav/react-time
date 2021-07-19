import { useState, useEffect } from 'react';
function Time({ onTime }) {
  const [time, setTime] = useState({});
  useEffect(() => {
    function getTime() {
      const date = new Date();
      const timeNow = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      };
      setTime(timeNow);
      onTime(timeNow);
    }
    const showTime = setInterval(() => getTime(), 1000);
    return () => { clearInterval(showTime); }
  }, [onTime]);


  return (
    <p>{time.hours}:{time.minutes}:{time.seconds}</p>
  )
}
export default Time
