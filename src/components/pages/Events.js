import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  styled
} from '@mui/material';
import PageBanner from '../layout/PageBanner';
import { Calendar, Clock, User } from 'lucide-react';

const EventCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}));

const DateChip = styled(Chip)(({ theme }) => ({
  backgroundColor: '#841B2D',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '0.9rem',
  marginBottom: theme.spacing(2)
}));

const Events = () => {
  const events = [
    {
      title: "SMF Master Trainer's Workshop",
      startDate: "2 Nov 2024",
      endDate: "27 Dec 2025",
      image: "/assets/events/workshop.webp",
      description: `To develop a National System of Education that fosters a younger generation committed to Hindutva and infused with patriotic fervor—one that is physically, mentally, spiritually, and emotionally well-rounded; capable of successfully facing life's challenges; and dedicated to serving our brothers and sisters who dwell in villages, forests, hills, and slums.

      This system aims to liberate the underprivileged from the shackles of social evils and injustice, empowering them to contribute to the creation of a harmonious, prosperous, and culturally rich nation.`,
      registrationOpen: true
    },
    {
      title: "Webinar: Unlocking Creativity and Innovation",
      startDate: "21 Oct 2024",
      endDate: "21 Oct 2024",
      image: "/assets/events/webinar.webp",
      time: "07:00 PM",
      speaker: "Mr. Bharat Iyer",
      moderator: "Sanjeet Rao",
      description: `Join the PAN VBFA Alumni Forum for an Insightful Webinar on Creativity and Innovation!

      Are you curious about the difference between creativity and innovation? Do you want to discover the key ingredients for fostering creativity and the framework for effective innovation?

      Featured Speaker:
      Mr. Bharat Iyer
      Art of Living Corporate Faculty
      Formerly with IBM, ABB, SCB, Planetasia, and A.F. Ferguson

      Moderator: Sanjeet Rao, Co-Founder, O2U2 and President, Sandeepan School, Former - Oracle Financial Services

      Mr. Iyer & Mr. Rao are eminent alumni of NIT Surathkal`,
      registrationOpen: true
    }
  ];

  return (
    <>
      <PageBanner 
        title="Events & Activities" 
        subtitle="Join us in our upcoming events and activities"
        titleStyle={{ color: 'white' }}
        subtitleStyle={{ color: 'white' }}
      />
      
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {events.map((event, index) => (
            <Grid item xs={12} md={6} key={index}>
              <EventCard>
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: '100%', md: '40%' },
                    height: { xs: 'auto', md: '100%' },
                    objectFit: 'contain',
                    padding: 2,
                    backgroundColor: '#f5f5f5'
                  }}
                  image={event.image}
                  alt={event.title}
                />
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <DateChip 
                    icon={<Calendar size={18} color="white" />} 
                    label={event.startDate}
                  />
                  
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#333' }}>
                    {event.title}
                  </Typography>

                  <Box sx={{ my: 2 }}>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Calendar size={18} style={{ marginRight: 8, color: '#666' }} />
                      End Date: {event.endDate}
                    </Typography>
                    {event.time && (
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Clock size={18} style={{ marginRight: 8, color: '#666' }} />
                        Time: {event.time}
                      </Typography>
                    )}
                    {event.speaker && (
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                        <User size={18} style={{ marginRight: 8, color: '#666' }} />
                        Speaker: {event.speaker}
                      </Typography>
                    )}
                  </Box>

                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 3,
                      color: '#666',
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {event.description}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button 
                      variant="contained" 
                      sx={{ 
                        bgcolor: '#841B2D',
                        '&:hover': { bgcolor: '#6a1624' }
                      }}
                    >
                      Register Now
                    </Button>
                    <Button 
                      variant="outlined" 
                      sx={{ 
                        color: '#841B2D',
                        borderColor: '#841B2D',
                        '&:hover': { 
                          borderColor: '#6a1624',
                          color: '#6a1624'
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </CardContent>
              </EventCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Events;