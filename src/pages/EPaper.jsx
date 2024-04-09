import React, { useState } from "react";
import "./EPaper.css";
import Epaper1 from "../assets/epaper1.png";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Dropdown from "../Components/OnHoverDropDown";
import Typography from "@mui/material/Typography";
import { isMobile } from "react-device-detect";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import TopHeader from "../Components/top-header/TopHeader";
import Footer from "../Components/footer/Footer";

const EPaper = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const tabs = [
    {
      tabName: "MAIN EDITIONS",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "ANDRA PRADESH",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "TELANGANA",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "METRO",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
    {
      tabName: "MAGAZINES",
      options: [{ name: "Political" }, { name: "Crime" }],
    },
  ];
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {tabs.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={item?.path}>
                <ListItemText primary={item.tabName} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const drawerWidth = 240;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const mainEditiionsData = [
    {
      img: Epaper1,
      title: "ANDHRA PRADESH",
    },
    {
      img: Epaper1,
      title: "HYDERABAD",
    },
    {
      img: Epaper1,
      title: "TELANGANA",
    },
    {
      img: Epaper1,
      title: "SAKSHI PLUS",
    },
  ];

  const header = () => (
    <div>
      {isMobile ? (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="static" component="nav">
            <Toolbar className="tab-container">
              <div className="bar">
                <IconButton
                  color="#000"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { xl: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" component="nav">
            <Toolbar className="tab-container">
              <Box component={"div"} className="tab-box-epaper">
                {tabs?.map((tab, i) => (
                  <div
                    key={i}
                    style={{ padding: "0 10px", minWidth: "fit-content" }}
                  >
                    <Dropdown label={tab.tabName} options={tab.options} />
                  </div>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </div>
  );
  const renderEpaperComponent = (title, cardsData) => (
    <div style={{ padding: "10px", width: "100%" }}>
      <div className="news-header">{title}</div>
      <div className="line-orange"></div>
      <div className="epaper-cards-wrapper">
        {cardsData?.map((item, id) => (
          <div key={id}>
            <Link to={"/pdf-full-view"}>
              <div className="epaper-cards">
                <div className="epaper-image-wrapper">
                  <img src={item?.img} alt="Img" style={{ width: "100%" }} />
                </div>
                <div className="epaper-header">{item?.title}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <TopHeader />
      {header()}
      <div>
        {renderEpaperComponent("MAIN EDITIONS", mainEditiionsData)}
        {renderEpaperComponent("ANDRA PRADESH", mainEditiionsData)}
        {renderEpaperComponent("TELANGANA", mainEditiionsData)}
        {renderEpaperComponent("METRO", mainEditiionsData)}
        {renderEpaperComponent("MAGAZINES", mainEditiionsData)}
      </div>
      <Footer />
    </>
  );
};

export default EPaper;
