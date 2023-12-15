import { Box } from "@mui/material";
import React from "react";

function RightBar() {
  return (
    <Box
      sx={{
        backgroundColor: "orange",
        display: {
          xs: "none",
          sm: "block",
        },
      }}
      flex={2}
      p={2}
    >
      RightBar
    </Box>
  );
}

export default RightBar;
