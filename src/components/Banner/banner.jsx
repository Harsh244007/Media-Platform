import { Card, CardMedia } from "@mui/material";
import React from "react";
import Carousel from 'react-material-ui-carousel'
import styles from "./banner.module.css";
import vid1s from "./videos/vid1s.mp4";
import Vid2 from "./videos/vid1s.mp4";
import Vid3 from "./videos/vid1s.mp4";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';

const Banner = () => {
  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: vid1s,
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 2,
      title: "Video 2",
      src: Vid2,
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 3,
      title: "Video 3",
      src: Vid3,
      credit: "Video by cottonbro from Pexels",
    },
  ];
  return (
    <Carousel className={styles.carousel} navButtonsAlwaysVisible="true" animation="slide" duration="5000" NextIcon={<NavigateNextOutlinedIcon/>} PrevIcon={<NavigateBeforeOutlinedIcon/>}>
      {videoProperties.map((videoObj) => {
        return (
          <Card raised={true} className={styles.CarousalItem} style={{ margin: "auto", maxHeight: 380, minWidth: 300, width: "100%",gap:10 }}>
            {/* <Carousel.Item key={videoObj.id} className={styles.CarousalItem}> */}
              <CardMedia autoplay component="video" sx={{ display: "flex", padding: "20", minHeight: 200,maxHeight:300,objectFit:"cover" }} image={videoObj.src} alt="Home Banner" />
            {/* </Carousel.Item> */}
          </Card>
        );
      })}
    </Carousel>
  );
};

export default Banner;
