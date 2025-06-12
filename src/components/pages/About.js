import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper 
} from '@mui/material';

const About = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        About Vidya Bharati USA
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Our Story
            </Typography>
            <Typography paragraph>
              Vidya Bharati USA is dedicated to promoting educational excellence and cultural awareness
              in the United States. Our organization works to preserve and promote Indian values while
              fostering global citizenship.
            </Typography>
            <Typography paragraph>
              We believe in the power of education to transform lives and build stronger communities.
              Through our various programs and initiatives, we strive to create meaningful impact
              in the lives of students and families.
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Core Values
            </Typography>
            <Typography component="ul">
              <li>Educational Excellence</li>
              <li>Cultural Heritage</li>
              <li>Community Service</li>
              <li>Global Citizenship</li>
              <li>Character Development</li>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;