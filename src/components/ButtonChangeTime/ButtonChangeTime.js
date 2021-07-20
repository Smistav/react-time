import { BUTTON_CHG_DIRECTION } from '../utils/constants';
function ButonChangeTime({ changeTime }) {
  function handleClick() {
    changeTime();
  }
  return (
    <button className="App-button" onClick={handleClick}>{BUTTON_CHG_DIRECTION}</button>
  )
}
export default ButonChangeTime