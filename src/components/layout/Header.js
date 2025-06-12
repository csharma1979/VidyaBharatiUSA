"use client"
import React, { useState } from 'react';
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
  styled,
  Menu, 
  MenuItem 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';

const StyledHeader = styled(AppBar)({
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
});

const LogoContainer = styled(Box)({
  '& img': {
    height: '100px',
    width: 'auto',
    padding: '8px 0'
  }
});

const NavButton = styled(Button)({
  color: '#333',
  margin: '0 8px',
  '&:hover': {
    color: '#FF5733',
    backgroundColor: 'transparent'
  }
});

const DonateButton = styled(Button)({
  backgroundColor: '#dc004e',
  color: '#fff',
  margin: '0 8px',
  padding: '8px 24px',
  '&:hover': {
    backgroundColor: '#9a0036'
  }
});

const LoginButton = styled(Button)({
  color: '#333',
  margin: '0 8px',
  border: '1px solid #333',
  '&:hover': {
    color: '#FF5733',
    borderColor: '#FF5733',
    backgroundColor: 'transparent'
  }
});

const NavButtonWithDropdown = styled(Button)({
  color: '#333',
  margin: '0 8px',
  '&:hover': {
    color: '#FF5733',
    backgroundColor: 'transparent'
  }
});

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsAnchor, setProgramsAnchor] = useState(null);
  const [sponsorAnchor, setSponsorAnchor] = useState(null);
  const [mediaAnchor, setMediaAnchor] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProgramsClick = (event) => {
    setProgramsAnchor(event.currentTarget);
  };

  const handleProgramsClose = () => {
    setProgramsAnchor(null);
  };

  const handleSponsorClick = (event) => {
    setSponsorAnchor(event.currentTarget);
  };

  const handleSponsorClose = () => {
    setSponsorAnchor(null);
  };

  const handleMediaClick = (event) => {
    setMediaAnchor(event.currentTarget);
  };

  const handleMediaClose = () => {
    setMediaAnchor(null);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    {
      text: 'Programs',
      path: '/programs',
      hasSubmenu: true,
      submenuItems: [
        { text: 'Shiksha Daan', path: '/shiksha-daan' },
        { text: 'Sanskriti Bodh Pariyojana', path: '/sanskriti-bodh' },
       // { text: 'Adopt A School', path: '/adopt-school' }
      ]
    },
    { text: 'Events', path: '/events' },
    { text: 'Blog', path: '/blog' },
    { text: 'Alumni', path: '/alumni' },
    {
      text: 'Sponsor',
      path: '/sponsor',
      hasSubmenu: true,
      submenuItems: [
        { text: "Support a Child's Education", path: '/support-child' },
        { text: 'Support Vidya Bharati', path: '/support-vb' },
        { text: 'Sponsor Construction of a Classroom', path: '/classroom' },
        { text: 'Sponsor For Establishing a Library', path: '/library' },
        { text: 'Sponsor Construction of a Toilet Block', path: '/toilet-block' }
      ]
    },
    {
      text: 'Media',
      path: '/media',
      hasSubmenu: true,
      submenuItems: [
        { text: "Achievements", path: '/achievements' },
        { text: "Latest News", path: '/latest-news' }
      ]
    }
  ];

  return (
    <StyledHeader position="fixed">
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <LogoContainer>
            <Link href="/">
              <img src="/assets/logo.webp" alt="Vidya Bharati USA Logo" />
            </Link>
          </LogoContainer>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#333' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {menuItems.map((item) => (
                item.hasSubmenu ? (
                  <React.Fragment key={item.text}>
                    <NavButtonWithDropdown
                      onClick={
                        item.text === 'Programs' 
                          ? handleProgramsClick 
                          : item.text === 'Sponsor' 
                            ? handleSponsorClick 
                            : handleMediaClick
                      }
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      {item.text}
                    </NavButtonWithDropdown>
                    <Menu
                      anchorEl={
                        item.text === 'Programs' 
                          ? programsAnchor 
                          : item.text === 'Sponsor' 
                            ? sponsorAnchor 
                            : mediaAnchor
                      }
                      open={Boolean(
                        item.text === 'Programs' 
                          ? programsAnchor 
                          : item.text === 'Sponsor' 
                            ? sponsorAnchor 
                            : mediaAnchor
                      )}
                      onClose={
                        item.text === 'Programs' 
                          ? handleProgramsClose 
                          : item.text === 'Sponsor' 
                            ? handleSponsorClose 
                            : handleMediaClose
                      }
                    >
                      {item.submenuItems.map((subItem) => (
                        <Link 
                          key={subItem.text} 
                          href={subItem.path}
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          <MenuItem
                            onClick={
                              item.text === 'Programs' 
                                ? handleProgramsClose 
                                : item.text === 'Sponsor' 
                                  ? handleSponsorClose 
                                  : handleMediaClose
                            }
                            sx={{
                              minWidth: '300px',
                              '&:hover': {
                                color: '#FF5733'
                              }
                            }}
                          >
                            {subItem.text}
                          </MenuItem>
                        </Link>
                      ))}
                    </Menu>
                  </React.Fragment>
                ) : (
                  <Link key={item.text} href={item.path} style={{ textDecoration: 'none' }}>
                    <NavButton>
                      {item.text}
                    </NavButton>
                  </Link>
                )
              ))}
              <LoginButton
                variant="outlined"
                href="https://www.vidyabharatialumni.org/alumni/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alumni Login
              </LoginButton>
              <Link href="/donate" style={{ textDecoration: 'none' }}>
                <DonateButton variant="contained">
                  Donate
                </DonateButton>
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
          '& .MuiDrawer-paper': { width: 240 }
        }}
      >
        <List>
          {menuItems.map((item) => (
            item.hasSubmenu ? (
              <React.Fragment key={item.text}>
                <ListItem>
                  <ListItemText 
                    primary={item.text} 
                    sx={{ 
                      color: '#666',
                      fontWeight: 'bold' 
                    }} 
                  />
                </ListItem>
                {item.submenuItems.map((subItem) => (
                  <Link 
                    key={subItem.text} 
                    href={subItem.path}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <ListItem
                      button
                      onClick={handleDrawerToggle}
                      sx={{ pl: 4 }}
                    >
                      <ListItemText primary={subItem.text} />
                    </ListItem>
                  </Link>
                ))}
              </React.Fragment>
            ) : (
              <Link 
                key={item.text} 
                href={item.path}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <ListItem
                  button
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            )
          ))}
          <ListItem 
            button 
            component="a"
            href="https://www.vidyabharatialumni.org/alumni/register"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDrawerToggle}
            sx={{ 
              borderBottom: '1px solid #eee'
            }}
          >
            <ListItemText primary="Alumni Login" />
          </ListItem>
          <Link href="/donate" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem 
              button 
              onClick={handleDrawerToggle}
              sx={{ 
                backgroundColor: '#dc004e',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#9a0036'
                }
              }}
            >
              <ListItemText primary="Donate" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </StyledHeader>
  );
};

export default Header;