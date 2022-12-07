import * as React from 'react';
import './StoryCard.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function StoryCard({story, setCurrentStory}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={story.urlToImage}
        alt="green iguana"
      />
      <CardActions>
        <a href={story.url}><Button size="small">{story.source.name}</Button></a>
        <Button size="small">Save +</Button>
      </CardActions>
      <CardContent>
        <Link to={{pathname:"/stories/detail", state: {test:"test"}}} onClick={()=> setCurrentStory(story)}>
        <Typography align="left" gutterBottom variant="h5" component="div">
          News Story
        </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}