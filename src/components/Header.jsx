import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="sticky" // Make the header sticky
      sx={{
        top: 0, // Ensure the header stays at the top
        backgroundColor:'#5956E9',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        zIndex: 1300, // Ensure the header stays above other content
      }}
    >
      <Toolbar>
        {/* Title with stylish typography */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: 'bold', color: '#fff', letterSpacing: 1.5 }}
        >
          Deep Narayan Maurya
        </Typography>

        {/* Buttons with hover effect */}
        <Button
          sx={{
            color: '#fff', // White text for the button
            textTransform: 'uppercase',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#B22222', // Dark red on hover
              color: '#fff',
            },
            marginLeft: 2, // Use '2' for spacing (2 * 8px = 16px)
          }}
          href="/"
        >
          Home
        </Button>
        <Button
          sx={{
            color: '#fff', // White text for the button
            textTransform: 'uppercase',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#B22222', // Dark red on hover
              color: '#fff',
            },
            marginLeft: 2,
          }}
          href="/contact"
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
