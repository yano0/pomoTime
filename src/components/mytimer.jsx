import React from "react";
import { useTimer } from "react-timer-hook";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function MyTimer({ expiryTimestamp, countUp }) {
  const { seconds, minutes, start, pause, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => countUp(),
  });

  return (
    <Box textAlign="center">
      <div style={{ fontSize: "100px" }}>
        <span>{minutes}</span>:
        <span>{seconds < 10 ? "0" + seconds : seconds}</span>
      </div>
      <Stack direction="row" spacing={2} sx={{ display: "inline" }}>
        <Button variant="contained" onClick={start}>
          Start
        </Button>
        <Button variant="contained" onClick={pause}>
          Pause
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 1500);
            restart(time, false);
          }}
        >
          Restart
        </Button>
      </Stack>
    </Box>
  );
}
