import React, { useState } from 'react';
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
  styled,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import PageBanner from '../../layout/PageBanner';
import { Calendar, School, X } from 'lucide-react';

const NewsCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  transition: 'transform 0.3s ease',
  marginBottom: theme.spacing(4),
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

const ImageContainer = styled(CardMedia)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.9,
  }
}));

const LatestNews = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Handle opening the image dialog
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setOpenDialog(true);
  };

  // Handle closing the image dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const newsItems = [
    {
      title: "Vidya Bharati students excel in Board Exams",
      date: "15 May 2025",
      image: "/assets/LatestNews/exam-success.webp",
      description: "Vidya Bharati students have excelled in the Board Examinations, securing top ranks in the state. Among the top 10, our students have achieved the 1st, 3rd, and 10th positions. The 1st rank holder scored a perfect 500/500, while the 3rd rank holder secured 498/500.",
      category: "Academic Excellence"
    },
  ];

  return (
    <>
      <PageBanner
        title="Latest News"
        subtitle="Stay updated with our recent achievements and activities"
        titleStyle={{ color: 'white' }}
        subtitleStyle={{ color: 'white' }}
      />
      
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container>
          {newsItems.map((news, index) => (
            <Grid item xs={12} key={index}>
              <NewsCard>
                <Box
                  sx={{
                    width: { xs: '100%', md: '25%' }, // Reduced from 30% to 25%
                    padding: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f5f5f5'
                  }}
                >
                  <ImageContainer
                    component="img"
                    sx={{
                      width: '100%',
                      maxHeight: 180, // Limited max height to ensure image is fully visible
                      objectFit: 'contain', // Changed from 'cover' to 'contain'
                      borderRadius: 1
                    }}
                    image={news.image}
                    alt={news.title}
                    onClick={() => handleImageClick(news.image)}
                  />
                </Box>
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <DateChip
                      icon={<Calendar size={18} color="white" />}
                      label={news.date}
                    />
                    <Chip
                      icon={<School size={18} />}
                      label={news.category}
                      variant="outlined"
                      sx={{
                        borderColor: '#841B2D',
                        color: '#841B2D'
                      }}
                    />
                  </Box>
                  
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#333', mt: 2 }}>
                    {news.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: '#666',
                      fontSize: '1.1rem',
                      lineHeight: 1.6
                    }}
                  >
                    {news.description}
                  </Typography>
                </CardContent>
              </NewsCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Image Dialog for enlarged view */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ position: 'relative', padding: 0, overflow: 'hidden', textAlign: 'center' }}>
          <IconButton
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              }
            }}
          >
            <X size={24} />
          </IconButton>
          <img
            src={selectedImage}
            alt="Enlarged view"
            style={{
              maxWidth: '100%',
              maxHeight: '80vh',
              objectFit: 'contain'
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LatestNews;