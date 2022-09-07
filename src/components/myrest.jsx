import React from "react";
import { useTimer } from "react-timer-hook";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function MyRest({ expiryTimestamp, finishRest }) {
  const { seconds, minutes, start, pause, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => finishRest(),
  });

  return (
    <Box textAlign="center">
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "100px" }}>
          <span>{minutes}</span>:
          <span>{seconds < 10 ? "0" + seconds : seconds}</span>
        </div>
        <Stack direction="row" spacing={2} sx={{ display: "inline" }}>
          <Button onClick={start}>Start</Button>
          <Button onClick={pause}>Pause</Button>
          <Button
            onClick={() => {
              // Restarts to 5 minutes timer
              const time = new Date();
              time.setSeconds(time.getSeconds() + 300);
              restart(time, false);
            }}
          >
            Restart
          </Button>
          <Button onClick={() => finishRest()}>skip</Button>
        </Stack>
      </div>
    </Box>
  );
}
