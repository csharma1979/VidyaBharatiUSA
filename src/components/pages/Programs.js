import React from 'react';
// Import React Icons
import { FaHandHoldingHeart, FaGraduationCap, FaUniversity } from 'react-icons/fa';
import PageBanner from '../layout/PageBanner';

// Create styled components without Material UI
const Container = ({ children, style }) => (
  <div style={{ 
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: '0 16px',
    ...style 
  }}>
    {children}
  </div>
);

const Typography = ({ variant, children, style, paragraph }) => {
  const getStyleForVariant = () => {
    switch(variant) {
      case 'h4':
        return { fontSize: '2rem', fontWeight: '600', marginBottom: '0.5rem' };
      case 'h5':
        return { fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' };
      case 'body1':
        return { fontSize: '1rem', lineHeight: '1.5', marginBottom: paragraph ? '1rem' : '0' };
      default:
        return {};
    }
  };

  return (
    <div style={{ 
      ...getStyleForVariant(),
      ...style 
    }}>
      {children}
    </div>
  );
};

const Box = ({ children, sx }) => (
  <div style={{ 
    ...sx 
  }}>
    {children}
  </div>
);

const Card = ({ children, imagePath, style }) => (
  <div style={{
    backgroundImage: `url(${imagePath})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '8px',
    height: '220px',
    padding: '20px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'left',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    ...style
  }}>
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.4)',  // semi-transparent overlay
      padding: '16px',
      borderRadius: '8px',
    }}>
      {children}
    </div>
  </div>
);

const Button = ({ children, variant, size, sx, onClick }) => {
  const getStyles = () => {
    let baseStyles = {
      padding: size === 'large' ? '12px 24px' : '8px 16px',
      fontSize: size === 'large' ? '1rem' : '0.875rem',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: '500',
      transition: 'background-color 0.3s ease',
    };
    
    if (variant === 'contained') {
      baseStyles = {
        ...baseStyles,
        backgroundColor: '#841B2D',
        color: 'white',
      };
    }
    
    return { ...baseStyles, ...sx };
  };
  
  return (
    <button 
      style={getStyles()}
      onClick={onClick}
      onMouseOver={(e) => {
        if (sx && sx['&:hover'] && sx['&:hover'].bgcolor) {
          e.currentTarget.style.backgroundColor = sx['&:hover'].bgcolor;
        }
      }}
      onMouseOut={(e) => {
        if (sx && sx.bgcolor) {
          e.currentTarget.style.backgroundColor = sx.bgcolor;
        }
      }}
    >
      {children}
    </button>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "Shiksha Daan",
      description: "Support Education, Transform Lives",
      icon: <FaGraduationCap size={30} color="#841B2D" />,
      image: "/assets/sikshadaan/affordable_education.webp"
    },
    {
      title: "Sanskriti Bodh Pariyojna",
      description: "Preserving Culture, Building Character",
      icon: <FaHandHoldingHeart size={30} color="#841B2D" />,
      image: "/assets/sanskritibodh/cultural.webp"
    },
    {
      title: "Adopt a School",
      description: "Empower Education ,Ignite change",
      icon: <FaUniversity size={30} color="#841B2D" />,
      image: "/assets/sanskritibodh/students.webp"
    }
  ];

  return (
    <>
      <PageBanner 
        title="Our Programs" 
        subtitle="Contributing to a Stronger India Through Education and Culture"
        titleStyle={{ color: 'white' }}
        subtitleStyle={{ color: 'white' }}
      />
      
      <Container style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        {/* Introduction Section */}
        <Box sx={{ textAlign: 'center', marginBottom: '64px' }}>
          <Typography variant="h4" style={{ color: '#841B2D', marginBottom: '32px' }}>
            Our Initiatives
          </Typography>
          <Typography variant="body1" paragraph style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
            Vidya Bharati USA is committed to supporting educational and cultural initiatives that preserve and promote Indian values while contributing to societal development. Our programs focus on education, cultural preservation, and sustainable development.
          </Typography>
          <Typography variant="body1" paragraph style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
            Through our carefully designed initiatives, we aim to bridge gaps in education, preserve traditional knowledge systems, and create sustainable development models that can benefit communities across India. Each program addresses specific needs while aligning with our broader mission of fostering a value-based society.
          </Typography>
          <Typography variant="body1" style={{ maxWidth: '800px', margin: '0 auto', fontWeight: '500' }}>
            Explore our key programs below and discover how you can contribute to these transformative initiatives.
          </Typography>
        </Box>

        {/* Programs Section */}
        <Box sx={{ marginBottom: '64px' }}>
          <Typography variant="h4" style={{ color: '#841B2D', marginBottom: '32px', textAlign: 'center' }}>
            Featured Programs
          </Typography>
          <Typography variant="body1" paragraph style={{ textAlign: 'center', marginBottom: '48px' }}>
            Discover how our initiatives are making a difference across India.
          </Typography>

          {/* Program Cards */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              justifyContent: 'center'
            }}
          >
            {programs.map((program, index) => (
              <div
                key={index}
                style={{
                  flex: '1 1 calc(33.333% - 24px)', // 3 cards per row with spacing
                  maxWidth: 'calc(33.333% - 24px)',
                  minWidth: '300px',
                  boxSizing: 'border-box',
                }}
              >
                <Card imagePath={program.image}>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: '600',
                      fontSize: '1.2rem',
                      marginBottom: '8px'
                    }}
                  >
                    {program.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ fontSize: '0.9rem' }}
                  >
                    {program.description}
                  </Typography>
                </Card>
              </div>
            ))}
          </div>
        </Box>

        {/* Call to Action - Full width like banner */}
        <div style={{ 
          textAlign: 'center',
          backgroundColor: '#f0e9ea',
          padding: '64px 0',
          margin: '0',
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw'
        }}>
          <Container>
            <Typography variant="h4" style={{ fontWeight: '600', marginBottom: '16px' }}>
              Support Our Mission
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '32px', maxWidth: '700px', margin: '0 auto 32px' }}>
              Join us in our mission to provide quality education and preserve cultural values across India. Your contribution can make a significant difference.
            </Typography>
            <Button 
              variant="contained"
              size="large"
              sx={{ 
                bgcolor: '#841B2D',
                '&:hover': { bgcolor: '#6a1624' }
              }}
            >
              Contribute Now
            </Button>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Programs;