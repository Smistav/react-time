import { useState, useEffect } from 'react';
function NoTime({ onTime, direction, time }) {
  const [noTime, setNoTime] = useState(time);
  useEffect(() => {
    function getNoTime() {
      const incdec = direction ? -1 : +1;
      const timeNow = {
        hours: noTime.hours,
        minutes: noTime.minutes,
        seconds: noTime.seconds + incdec
      }
      setNoTime(timeNow);
      onTime(timeNow);
    }
    const showTime = setInterval(() => getNoTime(), 1000);
    return () => { clearInterval(showTime); }
  }, [direction, noTime, onTime]);



  return (
    <p>{time.hours}:{time.minutes}:{time.seconds}</p>
  )
}
export default NoTime