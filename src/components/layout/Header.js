"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsAnchor, setProgramsAnchor] = useState(null);
  const [sponsorAnchor, setSponsorAnchor] = useState(null);
  const [mediaAnchor, setMediaAnchor] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const openMenu = (setter) => (event) => setter(event.currentTarget);
  const closeMenu = (setter) => () => setter(null);

  const menuItems = [
    { text: "Home", path: "/" },
    {
      text: "Programs",
      hasSubmenu: true,
      submenuItems: [
        { text: "Shiksha Daan", path: "/shiksha-daan" },
        { text: "Sanskriti Bodh Pariyojana", path: "/sanskriti-bodh" },
      ],
    },
    { text: "Events", path: "/events" },
    { text: "Blog", path: "/blog" },
    { text: "Alumni", path: "/alumni" },
    {
      text: "Sponsor",
      hasSubmenu: true,
      submenuItems: [
        { text: "Support a Child's Education", path: "/support-child" },
        { text: "Support Vidya Bharati", path: "/support-vb" },
        { text: "Sponsor Construction of a Classroom", path: "/classroom" },
        { text: "Sponsor For Establishing a Library", path: "/library" },
        { text: "Sponsor Construction of a Toilet Block", path: "/toilet-block" },
      ],
    },
    {
      text: "Media",
      hasSubmenu: true,
      submenuItems: [
        { text: "Achievements", path: "/achievements" },
        { text: "Latest News", path: "/latest-news" },
      ],
    },
  ];

  const getAnchor = (text) =>
    text === "Programs" ? programsAnchor : text === "Sponsor" ? sponsorAnchor : mediaAnchor;

  const getOpen = (text) => Boolean(getAnchor(text));
  const getClickHandler = (text) =>
    text === "Programs"
      ? openMenu(setProgramsAnchor)
      : text === "Sponsor"
      ? openMenu(setSponsorAnchor)
      : openMenu(setMediaAnchor);

  const getCloseHandler = (text) =>
    text === "Programs"
      ? closeMenu(setProgramsAnchor)
      : text === "Sponsor"
      ? closeMenu(setSponsorAnchor)
      : closeMenu(setMediaAnchor);

  return (
    <AppBar position="fixed" className="header">
      <Container>
        <Toolbar disableGutters className="toolbar">
          <Box className="logo">
            <Link href="/">
              <img src="/assets/logo.webp" alt="Vidya Bharati USA Logo" />
            </Link>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: "#333" }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box className="navContainer">
              {menuItems.map((item) =>
                item.hasSubmenu ? (
                  <React.Fragment key={item.text}>
                    <Button
                      onClick={getClickHandler(item.text)}
                      endIcon={<KeyboardArrowDownIcon />}
                      className="navButton"
                    >
                      {item.text}
                    </Button>
                    <Menu
                      anchorEl={getAnchor(item.text)}
                      open={getOpen(item.text)}
                      onClose={getCloseHandler(item.text)}
                    >
                      {item.submenuItems.map((subItem) => (
                        <Link
                          key={subItem.text}
                          href={subItem.path}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <MenuItem onClick={getCloseHandler(item.text)}>
                            {subItem.text}
                          </MenuItem>
                        </Link>
                      ))}
                    </Menu>
                  </React.Fragment>
                ) : (
                  <Link key={item.text} href={item.path} style={{ textDecoration: "none" }}>
                    <Button className="navButton">{item.text}</Button>
                  </Link>
                )
              )}
              <Button
                variant="outlined"
                className="loginButton"
                href="https://www.vidyabharatialumni.org/alumni/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alumni Login
              </Button>
              <Link href="/donate" style={{ textDecoration: "none" }}>
                <Button variant="contained" className="donateButton">
                  Donate
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": { width: 240 },
        }}
      >
        <List>
          {menuItems.map((item) =>
            item.hasSubmenu ? (
              <React.Fragment key={item.text}>
                <ListItem>
                  <ListItemText primary={item.text} sx={{ color: "#666", fontWeight: "bold" }} />
                </ListItem>
                {item.submenuItems.map((subItem) => (
                  <Link
                    key={subItem.text}
                    href={subItem.path}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ListItem button onClick={handleDrawerToggle} sx={{ pl: 4 }}>
                      <ListItemText primary={subItem.text} />
                    </ListItem>
                  </Link>
                ))}
              </React.Fragment>
            ) : (
              <Link
                key={item.text}
                href={item.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItem button onClick={handleDrawerToggle}>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            )
          )}

          <ListItem
            button
            component="a"
            href="https://www.vidyabharatialumni.org/alumni/register"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDrawerToggle}
            sx={{ borderBottom: "1px solid #eee" }}
          >
            <ListItemText primary="Alumni Login" />
          </ListItem>

          <Link href="/donate" style={{ textDecoration: "none", color: "inherit" }}>
            <ListItem button onClick={handleDrawerToggle} className="drawerDonate">
              <ListItemText primary="Donate" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
