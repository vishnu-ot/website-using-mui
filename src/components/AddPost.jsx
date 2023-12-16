import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
function AddPost() {
  const [openModal, setOpenModal] = useState(false);
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "20px",
  });
  return (
    <>
      <Tooltip
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(43%)", md: 30 },
        }}
      >
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setOpenModal(true)}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          sx={{
            width: 400,
            height: 380,
            borderRadius: 8,

            padding: 3,
          }}
        >
          <Typography variant="h6" color="grey" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              onClick={() => setOpen(true)}
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="span">Vishnu</Typography>
          </UserBox>
          <TextField
            id="filled-multiline-static"
            multiline
            rows={3}
            fullWidth
            placeholder="What's on your mind.."
            variant="filled"
          />
          <Stack direction="row" marginTop={2} marginBottom={3} gap={1}>
            <EmojiEmotions color="success" />
            <Image color="primary" />
            <VideoCameraBack color="secondary" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            variant="outlined"
            aria-label="loading button group"
            fullWidth
          >
            <Button variant="contained" sx={{ width: 600 }}>
              Submit
            </Button>
            <Button variant="contained">
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
}

export default AddPost;
