import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SavedStoryCard({ story, handleDelete }) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={story.imageUrl}
        alt="news story image"
      />
      <CardActions>
        <a href={story.url}><Button size="small">{story.source}</Button></a>
        <Button size="small" onClick={() => handleDelete(story._id)}>Unsave -</Button>
      </CardActions>
      <CardContent>
        <Typography align="left" gutterBottom variant="h5" component="div">
          <a href={story.url}>{story.title}</a>
        </Typography>
      </CardContent>
    </Card>
  );
}