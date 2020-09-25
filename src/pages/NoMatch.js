import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, CardMedia } from "@material-ui/core/";

const useStyles = makeStyles({
  card: {
    height: 750,
    width: 1200,
    background: "#1e211f",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 32,
    textAlign: "center",
    color: "white",
  },
  cardPic: {
    margin: "auto",
    height: 650,
    width: 650,
  },
});

export default function NoMatch() {
  const style = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={style.card}>
        <CardContent>404! Page Not Found!</CardContent>
        <CardMedia
          className={style.cardPic}
          image={require("../assets/images/404.png")}
        />
      </Card>
    </Grid>
  );
}
