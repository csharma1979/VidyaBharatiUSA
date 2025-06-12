import React from 'react';
import { FaBook, FaGraduationCap, FaUserGraduate, FaBookReader, FaShareAlt } from 'react-icons/fa';

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
const BookIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"/>
    <path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z"/>
    <path d="M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z"/>
    <path d="M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z"/>
  </svg>
);

const ReadingIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"/>
    <circle cx="6.5" cy="11.5" r="1.5"/>
    <path d="M3,9.5h7v1H3V9.5z"/>
    <path d="M3,13.5h7v1H3V13.5z"/>
  </svg>
);

const GraduationCapIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,3L1,9l11,6l9-4.91V17h2V9L12,3z M12,16.5l-8-4.35v5.69l8,3.38l8-3.38v-5.69L12,16.5z"/>
  </svg>
);


// Featured Image component 
const FeaturedImage = ({ imagePath, title }) => {
  const [imageError, setImageError] = React.useState(false);
  
  return (
    <div style={{
      borderRadius: '8px',
      height: '600px',  // Increased from 400px to 600px
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
          <FaGraduationCap size={120} color="white" /> {/* Increased size from 80 to 120 */}
          <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '2rem' }}>
            Support School Library
          </div>
        </div>
      )}
    </div>
  );
};
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
    <div style={{
      backgroundColor: '#f8f8f8',
      borderRadius: '8px',
      padding: '24px',
      marginBottom: '16px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }}>
      <div style={{ marginBottom: '16px', color: '#841B2D' }}>
        {icon}
      </div>
      <Typography variant="h5" style={{ marginBottom: '12px', color: '#333' }}>
        {title}
      </Typography>
      <Typography variant="body1">
        {description}
      </Typography>
    </div>
  );
};

const SponsorLibrary = () => {
  // Sample donor data
 

  // Define the impactInfo data here
  const impactInfo = [
    {
      icon: <BookIcon size={36} />,
      title: "Literacy Improvement",
      description: "Access to diverse reading materials significantly improves reading comprehension, vocabulary, and overall literacy levels among students."
    },
    {
      icon: <ReadingIcon size={36} />,
      title: "Love for Reading",
      description: "Well-equipped libraries foster a lifelong love for reading, encouraging students to explore knowledge beyond textbooks."
    },
    {
      icon: <GraduationCapIcon size={36} />,
      title: "Academic Excellence",
      description: "Students with access to library resources consistently show better academic performance across all subjects."
    }
  ];

  return (
    <>
      <PageBanner 
        title="Sponsor Library Establishment" 
        subtitle="Unlocking Knowledge and Imagination for Rural Students"
        titleStyle={{ color: 'white' }}
        subtitleStyle={{ color: 'white' }}
      />
      
      <Container style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        {/* Introduction Section with Featured Image */}
        <Box sx={{ marginBottom: '64px' }}>
          <FeaturedImage 
            imagePath="/assets/sponser/school-library.webp" 
            title="Sponsor Library Establishment"
          />
          
          <Typography variant="h4" style={{ color: '#841B2D', marginBottom: '24px', textAlign: 'center' }}>
            Opening Doors to Knowledge and Imagination
          </Typography>
          
          <Typography variant="body1" paragraph style={{ maxWidth: '900px', margin: '0 auto 24px' }}>
            Many Vidya Bharati schools in rural and tribal areas lack proper library facilities, limiting students' access to books and learning resources. Your contribution to establish a library will create a nurturing environment for intellectual growth, imagination, and cultural enrichment.
          </Typography>
          
          <Typography variant="body1" paragraph style={{ maxWidth: '900px', margin: '0 auto 24px' }}>
            Each library is equipped with a diverse collection of books, reading spaces, and educational materials that cater to different age groups and interests. These libraries become the heart of learning in schools, providing resources that extend beyond classroom teaching.
          </Typography>
        </Box>

        {/* Our Impact Section */}
        <Box sx={{ marginBottom: '64px' }}>
          <Typography variant="h4" style={{ color: '#841B2D', marginBottom: '32px', textAlign: 'center' }}>
            The Impact of Your Support
          </Typography>
          
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '16px' }}>
            {impactInfo.map((item, index) => (
              <InfoCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
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
            Your donation to the library establishment project can make a significant difference in the lives of children across rural India. Here's how your contribution helps:
          </Typography>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
            <Typography variant="body1" paragraph>
              <strong>$500</strong> - Provides a collection of essential textbooks and reference materials
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>$1,000</strong> - Funds library furniture including bookshelves, reading tables, and chairs
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>$2,500</strong> - Sponsors a comprehensive book collection with fiction, non-fiction, and educational materials
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>$5,000</strong> - Establishes a complete library with books, furniture, and digital resources
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>$10,000</strong> - Creates a model library that includes books in multiple languages, educational games, and multimedia resources
            </Typography>
          </div>
        </Box>

        {/* Donation Progress Section */}
        
       {/* Project Details */}
<Box sx={{
  marginBottom: '64px',
  backgroundColor: '#f8f8f8',
  padding: '32px',
  borderRadius: '8px'
}}>
  <Typography variant="h5" style={{ color: '#841B2D', marginBottom: '16px', textAlign: 'center' }}>
    Project Details
  </Typography>
  
  <Typography variant="body1" paragraph>
    <strong>What we establish:</strong> Each library includes a diverse collection of books in multiple 
    languages, comfortable reading spaces, educational materials, and basic digital resources where 
    possible. The design is tailored to local needs and space availability.
  </Typography>
  
  <Typography variant="body1" paragraph>
    <strong>Sustainability plan:</strong> Each project includes training for teachers and staff on 
    library management, book preservation, and organizing reading activities to maximize student 
    engagement and learning.
  </Typography>
  
  <Typography variant="body1" paragraph>
    <strong>Community involvement:</strong> Local communities contribute to book selection and 
    library activities, ensuring cultural relevance and creating a sense of ownership.
  </Typography>
</Box>

{/* Tax Benefit Information */}
<Box sx={{
  marginBottom: '64px',
  backgroundColor: '#f8f8f8',
  padding: '32px',
  borderRadius: '8px'
}}>
  <Typography variant="h5" style={{ color: '#841B2D', marginBottom: '16px', textAlign: 'center' }}>
    Tax Benefits
  </Typography>
  
  <Typography variant="body1" paragraph>
    Vidya Bharati is a 501(c)(3) tax-exempt organization. Your donation is tax-deductible to the extent allowed by law. Our EIN number is 05-0540432.
  </Typography>
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
              Join Us in Enriching Young Minds
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '32px', maxWidth: '700px', margin: '0 auto 32px' }}>
              Your support today will provide essential library resources that foster a love for reading, expand knowledge, and improve educational outcomes for thousands of children across rural India.
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
                <BookIcon size={20} />
              </span>
              Sponsor a Library
            </Button>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default SponsorLibrary;