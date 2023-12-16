import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

function RightBar() {
  return (
    <Box
      sx={{
        // backgroundColor: "orange",
        display: {
          xs: "none",
          sm: "block",
        },
      }}
      flex={2}
      p={2}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6">OnlineFriends</Typography>

        <AvatarGroup total={24}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>

        <Typography variant="h6" marginTop={2} marginBottom={2}>
          New Posts
        </Typography>
        <ImageList
          sx={{ width: 500, height: 200 }}
          cols={3}
          rowHeight={164}
          gap={5}
        >
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" marginTop={2} marginBottom={2}>
          New Posts
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
          
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default RightBar;
