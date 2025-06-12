
import React from 'react';

// Simple PageBanner component implementation
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

// Simple SVG icons to replace react-icons
const SchoolIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5,10.5V9h14v1.5H5z M5,16.5h14v-1.5H5V16.5z M12,4.5L5,8v1h14V8L12,4.5z M12,3L2,9.5V21h20V9.5L12,3z M20,19H4v-7.5 l8-4.8l8,4.8V19z"/>
  </svg>
);

const GraduationCapIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,3L1,9l11,6l9-4.91V17h2V9L12,3z M12,16.5l-8-4.35v5.69l8,3.38l8-3.38v-5.69L12,16.5z"/>
  </svg>
);

const ComputerIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20,18c1.1,0,1.99-0.9,1.99-2L22,6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v10c0,1.1,0.9,2,2,2H0v2h24v-2H20z M4,6h16v10H4V6z"/>
  </svg>
);



// Featured Image component - Modified to match Support Vidya Bharati style
const FeaturedImage = ({ imagePath, title }) => {
  const [imageError, setImageError] = React.useState(false);
  
  return (
    <div style={{
      borderRadius: '8px',
      height: '600px', // Increased from 500px to 600px
      width: '100%',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      marginBottom: '32px',
      marginTop: '16px' // Added top margin for spacing from banner
    }}>
      {!imageError ? (
        <img
          src={imagePath}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          onError={() => setImageError(true)}
        />
      ) : (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          backgroundColor: '#841B2D',
          color: 'white',
          padding: '20px'
        }}>
          <SchoolIcon size={120} /> {/* Increased size from 96 to 120 */}
          <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '2rem' }}>
            Sponsor Classroom Construction
          </div>
        </div>
      )}
    </div>
  );
}

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

// Progress Bar Component


// Donor List Component



