import React from 'react';
import { Box, Container, Grid, Typography, styled } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';

const ImpactContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#841b2c14',
  padding: theme.spacing(8, 0),
  textAlign: 'center'
}));

const ImpactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2)
}));

const ImpactIcon = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  color: '#841B2D',
  marginBottom: theme.spacing(2)
}));

const ImpactNumber = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#841B2D',
  marginBottom: theme.spacing(1)
}));

const ImpactLabel = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#666',
  fontWeight: 500
}));

const SocialImpact = () => {
  const impacts = [
    {
      icon: <SchoolIcon sx={{ fontSize: 48 }} />,
      number: '421+',
      label: 'Schools Supported'
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 48 }} />,
      number: '2.0M',
      label: 'Students Benefited'
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 48 }} />,
      number: '212',
      label: 'Alumni Members'
    }
  ];

  return (
    <ImpactContainer>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2" 
          align="center" 
          sx={{ 
            mb: 6, 
            fontWeight: 600, 
            color: '#333',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Our Social Impact
        </Typography>
        
        <Grid container spacing={4}>
          {impacts.map((impact, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ImpactItem>
                <ImpactIcon>
                  {impact.icon}
                </ImpactIcon>
                <ImpactNumber variant="h3">
                  {impact.number}
                </ImpactNumber>
                <ImpactLabel variant="h6">
                  {impact.label}
                </ImpactLabel>
              </ImpactItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ImpactContainer>
  );
};

export default SocialImpact;