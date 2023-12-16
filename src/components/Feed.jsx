import {
  CheckBox,
  ExpandMore,
  ExpandMoreSharp,
  FavoriteBorderOutlined,
  MoreVert,
  ShareOutlined,
} from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import Post from "./Post";

function Feed() {
  return (
    <Box p={2} flex={4}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  );
}

export default Feed;
