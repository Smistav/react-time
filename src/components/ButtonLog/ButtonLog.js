function ButtonLog({ time }) {
  function handleClick() {
    console.log(`${time.hours}:${time.minutes}:${time.seconds}`);
  }
  return (
    <button onClick={handleClick}>Вывести в Log</button>
  )
}
export default ButtonLog