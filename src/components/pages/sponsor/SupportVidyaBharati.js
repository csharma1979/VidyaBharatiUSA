import React from 'react';
import { FaBook, FaGraduationCap, FaUserGraduate, FaBookReader, FaShareAlt, FaHandHoldingHeart } from 'react-icons/fa';
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

// Featured Image component 
const FeaturedImage = ({ imagePath, title }) => {
  const [imageError, setImageError] = React.useState(false);
  
  return (
    <div style={{
      borderRadius: '8px',
      height: '400px',
      width: '100%',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      marginBottom: '32px'
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
          <FaGraduationCap size={80} color="white" />
          <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '1.5rem' }}>
            Support Vidya Bharati
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

const SupportVidyaBharati = () => {
  // Sample donor data
  const donors = [
    { name: "Chaithra T L", amount: 100 },
    { name: "Umesh Shilvant", amount: 1000 },
    { name: "Vijay", amount: 10000 }
  ];

  // Impact information
  const impactInfo = [
    {
      title: "Education for All",
      description: "Your donation helps provide quality education to over 2 lakh underprivileged children in more than 1,200 schools across India.",
      icon: <FaGraduationCap size={36} />
    },
    {
      title: "School Infrastructure",
      description: "We build and maintain school buildings, libraries, laboratories, and other educational facilities in rural and tribal areas.",
      icon: <FaBook size={36} />
    },
    {
      title: "Teacher Training",
      description: "We recruit and train qualified teachers committed to providing quality education with an emphasis on character building and cultural values.",
      icon: <FaHandHoldingHeart size={36} />
    }
  ];
  

  return (
    <>
      <PageBanner 
        title="Support Vidya Bharati" 
        subtitle="Transforming India through Value-Based Education"
        titleStyle={{ color: 'white' }}
        subtitleStyle={{ color: 'white' }}
      />
      
      <Container style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        {/* Introduction Section with Featured Image */}
        <Box sx={{ marginBottom: '64px' }}>
          <FeaturedImage 
            imagePath="/assets/sponser/vidya-bharati.webp" 
            title="Support Vidya Bharati"
          />
          
          <Typography variant="h4" style={{ color: '#841B2D', marginBottom: '24px', textAlign: 'center' }}>
            Empower the Future of India
          </Typography>
          
          <Typography variant="body1" paragraph style={{ maxWidth: '900px', margin: '0 auto 24px' }}>
            Vidya Bharati is one of the largest non-governmental educational organizations in India, running over 12,000 schools with more than 32 lakh students. Our mission is to provide quality education based on Indian cultural values to children from all backgrounds, particularly in rural and tribal areas.
          </Typography>
          
          <Typography variant="body1" paragraph style={{ maxWidth: '900px', margin: '0 auto 24px' }}>
            Your generous contribution helps us deliver education to underprivileged children who otherwise would not have access to quality schooling. We believe that education is the most powerful tool to transform lives and build a stronger nation.
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
    justifyContent: 'center'
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
            Your donation to Vidya Bharati can make a significant difference in the lives of children across India. Here's how your contribution helps:
          </Typography>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
            <Typography variant="body1" paragraph>
              <strong>$25</strong> - Provides school supplies for one student for a year
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>$100</strong> - Supports one student's education for a month
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>$500</strong> - Sponsors a teacher's training program
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>$1,000</strong> - Helps establish a library in a rural school
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>$5,000</strong> - Contributes to building a classroom in an underserved area
            </Typography>
          </div>
        </Box>

        

        {/* Tax Benefit Information */}
        <Box sx={{
  display: 'flex',
  justifyContent: 'center',
  width: '100%'
}}>
  <Box sx={{
    marginBottom: '64px',
    backgroundColor: '#f8f8f8',
    padding: '32px',
    borderRadius: '8px',
    maxWidth: '600px',
    textAlign: 'center'
  }}>
    <Typography variant="h5" sx={{ color: '#841B2D', marginBottom: '16px' }}>
      Tax Benefits
    </Typography>
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
              Join Us in Transforming Lives
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '32px', maxWidth: '700px', margin: '0 auto 32px' }}>
              Your contribution today can help shape the future of thousands of children across India through quality education and value-based learning.
            </Typography>
            <Button 
              variant="contained"
              size="large"
              sx={{ 
                bgcolor: '#841B2D',
                '&:hover': { bgcolor: '#6a1624' }
              }}
            >
              <FaBookReader style={{ marginRight: '8px' }} />
              Support Vidya Bharati
            </Button>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default SupportVidyaBharati;