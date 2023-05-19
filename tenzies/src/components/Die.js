export default function Die(props) {
  const styles = {
      backgroundColor: props.isHeld ? "#59E391" : "pink"
  }

  return (
    <div onClick={props.holdDice} style={styles} className='die-component' >
        <h3>{props.value}</h3>
    </div>
  )
}

