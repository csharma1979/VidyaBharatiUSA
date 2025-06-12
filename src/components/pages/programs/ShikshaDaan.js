import React from 'react';
// Import React Icons
import { FaSchool, FaBookReader, FaGraduationCap, FaChalkboardTeacher, FaUserGraduate, FaBook } from 'react-icons/fa';
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
        margin: spacing ? `-${spacing * 4}px` : '0', // Increased spacing
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
        padding: spacing ? `${spacing * 4}px` : '0', // Increased spacing
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

const ShikshaDaan = () => {
  const highlights = [
    {
      title: "12,098 Schools",
      description: "Operating schools across the country",
      icon: <FaSchool size={30} color="#841B2D" />,
      image: "/assets/sikshadaan/schools.webp"
    },
    {
      title: "8,465 Centers",
      description: "Bal Sanskar Centers nationwide",
      icon: <FaBookReader size={30} color="#841B2D" />,
      image: "/assets/sikshadaan/centers.webp"
    },
    {
      title: "Affordable Education",
      description: "Value-Based Education at Affordable Costs",
      icon: <FaBook size={30} color="#841B2D" />,
      image: "/assets/sikshadaan/affordable_education.webp"
    },
    {
      title: "Academic Excellence",
      description: "Excellent Academic Results",
      icon: <FaGraduationCap size={30} color="#841B2D" />,
      image: "/assets/sikshadaan/acedemic_excellence.webp"
    },
    {
      title: "35,000+ Teachers",
      description: "Dedicated educators shaping future generations",
      icon: <FaChalkboardTeacher size={30} color="#841B2D" />,
      image: "/assets/sikshadaan/teachers.webp"
    },
    {
      title: "3.2M+ Students",
      description: "Students receiving quality education annually",
      icon: <FaUserGraduate size={30} color="#841B2D" />,
      image: "/assets/sikshadaan/students.webp"
    }
  ];

  return (
    <>
      <PageBanner 
        title="Shiksha Daan" 
        subtitle="Support Education, Transform Lives"
        titleStyle={{ color: 'white' }} // Direct style approach for title
        subtitleStyle={{ color: 'white' }} // Direct style approach for subtitle
      />
      
      <Container style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        {/* Introduction Section */}
        <Box sx={{ textAlign: 'center', marginBottom: '64px' }}>
          <Typography variant="h4" style={{ color: '#841B2D', marginBottom: '32px' }}>
            Introduction
          </Typography>
          <Typography variant="body1" paragraph style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
            Education is the mirror of society. A strong nation can be built only through an educated society. It is our collective responsibility to ensure that everyone has access to education, regardless of their socio-economic background.
          </Typography>
          <Typography variant="body1" paragraph style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
            Shiksha Daan is a noble initiative by Vidya Bharati that aims to bridge the educational gap in our society. Through this program, we provide quality education to children from underprivileged backgrounds, ensuring they have access to the same opportunities as others. Our approach combines academic excellence with value-based education, helping shape not just educated individuals, but responsible citizens.
          </Typography>
          <Typography variant="body1" paragraph style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
            The program supports students with essential educational materials, qualified teachers, and modern infrastructure. We believe that every child has the potential to excel, and it's our duty to provide them with the right environment and resources to nurture their talents.
          </Typography>
          <Typography variant="body1" style={{ maxWidth: '800px', margin: '0 auto', fontWeight: '500' }}>
            We all need to make a resolution - to ensure no child is left behind in their educational journey. Your support can help us reach more children and transform more lives through education.
          </Typography>
        </Box>

        {/* About Section */}
        <Box sx={{ marginBottom: '64px' }}>
          <Typography variant="h4" style={{ color: '#841B2D', marginBottom: '32px', textAlign: 'center' }}>
            About Vidya Bharati
          </Typography>
          <Typography variant="body1" paragraph style={{ textAlign: 'center', marginBottom: '48px' }}>
            Vidya Bharati Akhil Bharatiya Shiksha Sansthan is the country's largest non-government educational institution.
          </Typography>

          {/* Cards with Images - Added more spacing between cards and rows */}
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
              Join us in our mission to provide quality education across India. Your contribution can make a difference.
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

export default ShikshaDaan;