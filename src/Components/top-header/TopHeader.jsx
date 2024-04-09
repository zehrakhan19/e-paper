import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./TopHeader.css";
import { Link } from "react-router-dom";

export default function TopHeader(props) {
  return (
    <div>
      <Box sx={{ flexGrow: 1, position: "sticky", top: 0 }}>
        <AppBar position="static" className="appBar">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#000" }}
            >
              <Link to={"/"}>LOGO</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
