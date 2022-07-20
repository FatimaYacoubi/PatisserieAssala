import React from 'react'
import "./VideoCarousel.css";
import {Carousel} from 'react-bootstrap';
import videoCarousel from "../Carousel.mp4";
import ReactPlayer from 'react-player';
 const VideoCarousel = ()=> {
  const videoProperties = [
   { id: 1,
    title:" Video 1",
    src: videoCarousel, },
    
  ];
    return (
    <Carousel>
{videoProperties.map((videoObj)=> {
    return(
        <Carousel.Item key={videoObj.id}>
            <ReactPlayer 
            url= { videoObj.src}
            width="50%"
            pip={true}
            controls={true}
            playing={true}
            />
<Carousel.Caption>
    <h3>{videoObj.title}</h3>
</Carousel.Caption>
           
             </Carousel.Item>
    )
})}
    </Carousel>
  )
}

export default VideoCarousel;