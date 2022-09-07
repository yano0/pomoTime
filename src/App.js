import "./App.css";
import Timer from "./routes/timer.jsx";
import AppBar from "@mui/material/AppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Typography component="h1" variant="h44" margin={2}>
          PomoTimer{" "}
        </Typography>
      </AppBar>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Timer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
