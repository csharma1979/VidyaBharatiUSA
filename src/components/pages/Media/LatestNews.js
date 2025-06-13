import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import PageBanner from "../../layout/PageBanner";
import NewsCardItem from "../../LatestNews/NewsCardItem";
import NewsDialog from "../../LatestNews/NewsDialog";

const LatestNews = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const newsItems = [
    {
      title: "Vidya Bharati students excel in Board Exams",
      date: "15 May 2025",
      image: "/assets/LatestNews/exam-success.webp",
      description:
        "Vidya Bharati students have excelled in the Board Examinations, securing top ranks in the state. Among the top 10, our students have achieved the 1st, 3rd, and 10th positions. The 1st rank holder scored a perfect 500/500, while the 3rd rank holder secured 498/500.",
      category: "Academic Excellence",
    },
  ];

  return (
    <>
      <PageBanner
        title="Latest News"
        subtitle="Stay updated with our recent achievements and activities"
        titleStyle={{ color: "white" }}
        subtitleStyle={{ color: "white" }}
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {newsItems.map((news, index) => (
            <Grid item xs={12} md={6} key={index}>
              <NewsCardItem news={news} onImageClick={handleImageClick} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <NewsDialog
        open={openDialog}
        onClose={handleCloseDialog}
        image={selectedImage}
      />
    </>
  );
};

export default LatestNews;