// Info Card component for mission impact
const InfoCard = ({ icon, title, description }) => {
  return (
    <Box sx={{
      backgroundColor: '#f8f8f8',
      borderRadius: '8px',
      padding: '24px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flex: 1,
      height: '100%'
    }}>
      <Box sx={{ marginBottom: '16px', color: '#841B2D' }}>
        {icon}
      </Box>
      <Typography variant="h5" sx={{ marginBottom: '12px', color: '#333' }}>
        {title}
      </Typography>
      <Typography variant="body1">
        {description}
      </Typography>
    </Box>
  );
};
const SponsorClassroom = () => {
  // Sample donor data
 

  // Impact information
  const impactInfo = [
    {
      title: "Quality Learning Environment",
      description: "Your donation helps create safe, well-designed classrooms that provide an optimal environment for learning and development.",
      icon: <SchoolIcon size={36} />
    },
    {
      title: "Increased Access to Education",
      description: "New classrooms allow schools to accommodate more students, especially in areas where educational facilities are limited.",
      icon: <GraduationCapIcon size={36} />
    },
    {
      title: "Modern Teaching Facilities",
      description: "Classrooms are equipped with essential teaching aids and technology to enhance the learning experience and improve educational outcomes.",
      icon: <ComputerIcon size={36} />
    }
  ];

  return (
    <>
      <PageBanner 
        title="Sponsor Classroom Construction" 
        subtitle="Building Spaces for Learning and Growth in Rural India"
        titleStyle={{ color: 'white' }}
        subtitleStyle={{ color: 'white' }}
      />
      
      <Container style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        {/* Introduction Section with Featured Image */}
        <Box sx={{ marginBottom: '64px' }}>
          <FeaturedImage 
            imagePath="/assets/sponser/Classroom.webp" 
            title="Sponsor Classroom Construction"
          />
          
          <Typography variant="h4" style={{ color: '#841B2D', marginBottom: '24px', textAlign: 'center' }}>
            Creating Spaces for Education and Transformation
          </Typography>
          
          <Typography variant="body1" paragraph style={{ maxWidth: '900px', margin: '0 auto 24px' }}>
            Many Vidya Bharati schools in rural and tribal areas face a critical shortage of classroom space, forcing students to learn in overcrowded or inadequate conditions. Your contribution to construct new classrooms will create conducive learning environments that foster education, creativity, and growth.
          </Typography>
          
          <Typography variant="body1" paragraph style={{ maxWidth: '900px', margin: '0 auto 24px' }}>
            Each classroom is built with durable materials, proper ventilation, lighting, and essential teaching aids. These spaces become transformative environments where students can focus on learning and teachers can effectively impart knowledge and values.
          </Typography>
        </Box>

        {/* Our Impact Section */}
        <Box sx={{ marginBottom: '64px' }}>
  <Typography variant="h4" sx={{ color: '#841B2D', marginBottom: '32px', textAlign: 'center' }}>
    The Impact of Your Support
  </Typography>
  
  <Box sx={{ 
    display: 'flex', 
    flexDirection: { xs: 'column', md: 'row' }, 
    gap: '16px',
    justifyContent: 'space-between'
  }}>
    {impactInfo.map((item, index) => (
      <InfoCard
        key={index}
        icon={item.icon}
        title={item.title}
        description={item.description}
      />
    ))}
  </Box>
</Box>

        {/* How You Can Help Section */}
        <Box sx={{ 
          marginBottom: '64px', 
          textAlign: 'center', 
          backgroundColor: '#f0e9ea',
          padding: '48px',
          borderRadius: '8px'
        }}>
          <Typography variant="h4" style={{ color: '#841B2D', marginBottom: '32px' }}>
            How You Can Help
          </Typography>
          
          <Typography variant="body1" paragraph style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
            Your donation to the classroom construction project can make a significant difference in the lives of children across rural India. Here's how your contribution helps:
          </Typography>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
            <Typography variant="body1" paragraph>
              <strong>$2,500</strong> - Contributes to essential classroom furniture and teaching aids
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>$5,000</strong> - Funds foundation and structural elements for a new classroom
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>$10,000</strong> - Sponsors primary construction of a standard classroom
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>$15,000</strong> - Provides a fully equipped classroom with furniture and basic technology
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>$25,000</strong> - Builds a modern classroom block with multiple rooms and facilities
            </Typography>
          </div>
        </Box>

        {/* Donation Progress Section */}
       

        {/* Project Details */}
       {/* Project Details Section with guaranteed centered title */}
<Box sx={{ marginBottom: '64px' }}>
  {/* Container for title with explicit centering */}
  <Box sx={{ 
    display: 'flex', 
    justifyContent: 'center', 
    width: '100%', 
    marginBottom: '24px'
  }}>
    <Typography variant="h4" sx={{ 
      color: '#841B2D',
      fontWeight: 'medium',
    }}>
      Project Details
    </Typography>
  </Box>
  
  {/* Content box */}
  <Box sx={{ 
    backgroundColor: '#f8f8f8',
    padding: '32px',
    borderRadius: '8px'
  }}>
    <Typography variant="body1" paragraph>
      <strong>What we build:</strong> Each toilet block includes 6-8 separate toilet units with proper ventilation, handwashing stations, and a sustainable water supply system. Construction uses durable materials suitable for local conditions.
    </Typography>
    
    <Typography variant="body1" paragraph>
      <strong>Maintenance plan:</strong> Each project includes a maintenance plan and training for school staff to ensure long-term sustainability and proper upkeep of facilities.
    </Typography>
    
    <Typography variant="body1" paragraph>
      <strong>Community involvement:</strong> Local communities participate in the planning and construction process, creating ownership and ensuring cultural appropriateness.
    </Typography>
  </Box>
</Box>

{/* Tax Benefits Section with guaranteed centered title */}
<Box sx={{ marginBottom: '64px' }}>
  {/* Container for title with explicit centering */}
  <Box sx={{ 
    display: 'flex', 
    justifyContent: 'center', 
    width: '100%', 
    marginBottom: '24px'
  }}>
    <Typography variant="h4" sx={{ 
      color: '#841B2D',
      fontWeight: 'medium',
    }}>
      Tax Benefits
    </Typography>
  </Box>
  
  {/* Content box */}
  <Box sx={{ 
    backgroundColor: '#f8f8f8',
    padding: '32px',
    borderRadius: '8px'
  }}>
    <Typography variant="body1" paragraph>
      Vidya Bharati is a 501(c)(3) tax-exempt organization. Your donation is tax-deductible to the extent allowed by law. Our EIN number is 05-0540432.
    </Typography>
  </Box>
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
              Join Us in Building Educational Foundations
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '32px', maxWidth: '700px', margin: '0 auto 32px' }}>
              Your support today will provide essential classroom facilities that create conducive learning environments and improve educational outcomes for thousands of children across rural India.
            </Typography>
            <Button 
              variant="contained"
              size="large"
              sx={{ 
                bgcolor: '#841B2D',
                '&:hover': { bgcolor: '#6a1624' }
              }}
            >
              <span style={{ marginRight: '8px', display: 'inline-flex', alignItems: 'center' }}>
                <SchoolIcon size={20} />
              </span>
              Sponsor a Classroom
            </Button>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default SponsorClassroom;