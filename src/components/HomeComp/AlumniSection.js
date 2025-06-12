
import { Container, Grid, Box, Typography } from '@mui/material';

export const AlumniSection = ({ alumniList }) => (
  <Container maxWidth="xl" sx={{ py: 8, bgcolor: 'background.default' }}>
    <Typography variant="h3" fontWeight="bold" color="text.primary" textAlign="center" mb={6}>
      Recent <Box component="span" color="vbfa.maroon">Alumni</Box>
    </Typography>
    <Grid container spacing={2} justifyContent="center">
      {alumniList.map(({ name, role }, i) => (
        <Grid item xs={12} sm={6} md={2.4} key={name + i}>
          <Box sx={{
            p: 4, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3,
            textAlign: 'center', transition: 'transform 0.2s',
            '&:hover': { transform: 'translateY(-5px)' }
          }}>
            <Box sx={{ width: 60, height: 60, mb: 2, mx: 'auto',
              bgcolor: 'rgba(132, 27, 45, 0.1)', borderRadius: '50%', display: 'flex',
              alignItems: 'center', justifyContent: 'center'
            }}>
              <FaUserCircle size={40} color={theme.palette.vbfa.maroon} />
            </Box>
            <Typography variant="h6" color="vbfa.maroon">{name}</Typography>
            <Typography variant="body2" color="text.secondary">{role}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
);
