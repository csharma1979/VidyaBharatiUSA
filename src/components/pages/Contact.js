import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Paper,
  Box 
} from '@mui/material';
import PageBanner from '../components/PageBanner';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <>
      <PageBanner 
        title="Contact Us" 
        subtitle="Get in touch with us for any queries or support"
        titleStyle={{ color: 'white' }} 
        subtitleStyle={{ color: 'white' }}

      />
      
      <Container sx={{ py: 8 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4, color: '#841B2D' }}>
                Contact Information
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                <LocationOnIcon sx={{ color: '#841B2D', mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Vidya Bharati Foundation of America
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    North Carolina, 28027
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                <PhoneIcon sx={{ color: '#841B2D', mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Dr. Ajay Gupta (Registered Agent)
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    +1-248 464 1664
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <EmailIcon sx={{ color: '#841B2D', mr: 2, mt: 0.5 }} />
                <Typography variant="body1" sx={{ color: '#666' }}>
                  info@vidyabharatiusa.org
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;