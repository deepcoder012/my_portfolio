import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Projects = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="/path/to/project-image.jpg"
        alt="Project Image"
      />
      <CardContent>
        <Typography variant="h5">Cryptocurrency Tracker</Typography>
        <Typography variant="body2">
          A web application to track real-time cryptocurrency prices and market trends.
        </Typography>
      </CardContent>
    </Card>
  );
};