import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  styled,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PageBanner from '../layout/PageBanner';

const SectionHeading = styled(Typography)(({ theme }) => ({
  color: '#841B2D',
  marginBottom: theme.spacing(4),
  fontWeight: 600,
  textAlign: 'center'
}));

const StatBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  backgroundColor: '#f8f9fa',
  borderRadius: theme.shape.borderRadius,
  height: '100%',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  '& .MuiTypography-h3': {
    color: '#841B2D',
    marginBottom: theme.spacing(1),
    fontWeight: 700
  }
}));

const AlumniItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(4)
}));

const SectionContainer = styled(Box)(({ bgColor }) => ({
  backgroundColor: bgColor || 'transparent',
  padding: '60px 0',
  width: '100%'
}));

const StatValue = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: '#841B2D',
  marginRight: theme.spacing(1)
}));

const ProfessionListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
  '&:hover': {
    backgroundColor: 'rgba(132, 27, 45, 0.05)',
  }
}));

const Alumni = () => {
  // Recent alumni list from the provided content
  const recentAlumni = [
    { name: "Minupala Venkateshwara", role: "Alumni Members" },
    { name: "prem vaishnav", role: "Alumni Members" },
    { name: "Falak Verma", role: "Alumni Members" },
    { name: "Abhishek Srivastava", role: "Alumni Members" }
  ];

  return (
    <>
      <PageBanner 
        title="Alumni Community" 
        subtitle="Join our growing network of Vidya Bharati alumni making a difference worldwide"
        titleStyle={{ color: 'white' }} 
        subtitleStyle={{ color: 'white' }}
      />
      
      {/* Alumni Family Overview - White Background */}
      <SectionContainer>
        <Container maxWidth="lg">
          <SectionHeading variant="h4">
            Alumni Family
          </SectionHeading>

          <Grid container spacing={6} sx={{ mb: 8, mx: 'auto', justifyContent: 'center', maxWidth: '90%' }}>
            <Grid item xs={12} md={4}>
              <StatBox>
                <Typography variant="h3">6,670+</Typography>
                <Typography variant="h6">Registered Schools</Typography>
              </StatBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <StatBox>
                <Typography variant="h3">75,000+</Typography>
                <Typography variant="h6">Registered Alumni</Typography>
              </StatBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <StatBox>
                <Typography variant="h3">80,000+</Typography>
                <Typography variant="h6">Student Members</Typography>
              </StatBox>
            </Grid>
          </Grid>

          <Box sx={{ maxWidth: '85%', mx: 'auto' }}>
            <Typography variant="body1" paragraph>
              The Vidya Bharati Alumni portal, known as the Vidya Bharti Purv Chatra Network, was launched approximately 18 months ago. This online platform serves as a connection point for all Vidya Bharati alumni to engage with their schools, batch mates, teachers, and current students. Upon successful registration, alumni can log in with their username and password to access the latest news, activities, and events related to Vidya Bharati schools across India.
            </Typography>
            
            <Typography variant="body1" paragraph>
              Members of the portal can read or download various newsletters and publications published regularly. Alumni are encouraged to share photos and updates, and even initiate discussions on the platform. This facilitates meaningful interactions between alumni and students for mentorship and career guidance, allowing alumni to support various schools and initiatives of Vidya Bharati both financially and non-financially.
            </Typography>
            
            <Typography variant="body1" paragraph>
              As of April 2019, over <b>6,670 schools</b> have registered on the portal, with more than <b>75,000 alumni</b> joining the network. Additionally, over <b>80,000 students</b> are part of the portal. Internal research indicates that <b>28,181 registered alumni</b> fall into the student community category, which includes those pursuing graduation, post-graduation, higher studies, or yet to begin their careers.
            </Typography>
            
            <Typography variant="body1" paragraph>
              Furthermore, there are approximately <b>6,949 alumni</b> categorized as part of the working community. Ongoing research aims to provide more precise figures in the coming months. The working alumni represent a diverse range of professions, including:
            </Typography>
          </Box>
        </Container>
      </SectionContainer>
      
      {/* Professional breakdown - Light Background */}
     {/* Professional breakdown - Light Background */}
<SectionContainer bgColor="#f0e9ea">
  <Container maxWidth="lg">
    <SectionHeading variant="h5">
      Professional Distribution
    </SectionHeading>
    
    <Box sx={{ width: '100%', maxWidth: '90%', mx: 'auto' }}>
      <Grid container spacing={3} sx={{ my: 3 }} justifyContent="center">
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <List sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ProfessionListItem>
              <ListItemText 
                primary={
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <StatValue variant="h6">1,581</StatValue>
                    <Typography variant="body1">teachers</Typography>
                  </Box>
                }
              />
            </ProfessionListItem>
            <ProfessionListItem>
              <ListItemText 
                primary={
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <StatValue variant="h6">1,164</StatValue>
                    <Typography variant="body1">doctors</Typography>
                  </Box>
                }
              />
            </ProfessionListItem>
            <ProfessionListItem>
              <ListItemText 
                primary={
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <StatValue variant="h6">101</StatValue>
                    <Typography variant="body1">businesspersons</Typography>
                  </Box>
                }
              />
            </ProfessionListItem>
            <ProfessionListItem>
              <ListItemText 
                primary={
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <StatValue variant="h6">679</StatValue>
                    <Typography variant="body1">engineers</Typography>
                  </Box>
                }
              />
            </ProfessionListItem>
            <ProfessionListItem>
              <ListItemText 
                primary={
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <StatValue variant="h6">227</StatValue>
                    <Typography variant="body1">government employees</Typography>
                  </Box>
                }
              />
            </ProfessionListItem>
            <ProfessionListItem>
              <ListItemText 
                primary={
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <StatValue variant="h6">148</StatValue>
                    <Typography variant="body1">IT professionals</Typography>
                  </Box>
                }
              />
            </ProfessionListItem>
            <ProfessionListItem>
              <ListItemText 
                primary={
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <StatValue variant="h6">145</StatValue>
                    <Typography variant="body1">bankers</Typography>
                  </Box>
                }
              />
            </ProfessionListItem>
            <ProfessionListItem>
              <ListItemText 
                primary={
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <StatValue variant="h6">84</StatValue>
                    <Typography variant="body1">lawyers & judges</Typography>
                  </Box>
                }
              />
            </ProfessionListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <List sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ProfessionListItem>
              <ListItemText 
                primary={
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <StatValue variant="h6">93</StatValue>
                    <Typography variant="body1">Indian Defense professionals</Typography>
                  </Box>
                }
              />
            </ProfessionListItem>
            <ProfessionListItem>
              <ListItemText 
                primary={
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <StatValue variant="h6">85</StatValue>
                    <Typography variant="body1">police professionals</Typography>
                  </Box>
                }
              />
            </ProfessionListItem>
            <ProfessionListItem>
              <ListItemText 
                primary={
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <StatValue variant="h6">79</StatValue>
                    <Typography variant="body1">chartered accountants</Typography>
                  </Box>
                }
              />
            </ProfessionListItem>
            <ProfessionListItem>
              <ListItemText 
                primary={
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <StatValue variant="h6">37</StatValue>
                    <Typography variant="body1">directors/CEOs/MDs</Typography>
                  </Box>
                }
              />
            </ProfessionListItem>
            <ProfessionListItem>
              <ListItemText 
                primary={
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <StatValue variant="h6">30</StatValue>
                    <Typography variant="body1">Indian Railway professionals</Typography>
                  </Box>
                }
              />
            </ProfessionListItem>
            <ProfessionListItem>
              <ListItemText 
                primary={
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <StatValue variant="h6">169</StatValue>
                    <Typography variant="body1">farmers</Typography>
                  </Box>
                }
              />
            </ProfessionListItem>
            <ProfessionListItem>
              <ListItemText 
                primary={
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <StatValue variant="h6">20</StatValue>
                    <Typography variant="body1">scientists</Typography>
                  </Box>
                }
              />
            </ProfessionListItem>
            <ProfessionListItem>
              <ListItemText 
                primary={
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <StatValue variant="h6">10</StatValue>
                    <Typography variant="body1">Indian Civil Service professionals</Typography>
                  </Box>
                }
              />
            </ProfessionListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  </Container>
</SectionContainer>
      
      {/* Global Presence - White Background */}
      <SectionContainer>
        <Container maxWidth="lg">
          <SectionHeading variant="h5">
            Global Presence
          </SectionHeading>
          
          <Typography variant="body1" paragraph sx={{ textAlign: 'center', mb: 4, maxWidth: '80%', mx: 'auto' }}>
            Vidya Bharati alumni are not only located in India but also around the globe. Currently, <b>312 NRI alumni</b> have registered on the portal, with representation from:
          </Typography>
          
          <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '90%', mx: 'auto', mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <StatBox>
                <Typography variant="h3">161</Typography>
                <Typography variant="h6">United States</Typography>
              </StatBox>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatBox>
                <Typography variant="h3">25</Typography>
                <Typography variant="h6">Canada</Typography>
              </StatBox>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatBox>
                <Typography variant="h3">19</Typography>
                <Typography variant="h6">United Kingdom</Typography>
              </StatBox>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatBox>
                <Typography variant="h3">18</Typography>
                <Typography variant="h6">Australia</Typography>
              </StatBox>
            </Grid>
          </Grid>
          
          <Box sx={{ maxWidth: '75%', mx: 'auto', textAlign: 'center' }}>
            <Typography variant="body1" paragraph sx={{ mt: 4 }}>
              Alumni from various other countries, including Dubai, Germany, Italy, Malaysia, New Zealand, South Korea, South Africa, Singapore, UAE, and Denmark.
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ mt: 3 }}>
              A dedicated <b>10-member team</b> in Kolkata oversees the portal's end-to-end operations, including its development, digital marketing, alumni communications, and interactions with schools and various stakeholders in Pranta and Kshetra.
            </Typography>
          </Box>
        </Container>
      </SectionContainer>

      {/* VBFA Alumni Section - Light Background */}
      <SectionContainer bgColor="#f0e9ea">
        <Container maxWidth="lg">
          <SectionHeading variant="h5">
            VBFA Alumni
          </SectionHeading>
          
          <Box sx={{ maxWidth: '75%', mx: 'auto', textAlign: 'center' }}>
            <Typography variant="body1" paragraph>
              VBFA aims to bring alumni with bold ideas together so that we can all contribute to the success of all alumni with ability to leverage upon the strength of of our network and thus have global impact.
            </Typography>
            <Typography variant="body1" paragraph>
              Membership is one of the best ways for alumni and families to demonstrate their VNITian pride. VBFA is now one of our nations pride with world class leading education and leads the way in transdisciplinary education and research.
            </Typography>
            <Typography variant="body1" paragraph>
              Please provide your basic info and details of your presence in the US and register in our Alumni website here.
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
              <Button 
                variant="contained"
                size="large"
                sx={{ 
                  bgcolor: '#841B2D',
                  '&:hover': { bgcolor: '#6a1624' },
                  px: 4,
                  py: 1.5
                }}
              >
                Apply Now
              </Button>
            </Box>
          </Box>
        </Container>
      </SectionContainer>

      {/* Recent Alumni Section - White Background */}
      <SectionContainer>
        <Container maxWidth="lg">
          <SectionHeading variant="h5">
            Recent Alumni
          </SectionHeading>
          
          <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '90%', mx: 'auto' }}>
            {recentAlumni.map((alumni, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <AlumniItem>
                  <Box sx={{ 
                    bgcolor: 'rgba(132, 27, 45, 0.1)', 
                    borderRadius: '50%', 
                    p: 2, 
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <PersonIcon sx={{ fontSize: 60, color: '#841B2D' }} />
                  </Box>
                  <Typography variant="h6" align="center" sx={{ color: '#841B2D', fontWeight: 600 }}>
                    {alumni.name}
                  </Typography>
                  <Typography variant="body2" align="center" color="textSecondary">
                    {alumni.role}
                  </Typography>
                </AlumniItem>
              </Grid>
            ))}
          </Grid>
        </Container>
      </SectionContainer>

      {/* Call to Action - Light Background */}
      <SectionContainer bgColor="#f0e9ea">
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              textAlign: 'center',
              maxWidth: '75%',
              mx: 'auto',
              py: 2
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: '#841B2D', mb: 3 }}>
              Join Our Alumni Network
            </Typography>
            <Typography variant="body1" sx={{ mb: 5 }}>
              Be part of our vibrant alumni community. Register to access exclusive benefits, 
              stay connected with fellow alumni, and contribute to the growth of Vidya Bharati.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
              <Button 
                variant="contained"
                size="large"
                sx={{ 
                  bgcolor: '#841B2D',
                  '&:hover': { bgcolor: '#6a1624' },
                  px: 4,
                  py: 1.5
                }}
              >
                Register Now
              </Button>
              <Button 
                variant="outlined"
                size="large"
                sx={{ 
                  color: '#841B2D',
                  borderColor: '#841B2D',
                  '&:hover': { 
                    borderColor: '#6a1624',
                    color: '#6a1624'
                  },
                  px: 4,
                  py: 1.5
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Container>
      </SectionContainer>
    </>
  );
};

export default Alumni;