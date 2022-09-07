import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import MyTimer from "../components/mytimer";
import MyRest from "../components/myrest";

export default function App() {
  const time = new Date();
  const [pomoFlag, setPomo] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <div>
      <CssBaseline />
      {(() => {
        if (pomoFlag) {
          console.log(time);
          time.setSeconds(time.getSeconds() + 1500);
          return (
            <MyTimer
              expiryTimestamp={time}
              countUp={() => {
                setPomo(false);
                setCount(count + 1);
              }}
            />
          );
        } else {
          console.log(time);
          time.setSeconds(time.getSeconds() + 300);
          return (
            <MyRest
              expiryTimestamp={time}
              finishRest={() => {
                setPomo(true);
              }}
            />
          );
        }
      })()}
      <Typography component="h1" variant="h5" mt={5}>
        {count} pomo finished!
      </Typography>
    </div>
  );
}
