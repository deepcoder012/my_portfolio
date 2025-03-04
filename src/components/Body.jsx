import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import './Body.css'; // Ensure the CSS is linked correctly

const Body = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  // Dummy content for each section
  const sections = [
    {
      id: 'programmer',
      title: 'Programmer',
      content: (
        <div>
          <Typography variant="h6" color="primary">
            Programming Expertise
          </Typography>
          <Typography variant="body1">
            I specialize in building scalable and efficient software solutions using languages like Python, JavaScript, and Java. My focus is on writing clean, maintainable code and solving complex problems.
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            <strong>Skills:</strong> Python, Java, C++, Algorithms, Data Structures
          </Typography>
        </div>
      ),
    },
    {
      id: 'web-developer',
      title: 'Web Developer',
      content: (
        <div>
          <Typography variant="h6" color="primary">
            Web Development Projects
          </Typography>
          <Typography variant="body1">
            I create responsive and user-friendly websites using modern technologies like React, Node.js, and MongoDB. I focus on delivering seamless user experiences and optimized performance.
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            <strong>Skills:</strong> React, Node.js, HTML, CSS, JavaScript
          </Typography>
        </div>
      ),
    },
    {
      id: 'software-tester',
      title: 'Software Tester',
      content: (
        <div>
          <Typography variant="h6" color="primary">
            Quality Assurance
          </Typography>
          <Typography variant="body1">
            I ensure the quality and reliability of software applications through rigorous testing. I specialize in automated testing, manual testing, and bug tracking.
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            <strong>Skills:</strong> Selenium, JUnit, TestNG, Bug Tracking
          </Typography>
        </div>
      ),
    },
    {
      id: 'freelancer',
      title: 'Freelancer',
      content: (
        <div>
          <Typography variant="h6" color="primary">
            Freelance Services
          </Typography>
          <Typography variant="body1">
            I offer freelance services in software development, web design, and content creation. I work closely with clients to deliver tailored solutions that meet their needs.
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            <strong>Skills:</strong> Project Management, Client Communication, Agile Development
          </Typography>
        </div>
      ),
    },
  ];

  const handleSectionClick = (id) => {
    setSelectedSection(id);
  };

  return (
    <div className="body-container">
      {/* Section Titles */}
      <Grid container spacing={2} justifyContent="center" sx={{ padding: 4 }}>
        {sections.map((section) => (
          <Grid item xs={12} sm={6} md={3} key={section.id} textAlign="center">
            <Box
              className="section-title"
              onClick={() => handleSectionClick(section.id)}
              sx={{
                cursor: 'pointer',
                padding: 2,
                backgroundColor: selectedSection === section.id ? '#5956E9' : '#f0f0f0',
                color: selectedSection === section.id ? 'white' : 'black',
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#5956E9',
                  color: 'white',
                },
              }}
            >
              <Typography variant="h6">{section.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Display Selected Content */}
      {selectedSection && (
        <Box sx={{ padding: 4, textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
          {sections.find((section) => section.id === selectedSection).content}
        </Box>
      )}
    </div>
  );
};

export default Body;