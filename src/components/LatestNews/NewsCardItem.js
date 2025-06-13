import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip
} from '@mui/material';
import { Calendar, School } from 'lucide-react';

const NewsCardItem = ({ news, onImageClick }) => {
  return (
    <Card className="news-card">
      <Box className="news-image-wrapper">
        <CardMedia
          component="img"
          image={news.image}
          alt={news.title}
          onClick={() => onImageClick(news.image)}
          className="news-image"
        />
      </Box>
      <CardContent className="news-content">
        <Box className="news-meta">
          <Chip
            icon={<Calendar size={18} color="white" />}
            label={news.date}
            className="event-card__datechip news-date-chip"
          />
          <Chip
            icon={<School size={18} />}
            label={news.category}
            className="news-category-chip"
            variant="outlined"
          />
        </Box>
        <Typography variant="h5" gutterBottom className="news-title">
          {news.title}
        </Typography>
        <Typography variant="body1" className="news-description">
          {news.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCardItem;
