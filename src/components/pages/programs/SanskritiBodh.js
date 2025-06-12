import React from 'react';
// Import React Icons
import { FaBook, FaLanguage, FaAward, FaClipboardList, FaCulture, FaBookReader, FaGraduationCap, FaMedal, FaUsers, FaUniversity } from 'react-icons/fa';
import PageBanner from '../../layout/PageBanner';

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

const Grid = ({ container, item, xs, sm, md, children, spacing, sx }) => {
  if (container) {
    return (
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        margin: spacing ? `-${spacing * 4}px` : '0',
        ...sx
      }}>
        {children}
      </div>
    );
  }
  
  if (item) {
    return (
      <div style={{ 
        flex: '0 0 auto',
        padding: spacing ? `${spacing * 4}px` : '0',
        width: md === 4 ? '33.333%' : (sm === 6 ? '50%' : '100%'),
        boxSizing: 'border-box',
        '@media (max-width: 960px)': {
          width: sm === 6 ? '50%' : '100%'
        },
        '@media (max-width: 600px)': {
          width: '100%'
        },
        ...sx
      }}>
        {children}
      </div>
    );
  }
  
  return <div>{children}</div>;
};

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
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
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

const SanskritiBodh = () => {

  const highlights = [
    {
      title: "Cultural Heritage",
      description: "Preserving and promoting Indian cultural values",
      image: "/assets/sanskritibodh/cultural.webp"
    },
    {
      title: "Moral Education",
      description: "Building character through value-based learning",
      image: "/assets/sanskritibodh/moral_education.webp"
    },
    {
      title: "Sanskrit Learning",
      description: "Teaching the ancient language of wisdom",
      image: "/assets/sanskritibodh/sanskrit.webp"
    },
    {
      title: "Vedic Studies",
      description: "Understanding ancient Indian knowledge systems",
      image: "/assets/sanskritibodh/vedic.webp"
    },
    {
      title: "1000+ Programs",
      description: "Cultural activities and workshops annually",
      image: "/assets/sanskritibodh/1000programs.webp"
    },
    {
      title: "50,000+ Students",
      description: "Learning cultural values and traditions",
      image: "/assets/sanskritibodh/students.webp"
    }
  ];

  return (
    <>
      <PageBanner 
        title="Sanskriti Bodh Pariyojana" 
        subtitle="Preserving Culture, Building Character"
        titleStyle={{ color: 'white' }} 
        subtitleStyle={{ color: 'white' }}
      />
      
      <Container style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        {/* Introduction Section */}
        <Box sx={{ textAlign: 'center', marginBottom: '64px' }}>
          <Typography variant="h4" style={{ color: '#841B2D', marginBottom: '32px' }}>
            Introduction
          </Typography>
          <Typography variant="body1" paragraph style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
            Culture is the foundation of a civilization's identity and strength. In today's rapidly globalizing world, it's crucial to maintain our connection with our rich cultural heritage while embracing progress.
          </Typography>
          <Typography variant="body1" paragraph style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
            Sanskriti Bodh Pariyojana is Vidya Bharati's comprehensive cultural education program that aims to instill traditional values and cultural awareness in students. This unique initiative combines ancient wisdom with modern educational methods, creating a balanced approach to character development and cultural learning.
          </Typography>
          <Typography variant="body1" paragraph style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
            Through this program, students learn about India's rich cultural heritage, traditional arts, Sanskrit language, and moral values. We organize various cultural activities, workshops, and events that help students understand and appreciate their cultural roots while developing a strong moral compass.
          </Typography>
          <Typography variant="body1" style={{ maxWidth: '800px', margin: '0 auto', fontWeight: '500' }}>
            Join us in our mission to preserve and promote India's cultural heritage through education, ensuring our future generations remain connected to their roots while moving forward in the modern world.
          </Typography>
        </Box>

        {/* Program Highlights Section */}
        <Box sx={{ marginBottom: '64px' }}>
          <Typography variant="h4" style={{ color: '#841B2D', marginBottom: '32px', textAlign: 'center' }}>
            Program Highlights
          </Typography>
          <Typography variant="body1" paragraph style={{ textAlign: 'center', marginBottom: '48px' }}>
            Sanskriti Bodh Pariyojana offers a comprehensive approach to cultural education and character development.
          </Typography>

          {/* Cards with Images - 3x3 grid format */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              justifyContent: 'center'
            }}
          >
            {highlights.map((highlight, index) => (
              <div
                key={index}
                style={{
                  flex: '1 1 calc(33.333% - 24px)', // 3 cards per row with spacing
                  maxWidth: 'calc(33.333% - 24px)',
                  minWidth: '250px',
                  boxSizing: 'border-box',
                }}
              >
                <Card imagePath={highlight.image}>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: '600',
                      fontSize: '1.2rem',
                      marginBottom: '8px'
                    }}
                  >
                    {highlight.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ fontSize: '0.9rem' }}
                  >
                    {highlight.description}
                  </Typography>
                </Card>
              </div>
            ))}
          </div>
        </Box>



        {/* Call to Action - Full width like banner with light background color */}
        <div style={{ 
          textAlign: 'center',
          backgroundColor: '#f0e9ea', // Same as ShikshaDaan page
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
              Support Cultural Education
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '32px', maxWidth: '700px', margin: '0 auto 32px' }}>
              Help us preserve and promote India's rich cultural heritage through education. Your support makes a difference.
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

export default SanskritiBodh;