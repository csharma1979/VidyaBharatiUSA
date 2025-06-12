import React from 'react';
import { FaNewspaper, FaTrophy, FaArrowRight } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import Link from 'next/link'; // Assuming you're using React Router

const Media = () => {
  // Container component
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

  // Typography component
  const Typography = ({ variant, children, style, paragraph }) => {
    const getStyleForVariant = () => {
      switch(variant) {
        case 'h4':
          return { fontSize: '2rem', fontWeight: '600', marginBottom: '0.5rem' };
        case 'h5':
          return { fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' };
        case 'h6':
          return { fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' };
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

  // Box component
  const Box = ({ children, sx }) => (
    <div style={{ 
      ...sx 
    }}>
      {children}
    </div>
  );

  // Card component for section links
  const SectionCard = ({ title, description, icon, linkTo }) => {
    const Icon = icon;
    
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        height: '100%',
        backgroundColor: 'white',
        padding: '32px 24px',
        textAlign: 'center',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
      }}
      >
        <div style={{
          fontSize: '48px',
          color: '#841B2D',
          marginBottom: '16px',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Icon />
        </div>
        <Typography variant="h5" style={{ color: '#841B2D', marginBottom: '16px' }}>
          {title}
        </Typography>
        <Typography variant="body1" paragraph style={{ flex: '1', marginBottom: '24px' }}>
          {description}
        </Typography>
        <Link 
          to={linkTo}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: '#841B2D',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: '500',
            marginTop: 'auto',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6a1624'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#841B2D'}
        >
          View Details <FaArrowRight style={{ marginLeft: '8px' }} />
        </Link>
      </div>
    );
  };

  return (
    <>
      <PageBanner 
        title="Media Center" 
        subtitle="Student Achievements & Latest News"
        titleStyle={{ color: 'white' }} 
        subtitleStyle={{ color: 'white' }}
      />
      
      <Container style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        {/* Introduction Section */}
        <Box sx={{ textAlign: 'center', marginBottom: '64px' }}>
          <Typography variant="h4" style={{ color: '#841B2D', marginBottom: '32px' }}>
            Stay Updated with Vidya Bharati
          </Typography>
          <Typography variant="body1" paragraph style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
            Welcome to the Vidya Bharati Media Center, your source for the latest news, achievements, and updates from our institution. Discover the accomplishments of our students, stay informed about recent developments, and celebrate excellence with us.
          </Typography>
          <Typography variant="body1" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Explore our comprehensive collection of student achievements and the latest news that showcases our commitment to educational excellence and holistic development.
          </Typography>
        </Box>

        {/* Media Sections */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            justifyContent: 'center',
            marginBottom: '64px'
          }}
        >
          {/* Achievements Section Card */}
          <div
            style={{
              flex: '1 1 calc(50% - 16px)',
              maxWidth: 'calc(50% - 16px)',
              minWidth: '300px',
            }}
          >
            <SectionCard 
              title="Achievements" 
              description="Explore the remarkable accomplishments of our students in UPSC examinations and other prestigious competitions. Discover how our educational approach fosters excellence and success."
              icon={FaTrophy}
              linkTo="/media/achievements"
            />
          </div>

          {/* Latest News Section Card */}
          <div
            style={{
              flex: '1 1 calc(50% - 16px)',
              maxWidth: 'calc(50% - 16px)',
              minWidth: '300px',
            }}
          >
            <SectionCard 
              title="Latest News" 
              description="Stay updated with the most recent developments, board examination results, and noteworthy events at Vidya Bharati. Celebrate the achievements of our top-performing students."
              icon={FaNewspaper}
              linkTo="/media/latest-news"
            />
          </div>
        </div>

        {/* Newsletter Sign Up Section */}
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
              Stay Connected
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '32px', maxWidth: '700px', margin: '0 auto 32px' }}>
              Subscribe to our newsletter to receive the latest updates, news, and announcements directly in your inbox.
            </Typography>
            <div style={{
              display: 'flex',
              maxWidth: '500px',
              margin: '0 auto',
              gap: '8px',
            }}>
              <input 
                type="email" 
                placeholder="Enter your email address"
                style={{
                  flex: '1',
                  padding: '12px 16px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  fontSize: '1rem',
                }}
              />
              <button
                style={{
                  padding: '12px 24px',
                  fontSize: '1rem',
                  backgroundColor: '#841B2D',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6a1624'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#841B2D'}
              >
                Subscribe
              </button>
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Media;