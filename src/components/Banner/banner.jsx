import { Card, CardActionArea, CardMedia } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Carousel from "react-material-ui-carousel";
import styles from "./banner.module.css";
import vid1s from "./videos/vid1s.mp4";
import Vid2 from "./videos/vid1s.mp4";
import Vid3 from "./videos/vid1s.mp4";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";

const Banner = () => {
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
        console.log(process.env.KEY)
  }, [vidRef]);

  const onLoadQuery=()=>{
    console.log(process.env.KEY)
  }  
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
    <Carousel className={styles.carousel} navButtonsAlwaysVisible="true" animation="slide" interval="10000" NextIcon={<NavigateNextOutlinedIcon />} PrevIcon={<NavigateBeforeOutlinedIcon />}>
      {videoProperties.map((videoObj) => {
        return (
          <Card raised={true} className={styles.CarousalItem} style={{ margin: "auto", maxHeight: 380, minWidth: 300, width: "100%", gap: 10 }}>
              <video className={styles.videoPlayer} ref={vidRef} src={videoObj.src} muted autoPlay loop />
          </Card>
        );
      })}
    </Carousel>
  );
};

export default Banner;
