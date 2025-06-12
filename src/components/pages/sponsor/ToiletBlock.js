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
const ToiletIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6,22v-5h4v2h4v-2h4v5H6z M17,4v6H7V4h3V2h4v2H17z M20,10c0,0.6-0.4,1-1,1h-2v5h-2v-5H9v5H7v-5H5c-0.6,0-1-0.4-1-1V4
    c0-1.1,0.9-2,2-2h2v2h8V2h2c1.1,0,2,0.9,2,2V10z"/>
  </svg>
);

const GraduationCapIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,3L1,9l11,6l9-4.91V17h2V9L12,3z M12,16.5l-8-4.35v5.69l8,3.38l8-3.38v-5.69L12,16.5z"/>
  </svg>
);

const WaterIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,2c-5.33,4-8,8-8,12c0,4.42,3.58,8,8,8s8-3.58,8-8C20,10,17.33,6,12,2z M12,20c-3.31,0-6-2.69-6-6 c0-2.97,2-6.17,6-9.29c4,3.12,6,6.32,6,9.29C18,17.31,15.31,20,12,20z"/>
    <path d="M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S13.66,15,12,15z"/>
  </svg>
);

const HandsHelpingIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16,13c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S18.2,13,16,13z M16,19c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S17.1,19,16,19z"/>
    <path d="M19,5V3h-2v2h-2v2h2v2h2V7h2V5H19z"/>
    <path d="M13.5,9C14.3,9,15,8.3,15,7.5S14.3,6,13.5,6S12,6.7,12,7.5S12.7,9,13.5,9z"/>
    <path d="M8,9L5,7L2,9l3,2L8,9z"/>
    <path d="M18,12v-1h-6v1c0,1.1-0.9,2-2,2H8c-2.2,0-4,1.8-4,4v3h2v-3c0-1.1,0.9-2,2-2h2c1.7,0,3.1-1,3.7-2.5 c0.3,0.1,0.7,0.1,1.1,0.3c0.5,0.2,1.1,0.5,1.6,0.9c0.5,0.4,0.9,0.8,1.3,1.3C22.8,19,22,21.2,22,21v2h2v-2c0-0.6,0.9-3.8-4-7h-0.1 C19.9,12.7,19,12,18,12z"/>
  </svg>
);

const ShareIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18,16.08c-0.76,0-1.44,0.3-1.96,0.77L8.91,12.7C8.96,12.47,9,12.24,9,12s-0.04-0.47-0.09-0.7l7.05-4.11 C16.5,7.69,17.21,8,18,8c1.66,0,3-1.34,3-3s-1.34-3-3-3s-3,1.34-3,3c0,0.24,0.04,0.47,0.09,0.7L8.04,9.81 C7.5,9.31,6.79,9,6,9c-1.66,0-3,1.34-3,3s1.34,3,3,3c0.79,0,1.5-0.31,2.04-0.81l7.12,4.16c-0.05,0.21-0.08,0.43-0.08,0.65 c0,1.61,1.31,2.92,2.92,2.92c1.61,0,2.92-1.31,2.92-2.92S19.61,16.08,18,16.08z"/>
  </svg>
);

// Featured Image component 
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
            Support Toilet Construction
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
// Info Card component for mission impact
const InfoCard = ({ icon, title, description }) => {
  return (
    <div style={{
      backgroundColor: '#f8f8f8',
      borderRadius: '8px',
      padding: '24px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      flex: '1',
      minWidth: '0' // Prevents flex items from overflowing
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

const SponsorToiletBlock = () => {
  // Sample donor data
  

  // Impact information
  const impactInfo = [
    {
      title: "Improved Sanitation",
      description: "Your donation helps provide clean and safe toilet facilities for children in rural schools, reducing health risks and promoting dignity.",
      icon: <ToiletIcon size={36} />
    },
    {
      title: "Increased Attendance",
      description: "Proper sanitation facilities are especially important for girls, leading to increased attendance and retention rates in schools.",
      icon: <GraduationCapIcon size={36} />
    },
    {
      title: "Health Education",
      description: "Along with toilet facilities, we provide education on hygiene practices, creating lasting impact on student health and community well-being.",
      icon: <WaterIcon size={36} />
    }
  ];

  return (
    <>
      <PageBanner 
        title="Sponsor Toilet Block Construction" 
        subtitle="Providing Dignity and Safety for Rural Students"
        titleStyle={{ color: 'white' }}
        subtitleStyle={{ color: 'white' }}
      />
      
      <Container style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        {/* Introduction Section with Featured Image */}
        <Box sx={{ marginBottom: '64px' }}>
          <FeaturedImage 
            imagePath="/assets/sponser/Toilet.webp" 
            title="Sponsor Toilet Block Construction"
          />
          
          <Typography variant="h4" style={{ color: '#841B2D', marginBottom: '24px', textAlign: 'center' }}>
            Improving Health & Dignity Through Sanitation
          </Typography>
          
          <Typography variant="body1" paragraph style={{ maxWidth: '900px', margin: '0 auto 24px' }}>
            Many Vidya Bharati schools in rural and tribal areas lack proper toilet facilities, creating health risks and barriers to education—especially for girl students. Your contribution to construct toilet blocks will create safe, hygienic environments that promote dignity, health, and education.
          </Typography>
          
          <Typography variant="body1" paragraph style={{ maxWidth: '900px', margin: '0 auto 24px' }}>
            Each toilet block provides separate facilities for boys and girls, with proper drainage systems and handwashing stations. These facilities are essential for maintaining hygiene and preventing disease spread in school communities.
          </Typography>
        </Box>

        {/* Our Impact Section */}
       {/* Our Impact Section */}
<Box sx={{ marginBottom: '64px' }}>
  <Typography variant="h4" style={{ color: '#841B2D', marginBottom: '32px', textAlign: 'center' }}>
    The Impact of Your Support
  </Typography>
  
  <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
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
            Your donation to the toilet block construction project can make a significant difference in the lives of children across rural India. Here's how your contribution helps:
          </Typography>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
            <Typography variant="body1" paragraph>
              <strong>$500</strong> - Contributes to one toilet unit construction
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>$1,500</strong> - Funds a handwashing station and water access point
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>$5,000</strong> - Sponsors a full toilet block with separate facilities for boys and girls
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>$10,000</strong> - Provides a complete sanitation system with drainage and water storage
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>$25,000</strong> - Funds toilet blocks for an entire school cluster, benefiting multiple communities
            </Typography>
          </div>
        </Box>

        

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
    <strong>What we build:</strong> Each toilet block includes 6-8 separate toilet units with proper 
    ventilation, handwashing stations, and a sustainable water supply system. Construction uses 
    durable materials suitable for local conditions.
  </Typography>
  
  <Typography variant="body1" paragraph>
    <strong>Maintenance plan:</strong> Each project includes a maintenance plan and training for 
    school staff to ensure long-term sustainability and proper upkeep of facilities.
  </Typography>
  
  <Typography variant="body1" paragraph>
    <strong>Community involvement:</strong> Local communities participate in the planning and 
    construction process, creating ownership and ensuring cultural appropriateness.
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
              Join Us in Creating Healthier Schools
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '32px', maxWidth: '700px', margin: '0 auto 32px' }}>
              Your support today will provide essential sanitation facilities that improve health, dignity, and education outcomes for thousands of children across rural India.
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
                <ToiletIcon size={20} />
              </span>
              Sponsor a Toilet Block
            </Button>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default SponsorToiletBlock;