import React, { useState, useEffect } from "react";
import CounterBox from "./components/CounterBox";
import { Container, Counters } from "./Styles";

function App() {
  //  states
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(23);
  const [days, setDays] = useState(2);
  const counters = ["Days", "Hours", "Minutes", "Seconds"];

  //  to update state every second
  useEffect(() => {
    setTimeout(updateTime, 1000);
  }, [seconds]);

  //  to handle the time changes
  const updateTime = () => {
    if (seconds > 0) {
      setSeconds((prev) => prev - 1);
    } else {
      setSeconds(59);
      if (minutes > 0) {
        setMinutes((prev) => prev - 1);
      } else {
        setMinutes(59);
        if (hours > 0) {
          setHours((prev) => prev - 1);
        } else {
          setHours(23);
          setDays((prev) => prev - 1);
        }
      }
    }
  };

  return (
    <Container>
      <Counters>
        {counters.map((counter, i) => (
          <CounterBox
            key={i}
            text={counter}
            number={
              i === 0 ? days : i === 1 ? hours : i === 2 ? minutes : seconds
            }
          />
        ))}
      </Counters>
    </Container>
  );
}

export default App;
