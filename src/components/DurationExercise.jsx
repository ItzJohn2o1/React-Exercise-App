import { useState, useEffect, useRef } from 'react'

function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds(s => s + 1)
      }, 1000)
    } else {
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [running])

  const mins = String(Math.floor(seconds / 60)).padStart(2, '0')
  const secs = String(seconds % 60).padStart(2, '0')

  return (
    <div>
      <h2>{name}</h2>
      <p>{mins}:{secs}</p>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => { setRunning(false); setSeconds(0) }}>Reset</button>
    </div>
  )
}

export default DurationExercise
