import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  useTheme,
} from "@mui/material";
import { Calendar, Clock, User } from "lucide-react";

const EventCard = ({ event }) => {
  const theme = useTheme();

  return (
    <Card className="event-card">
      <CardMedia
        component="img"
        className="event-card__media"
        image={event.image}
        alt={event.title}
      />

      <CardContent className="event-card__content">
        <Chip
          className="event-card__datechip"
          icon={<Calendar size={18} color="white" />}
          label={event.startDate}
        />

        <Typography variant="h5" className="event-card__title">
          {event.title}
        </Typography>

        <Box className="event-card__details">
          <Typography variant="body2">
            <Calendar size={18} /> End Date: {event.endDate}
          </Typography>

          {event.time && (
            <Typography variant="body2">
              <Clock size={18} /> Time: {event.time}
            </Typography>
          )}

          {event.speaker && (
            <Typography variant="body2">
              <User size={18} /> Speaker: {event.speaker}
            </Typography>
          )}
        </Box>

        <Typography variant="body1" className="event-card__description">
          {event.description}
        </Typography>

        <Box className="event-card__buttons">
          <Button variant="contained" className="cta-button">
            Register Now
          </Button>
          <Button variant="outlined" className="cta-btn-outline">
            Learn More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventCard;
