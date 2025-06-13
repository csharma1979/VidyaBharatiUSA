import React from "react";
import { Box, Container, Typography } from "@mui/material";
import SectionContainer from "../shared/SectionContainer";
import SectionHeading from "../shared/SectionHeading";
const AlumniOverview = () => {
  return (
    <SectionContainer >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: "85%", mx: "auto" }}>
          <Typography variant="body1" paragraph>
            The Vidya Bharati Alumni portal, known as the Vidya Bharti Purv
            Chatra Network, was launched approximately 18 months ago. This
            online platform serves as a connection point for all Vidya Bharati
            alumni to engage with their schools, batch mates, teachers, and
            current students. Upon successful registration, alumni can log in
            with their username and password to access the latest news,
            activities, and events related to Vidya Bharati schools across
            India.
          </Typography>

          <Typography variant="body1" paragraph>
            Members of the portal can read or download various newsletters and
            publications published regularly. Alumni are encouraged to share
            photos and updates, and even initiate discussions on the platform.
            This facilitates meaningful interactions between alumni and students
            for mentorship and career guidance, allowing alumni to support
            various schools and initiatives of Vidya Bharati both financially
            and non-financially.
          </Typography>

          <Typography variant="body1" paragraph>
            As of April 2019, over <b>6,670 schools</b> have registered on the
            portal, with more than <b>75,000 alumni</b> joining the network.
            Additionally, over <b>80,000 students</b> are part of the portal.
            Internal research indicates that <b>28,181 registered alumni</b>{" "}
            fall into the student community category, which includes those
            pursuing graduation, post-graduation, higher studies, or yet to
            begin their careers.
          </Typography>

          <Typography variant="body1" paragraph>
            Furthermore, there are approximately <b>6,949 alumni</b> categorized
            as part of the working community. Ongoing research aims to provide
            more precise figures in the coming months. The working alumni
            represent a diverse range of professions, including:
          </Typography>
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default AlumniOverview;
