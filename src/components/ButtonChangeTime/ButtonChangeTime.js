function ButonChangeTime({ changeTime }) {
  function handleClick() {
    changeTime();
  }
  return (
    <button onClick={handleClick}>Изменить направление</button>
  )
}
export default ButonChangeTime