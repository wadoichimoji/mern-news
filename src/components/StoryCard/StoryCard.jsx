import * as React from 'react';
import './StoryCard.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { useEffect, useState } from 'react';


export default function StoryCard({ story }) {

  const [savedStory, setSavedStory] = useState(false)

  function handleSave() {
    const token = localStorage.getItem("token")
    const headers = {}
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    axios.post("/api/news/saveStory", story, {headers: headers})
  }

  useEffect(() => {
    let token = localStorage.getItem("token")
    const headers = {}
    console.log(token)
    async function fetchStory() {
      if (token) {
        headers.Authorization = `Bearer ${token}`;
        let res = await axios.get(`/api/news/${story.url}`, {headers: headers})
        if (res.data) {
        setSavedStory(true)
      }
    }
   }
   fetchStory()
   console.log(savedStory)
  },[])

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={savedStory ? story.urlToImage : story.imageUrl}
        alt="green iguana"
      />
      <CardActions>
        {/* <a href={story.url}><Button size="small">{savedStory ? story.source : story.source.name}</Button></a> */}
        <Button size="small" onClick={ handleSave }>{ savedStory ? "Save +" : "Unsave -" }</Button>
      </CardActions>
      <CardContent>
        <Typography align="left" gutterBottom variant="h5" component="div">
          <a href={story.url}>{story.title}</a>
        </Typography>
      </CardContent>
    </Card>
  );
}