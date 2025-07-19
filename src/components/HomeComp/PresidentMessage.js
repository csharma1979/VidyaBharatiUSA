import React from "react";
import { Container } from "@mui/material";

const PresidentMessage = () => (
  <Container maxWidth="xl" className="president-message">
    <h1 className="page-title">
      Message from <span>President</span>
    </h1>
    <h3>Dr. Surendra Garg</h3>
    <div className="message-content">
      <p>
        Vidya Bharati was established in 1952 in Gorakhpur, Uttar Pradesh. Today
        it is one of the largest educational NGOs in the world.
      </p>
      <p>
        It imparts education to 3 million students via 11,956 formal schools and
        6,084 informal schools.
      </p>
      <p>
        Vidya Bharati operates in remote, border, coastal, and tribal areas
        where few venture. It provides CBSE/state board curriculum with an
        emphasis on character building, arts, and health.
      </p>
 
    
    <h3 style={{textAlign:"start" , margin:"0"}}>Education</h3>
      <p>
        Vidya Bharati provides the platform for all different subjects up to
        High Schools. The curriculum and the syllabus are approved by the
        Central Board of Secondary Education (CBSE) and state boards, as per
        affiliations of different schools.
      </p>
      <p>
        In addition provides education to develop a good citizen with national
        character and good sanskars.
      </p>
      <p>
        The curriculum focus is on Academics, Health, Sports, Arts and Music and
        Ethics and Character Building.
      </p>
    </div>
  </Container>
);

export default PresidentMessage;
