import { BUTTON_LOG } from '../utils/constants';

function ButtonLog({ time }) {
  function handleClick() {
    console.log(`${time.hours}:${time.minutes}:${time.seconds}`);
  }
  return (
    <button className="App-button" onClick={handleClick}>{BUTTON_LOG}</button>
  )
}
export default ButtonLog