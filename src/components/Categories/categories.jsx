import React from "react";
import Color from "color";
// import { makeStyles } from "@mui/styles";
import { CardActionArea, Grid, Card, CardContent, CardMedia } from "@mui/material";

// const useGridStyles = makeStyles(({ breakpoints }) => ({
//   root: {
//     [breakpoints.up("md")]: {
//       justifyContent: "center",
//     },
//   },
// }));

// const useStyles = makeStyles(() => ({
//   actionArea: {
//     borderRadius: 16,
//     transition: "0.2s",
//     "&:hover": {
//       transform: "scale(1.1)",
//     },
//   },
//   card: ({ color }) => ({
//     minWidth: 256,
//     borderRadius: 16,
//     boxShadow: "none",
//     "&:hover": {
//       boxShadow: `0 6px 12px 0 ${Color(color).rotate(-12).darken(0.2).fade(0.5)}`,
//     },
//   }),
//   content: ({ color }) => {
//     return {
//       backgroundColor: color,
//       padding: "1rem 1.5rem 1.5rem",
//     };
//   },
//   title: {
//     fontFamily: "Keania One",
//     fontSize: "2rem",
//     color: "#fff",
//     textTransform: "uppercase",
//   },
//   subtitle: {
//     fontFamily: "Montserrat",
//     color: "#fff",
//     opacity: 0.87,
//     marginTop: "2rem",
//     fontWeight: 500,
//     fontSize: 14,
//   },
// }));

const CustomCard = ({ classes, image, title, subtitle }) => {
  // const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={"h2"}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const Categories = React.memo(function SolidGameCard() {
  // const gridStyles = useGridStyles();
  // const styles = useStyles({ color: "#203f52" });
  // const styles2 = useStyles({ color: "#4d137f" });
  // const styles3 = useStyles({ color: "#ff9900" });
  // const styles4 = useStyles({ color: "#34241e" });
  return (
    <>
      <Grid  container spacing={4} wrap={"nowrap"}>
        <Grid item>
          <CustomCard  title={"Inhouse Party"} subtitle={"Be a Legend!"} image={"https://picsum.photos/200/300"} />
        </Grid>
        <Grid item>
          <CustomCard title={"DJ"} subtitle={"Time to choose side!"} image={"https://picsum.photos/200/300"} />
        </Grid>
        <Grid item>
          <CustomCard  title={"Weeding party"} subtitle={"What are you waiting?"} image={"https://picsum.photos/200/300"} />
        </Grid>
        <Grid item>
          <CustomCard  title={"Pre Wedding"} subtitle={"Are you ready?"} image={"https://picsum.photos/200/300"} />
        </Grid>
      </Grid>
    </>
  );
});
export default Categories;
