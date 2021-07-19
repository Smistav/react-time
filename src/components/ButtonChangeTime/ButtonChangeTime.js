function ButonChangeTime({ changeTime }) {
  function handleClick() {
    changeTime();
  }
  return (
    <button className="App-button" onClick={handleClick}>Изменить направление</button>
  )
}
export default ButonChangeTime