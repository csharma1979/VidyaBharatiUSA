import React from "react";
import { Box, Container, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import SectionHeading from "../shared/SectionHeading";
import SectionContainer from "../shared/SectionContainer";
const professionsLeft = [
  { title: "teachers", count: 1581 },
  { title: "doctors", count: 1164 },
  { title: "businesspersons", count: 101 },
  { title: "engineers", count: 679 },
  { title: "government employees", count: 227 },
  { title: "IT professionals", count: 148 },
  { title: "bankers", count: 145 },
  { title: "lawyers & judges", count: 84 },
];

const professionsRight = [
  { title: "Indian Defense professionals", count: 93 },
  { title: "police professionals", count: 85 },
  { title: "chartered accountants", count: 79 },
  { title: "directors/CEOs/MDs", count: 37 },
  { title: "Indian Railway professionals", count: 30 },
  { title: "farmers", count: 169 },
  { title: "scientists", count: 20 },
  { title: "Indian Civil Service professionals", count: 10 },
];

const renderProfessionList = (data) =>
  data.map((item, idx) => (
    <ListItem key={idx} className="profession-item">
      <ListItemText
        primary={
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h6" className="stat-value">{item.count}</Typography>
            <Typography variant="body1">{item.title}</Typography>
          </Box>
        }
      />
    </ListItem>
  ));

const ProfessionList = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionHeading variant="h5">
          Professional Distribution
        </SectionHeading>
        <Box sx={{ width: "100%", maxWidth: "90%", mx: "auto" }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6}>
              <List>{renderProfessionList(professionsLeft)}</List>
            </Grid>
            <Grid item xs={12} md={6}>
              <List>{renderProfessionList(professionsRight)}</List>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </SectionContainer>
  );
};

export default ProfessionList;
