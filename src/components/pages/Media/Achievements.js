import React, { useState } from 'react';
import { FaFilePdf, FaDownload, FaTimes, FaUser } from 'react-icons/fa';
import PageBanner from '../../layout/PageBanner';

const Achievements = () => {
  // State to control PDF viewer modal
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [currentPdf, setCurrentPdf] = useState('');

  // UPSC achievement data
  const upscAchievements = [
    { id: 1, name: "Aarav Sharma", year: "2024", pdfLink: "/assets/pdfs/upsc-selection-2024.pdf" },
    // You can add more UPSC achievements here as they come in
  ];
  
  // UPSC toppers data with rank and school information
  const upscToppers = [
    { id: 1, name: "Vibhor Saraswat", rank: "19", school: "SSVMIC, Shikarpur, Bulandshahr", region: "Meerut" },
    { id: 2, name: "Saket Singh", rank: "65", school: "Jwala Devi Saraswati Vidya Mandir, Civil Lines, Prayagraj", region: "Kashi" },
    { id: 3, name: "Ashutosh Mishra", rank: "198", school: "Saraswati Shishu Mandir, Chattarpur", region: "Mahakoshal" },
    
  ];

  // Function to handle PDF view
  const handleViewPdf = (pdfLink) => {
    setCurrentPdf(pdfLink);
    setShowPdfViewer(true);
  };

  // Function to handle PDF download
  const handleDownloadPdf = (pdfLink) => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = pdfLink;
    link.download = pdfLink.split('/').pop(); // Extract filename from path
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

  // PDF Viewer Modal
  const PdfViewer = () => {
    if (!showPdfViewer) return null;

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        <div style={{
          width: '80%',
          height: '80%',
          backgroundColor: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 1001,
            backgroundColor: '#841B2D',
            color: 'white',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }} onClick={() => setShowPdfViewer(false)}>
            <FaTimes />
          </div>
          <iframe 
            src={currentPdf} 
            style={{ width: '100%', height: '100%', border: 'none' }}
            title="PDF Viewer"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <PageBanner 
        title="UPSC Achievements" 
        subtitle="Celebrating Civil Services Excellence"
        titleStyle={{ color: 'white' }} 
        subtitleStyle={{ color: 'white' }}
      />
      
      <Container style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        {/* Introduction Section */}
        <Box sx={{ textAlign: 'center', marginBottom: '64px' }}>
          <Typography variant="h4" style={{ color: '#841B2D', marginBottom: '32px' }}>
            UPSC Achievements
          </Typography>
          <Typography variant="body1" paragraph style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
            At Vidya Bharati, we take immense pride in our students who have successfully cleared one of the most prestigious and challenging examinations in India - the Union Public Service Commission (UPSC) Civil Services Examination.
          </Typography>
          <Typography variant="body1" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Our comprehensive approach to education, dedicated mentoring, and rigorous preparation has enabled our students to achieve remarkable success in the Civil Services Examination. We celebrate their dedication, perseverance, and accomplishment.
          </Typography>
        </Box>

        {/* UPSC Achievements Section */}
       
<Box sx={{ marginBottom: '64px', backgroundColor: '#f0e9ea', padding: '40px 20px', borderRadius: '8px' }}>
  <Typography variant="h5" style={{ color: '#841B2D', marginBottom: '32px', textAlign: 'center' }}>
    Our UPSC Selections
  </Typography>
  <Typography variant="body1" paragraph style={{ textAlign: 'center', marginBottom: '48px' }}>
    Our students have consistently performed exceptionally well in the UPSC examinations.
    Below is the list of students who have been selected in the Civil Services Examination.
  </Typography>


          {/* PDF List */}
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            overflow: 'hidden',
          }}>
            {upscAchievements.map((achievement, index) => (
              <div 
                key={achievement.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 24px',
                  borderBottom: index < upscAchievements.length - 1 ? '1px solid #e0e0e0' : 'none',
                }}
              >
                <div>
                  <Typography variant="body1" style={{ fontWeight: '500' }}>
                    UPSC Selected Students {achievement.year}
                  </Typography>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button 
                    onClick={() => handleViewPdf(achievement.pdfLink)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '8px 16px',
                      backgroundColor: '#841B2D',
                      color: 'white',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      transition: 'background-color 0.3s ease',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6a1624'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#841B2D'}
                  >
                    <FaFilePdf style={{ marginRight: '8px' }} />
                    View
                  </button>
                  <button 
                    onClick={() => handleDownloadPdf(achievement.pdfLink)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '8px 16px',
                      backgroundColor: '#f0e9ea',
                      color: '#841B2D',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      transition: 'background-color 0.3s ease',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e6d7d9'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f0e9ea'}
                  >
                    <FaDownload style={{ marginRight: '8px' }} />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Box>

        {/* UPSC Preparation Section */}
        <Box sx={{ marginBottom: '64px' }}>
          <Typography variant="h5" style={{ color: '#841B2D', marginBottom: '32px', textAlign: 'center' }}>
            Our UPSC Preparation Approach
          </Typography>
          <Typography variant="body1" paragraph style={{ textAlign: 'center', marginBottom: '24px' }}>
            At Vidya Bharati, we provide comprehensive support to aspirants preparing for Civil Services:
          </Typography>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            maxWidth: '1000px',
            margin: '0 auto 48px',
          }}>
            {/* Feature 1 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}>
              <Typography variant="h6" style={{ color: '#841B2D', marginBottom: '16px' }}>
                Expert Guidance
              </Typography>
              <Typography variant="body1">
                Mentoring by experienced faculty and successful civil servants who provide insights into the examination pattern and preparation strategies.
              </Typography>
            </div>
            
            {/* Feature 2 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}>
              <Typography variant="h6" style={{ color: '#841B2D', marginBottom: '16px' }}>
                Comprehensive Study Material
              </Typography>
              <Typography variant="body1">
                Access to well-researched and updated study materials covering all aspects of the UPSC curriculum.
              </Typography>
            </div>
            
            {/* Feature 3 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}>
              <Typography variant="h6" style={{ color: '#841B2D', marginBottom: '16px' }}>
                Regular Mock Tests
              </Typography>
              <Typography variant="body1">
                Simulated examination environment with comprehensive analysis and feedback to improve performance.
              </Typography>
            </div>
          </div>
        </Box>

        {/* UPSC Toppers Section */}
        <Box sx={{ marginBottom: '64px' }}>
          <Typography variant="h5" style={{ color: '#841B2D', marginBottom: '32px', textAlign: 'center' }}>
            Our UPSC Toppers
          </Typography>
          <Typography variant="body1" paragraph style={{ textAlign: 'center', marginBottom: '48px' }}>
            We take immense pride in our students who have achieved remarkable ranks in the UPSC examination.
          </Typography>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            maxWidth: '1000px',
            margin: '0 auto 48px',
          }}>
            {upscToppers.map((topper) => (
              <div 
                key={topper.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginBottom: '32px'
                }}
              >
                <div style={{ 
                  backgroundColor: 'rgba(132, 27, 45, 0.1)', 
                  borderRadius: '50%', 
                  padding: '16px', 
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px'
                }}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 448 512" 
                    style={{ width: '40px', height: '40px', fill: '#841B2D' }}
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                  </svg>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Typography variant="h6" style={{ color: '#841B2D', fontWeight: '600', marginBottom: '4px' }}>
                    {topper.name}
                  </Typography>
                  <Typography variant="body1" style={{ fontWeight: '500', marginBottom: '4px' }}>
                    Rank: {topper.rank}
                  </Typography>
                  <Typography variant="body2" style={{ color: '#666', fontSize: '0.9rem' }}>
                    {topper.school}
                  </Typography>
                  <Typography variant="body2" style={{ color: '#666', fontSize: '0.85rem' }}>
                    {topper.region}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </Box>

        {/* Quote Section */}
        <div style={{ 
          textAlign: 'center',
          backgroundColor: '#f0e9ea',
          padding: '64px 0',
          margin: '64px 0 0',
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw'
        }}>
          <Container>
            <Typography variant="h5" style={{ fontStyle: 'italic', marginBottom: '16px' }}>
              "Success in UPSC is not just about knowledge, but about perspective, patience, and perseverance."
            </Typography>
            <Typography variant="body1" style={{ fontWeight: '500' }}>
              At Vidya Bharati, we nurture these qualities for Civil Services success.
            </Typography>
          </Container>
        </div>
      </Container>

      {/* PDF Viewer Modal */}
      <PdfViewer />
    </>
  );
};

export default Achievements;