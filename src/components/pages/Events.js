import React from "react";
import { Container, Grid } from "@mui/material";
import PageBanner from "../layout/PageBanner";
import { events } from "../Data/EventData";
import EventCard from "../EventComp/EventCard";


const Events = () => {
  return (
    <>
      <PageBanner
        title="Events & Activities"
        subtitle="Join us in our upcoming events and activities"
        titleStyle={{ color: "white" }}
        subtitleStyle={{ color: "white" }}
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {events.map((event, index) => (
            <Grid item xs={12} md={6} key={index}>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Events;
