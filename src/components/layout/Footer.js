"use client"
import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
  styled,
  Divider,
  useTheme
} from '@mui/material';
import Link from 'next/link'; // Changed from react-router-dom to next/link
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#841B2D',
  color: '#fff',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(4)
}));

// Updated FooterLink to work with Next.js Link
const StyledFooterLink = styled('a')({
  color: '#fff',
  textDecoration: 'none',
  fontSize: '0.9rem',
  display: 'block',
  marginBottom: '8px',
  opacity: 0.8,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    color: '#FF5733',
    opacity: 1,
    paddingLeft: '5px'
  }
});

const SectionTitle = styled(Typography)({
  fontSize: '1.2rem',
  fontWeight: 600,
  marginBottom: '20px',
  position: 'relative',
  paddingBottom: '10px',
  '&:after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: '2px',
    width: '40px',
    backgroundColor: '#FF5733'
  }
});

const SocialButton = styled(IconButton)({
  color: '#fff',
  marginRight: '10px',
  border: '1px solid rgba(255,255,255,0.2)',
  padding: '8px',
  '&:hover': {
    backgroundColor: '#FF5733',
    borderColor: '#FF5733'
  }
});

const ContactItem = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '15px',
  '& svg': {
    marginRight: '10px',
    marginTop: '4px',
    color: '#FF5733'
  }
});

// Custom FooterLink component that wraps Next.js Link
const FooterLink = ({ href, children }) => (
  <Link href={href} passHref legacyBehavior>
    <StyledFooterLink>{children}</StyledFooterLink>
  </Link>
);

const Footer = () => {
  const theme = useTheme();

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        {/* Header section with logo and description side by side */}
        <Grid container spacing={3} sx={{ mb: 5 }}>
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, md: 0 } }}>
              <img 
                src="/assets/logo.webp" 
                alt="Vidya Bharati USA Logo" 
                style={{ height: 60 }} 
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography 
              variant="body1" 
              sx={{ 
                opacity: 0.9, 
                lineHeight: 1.8,
                display: 'flex',
                alignItems: 'center',
                height: '100%'
              }}
            >
              Vidya Bharati USA is dedicated to transforming education in India through 
              innovative programs, focusing on rural development and providing quality 
              education to create future leaders.
            </Typography>
          </Grid>
        </Grid>

        {/* Social media buttons */}
        <Box sx={{ mb: 4, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
          <SocialButton component="a" href="https://facebook.com" target="_blank">
            <FacebookIcon />
          </SocialButton>
          <SocialButton component="a" href="https://twitter.com" target="_blank">
            <TwitterIcon />
          </SocialButton>
          <SocialButton component="a" href="https://linkedin.com" target="_blank">
            <LinkedInIcon />
          </SocialButton>
          <SocialButton component="a" href="https://instagram.com" target="_blank">
            <InstagramIcon />
          </SocialButton>
        </Box>

        <Divider sx={{ mb: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Footer navigation links section */}
        <Grid container spacing={4}>
          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <SectionTitle>Quick Links</SectionTitle>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/programs">Programs</FooterLink>
            <FooterLink href="/events">Events</FooterLink>
            <FooterLink href="/alumni">Alumni</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
           {/* <FooterLink href="/contact">Contact</FooterLink>*/}
          </Grid>

          {/* Programs */}
          <Grid item xs={12} sm={6} md={3}>
            <SectionTitle>Our Programs</SectionTitle>
            <FooterLink href="/shiksha-daan">Shiksha Daan</FooterLink>
            <FooterLink href="/sanskriti-bodh">Sanskriti Bodh Pariyojana</FooterLink>
           {/*<FooterLink href="//adopt-school">Adopt A School</FooterLink>*/}
          </Grid>

          {/* Sponsor Section */}
          <Grid item xs={12} sm={6} md={3}>
            <SectionTitle>Sponsor</SectionTitle>
            <FooterLink href="/support-child">Support a Child</FooterLink>
            <FooterLink href="/support-vb">Support Vidya Bharati</FooterLink>
            <FooterLink href="/classroom">Sponsor a Classroom</FooterLink>
            <FooterLink href="/library">Sponsor a Library</FooterLink>
            <FooterLink href="/toilet-block">Sponsor Toilet Block</FooterLink>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <SectionTitle>Media</SectionTitle>
            <FooterLink href="/achievements">Achievements</FooterLink>
            <FooterLink href="/latest-news">Latest News</FooterLink>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <SectionTitle>Contact Us</SectionTitle>
            <ContactItem>
              <LocationOnIcon />
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                123 Education Street, Suite 100<br />
                San Jose, CA 95134
              </Typography>
            </ContactItem>
            <ContactItem>
              <PhoneIcon />
              <MuiLink 
                href="tel:+1234567890" 
                color="inherit" 
                underline="hover"
                sx={{ opacity: 0.8 }}
              >
                (123) 456-7890
              </MuiLink>
            </ContactItem>
            <ContactItem>
              <EmailIcon />
              <MuiLink 
                href="mailto:info@vidyabharatiusa.org" 
                color="inherit" 
                underline="hover"
                sx={{ opacity: 0.8 }}
              >
                info@vidyabharatiusa.org
              </MuiLink>
            </ContactItem>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Typography 
          variant="body2" 
          align="center" 
          sx={{ 
            opacity: 0.7,
            fontSize: '0.875rem'
          }}
        >
          © {new Date().getFullYear()} Vidya Bharati USA. All rights reserved.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;