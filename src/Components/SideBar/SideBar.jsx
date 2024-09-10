import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function SideBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <div>
      {/* Hamburger menu button */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={toggleDrawer(true)}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer
        variant="persistent"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <List>
          {["Home", "Profile", "Settings", "Logout"].map((text) => (
            <ListItem button key={text}>
              {" "}
              {/* Fix: Ensure button prop is a boolean */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default SideBar;
