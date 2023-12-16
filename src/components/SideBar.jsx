import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  AccountBox,
  Article,
  DarkMode,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";

function SideBar({ mode, setMode }) {
  return (
    <Box
      // bgcolor="red"
      flex={1}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "block",
        },
      }}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Markert Place" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
              <Switch
                // checked={checked}
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
                // inputProps={{ "aria-label": "controlled" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default SideBar;
