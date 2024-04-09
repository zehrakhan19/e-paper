import * as React from "react";
import "./Header.css";
// import Dropdown from "../OnHoverDropDown";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header(props) {
  const tabs = [
    {
      tabName: "News",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "Telangana",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "The Movie",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "Sports",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "Business",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "Photos",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "Videos",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "And Yet",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" component="nav">
        <Toolbar className="tab-container">
          <Box
            component={"div"}
            className="tab-box"
            sx={{ overflowX: { sm: "scroll" }, scrollbarWidth: "none" }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => null}
            >
              <HomeIcon />
            </IconButton>
            {tabs?.map((tab, i) => (
              <div
                key={i}
                style={{ padding: "0 10px", minWidth: "fit-content" }}
              >
                <Typography
                  className="tabs"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  {tab?.tabName}
                </Typography>

                {/* <Dropdown label={tab.tabName} options={tab.options} /> */}
              </div>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
