import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, Card, CardContent,Button } from '@mui/material';
import deepImage from './img/deep-removebg-preview.png'; // Import the image from the local folder
import './HomePage.css'; // Ensure the CSS is linked correctly

const HomePage = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Track the current word's index
  const [letterIndex, setLetterIndex] = useState(0); // Track the current letter's index
  const [isWordComplete, setIsWordComplete] = useState(false); // Track when the word is completely displayed

  const textArray = [
    'Software Engineer',
    'Programmer',
    'Automation Tester',
    'Freelancer',
    'IT Service Provider',
  ];

  useEffect(() => {
    // Set the interval for letter-by-letter animation
    const textTimer = setInterval(() => {
      // If the current word is not complete, continue showing the next letter
      if (!isWordComplete) {
        if (letterIndex < textArray[currentTextIndex].length) {
          setLetterIndex((prev) => prev + 1);
        } else {
          // If the word is complete, mark it as complete and wait for a short delay
          setIsWordComplete(true);
        }
      }
    }, 150); // Speed of letter-by-letter animation (adjust for speed)

    // Transition to the next word after a short delay
    if (isWordComplete) {
      const transitionTimer = setTimeout(() => {
        if (currentTextIndex < textArray.length - 1) {
          setCurrentTextIndex((prev) => prev + 1); // Move to the next word
        } else {
          setCurrentTextIndex(0); // Reset to the first word to loop the animation
        }
        setLetterIndex(0); // Reset letter index for the next word
        setIsWordComplete(false); // Reset word completion state
      }, 1000); // Delay before starting the next word

      return () => clearTimeout(transitionTimer); // Cleanup when moving to the next word
    }

    return () => clearInterval(textTimer); // Cleanup on component unmount
  }, [currentTextIndex, letterIndex, isWordComplete, textArray]);

  const currentText = textArray[currentTextIndex];
  const displayedText = currentText.slice(0, letterIndex);

  return (
    <div className="home-page">
      {/* Starry Background */}
      <div className="starry-background"></div>

      <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ height: '100vh' }}>
        {/* Left side - Introduction text */}
        <Grid item xs={12} md={6} textAlign="center">
          <Typography variant="h3" color="white" sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Hi, I'm <span style={{ fontWeight: 'bold', textShadow: '3px 3px 5px rgba(0, 0, 0, 0.7)' }}>Deep</span>,
          </Typography>
          <Typography variant="h5" color="white" paragraph sx={{ fontWeight: 'bold' }}>
            And I am a{' '}
            <Typography variant="h6" color="primary" component="span" sx={{ fontWeight: 'bold' }}>
              {displayedText}
            </Typography>
          </Typography>
        </Grid>
    
        <Grid item xs={6} md={6} textAlign="center">
          <Box className="profile-card-container">
            <Card className="profile-card" sx={{ backgroundColor: '#5956E9' }}>
              <CardContent>
                {/* Image Container */}
                <div className="profile-image-container">
                  <img
                    alt="Deep's Profile"
                    src={deepImage}  // Use the imported image
                  />
                </div>
                <Typography variant="h6" color="white" fontWeight="bold" mt={2}>
                  Software Engineer @Nucleus Software
                </Typography>
                <Typography variant="body2" color="white" sx={{ fontSize: '14px', marginTop: 1 }}>
                  "I love to learn about new technologies, solve challenging problems, and create meaningful solutions"
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;