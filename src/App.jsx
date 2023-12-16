import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Box,
  Button,
  Stack,
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import NavBar from "./components/NavBar";
import AddPost from "./components/AddPost";

function App() {
  const [mode, setMode] = useState("light");
  const MyTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={MyTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <SideBar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
