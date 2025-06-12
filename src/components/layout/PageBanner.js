import React from 'react';
import { Box, Container, Typography, styled } from '@mui/material';

const BannerContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#841B2D',
  color: '#fff',
  padding: theme.spacing(6, 0),
  marginTop: '120px',
  textAlign: 'center' // Add center alignment
}));

const PageBanner = ({ title, subtitle, titleStyle, subtitleStyle }) => {
  return (
    <BannerContainer>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            fontWeight: 600,
            fontSize: { xs: '2rem', md: '2.5rem' },
            mb: 2,
            textAlign: 'center',
            ...titleStyle // Apply the passed style
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography 
            variant="h6" 
            sx={{ 
              opacity: 0.9,
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
              ...subtitleStyle // Apply the passed style
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Container>
    </BannerContainer>
  );
};

export default PageBanner;