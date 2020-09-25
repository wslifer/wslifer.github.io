import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  picture: {
    height: 350,
    paddingTop: "56.25%",
  },
  about: {
    color: "white",
    fontSize: 28,
    background: "#615e57",
    borderRadius: 3,
  },
  heading: {
    textDecoration: "underline",
    marginBottom: 20,
  },
  textArea: {
    textIndent: 20,
    marginBottom: 10,
  },
});

export default function About() {
  const style = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Card item xs={6}>
          <CardMedia
            className={style.picture}
            image={require("../assets/images/profilepicture.png")}
            title="Profile Picture"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <CardContent item xs={6} className={style.about}>
          <Typography variant="h6">
            Hello, and welcome to my portfolio!{" "}
          </Typography>
          <hr />
          <Typography variant="body1" className={style.textArea}>
            My name is Wesley Eric Slifer and I am a web developer always in
            training. I graduated from the KU Coding Bootcamp Cohort of August
            2020.
          </Typography>
          <Typography variant="body1" className={style.textArea}>
            I am a self-driven, motivated, hard worker who is always excited to
            work as part of a team. Throughout my life thus far I have dipped
            into several fields of work in order to find my fit. After
            contemplating what I wanted to do for the rest of my life, I
            realized that I have always loved computers and anything to do with
            them. I then decided I wanted to live by the saying 'If you love
            what you do, you will never work a day in your life.'
          </Typography>
          <Typography variant="body1" className={style.textArea}>
            When I enrolled in the coding bootcamp I knew very little about
            coding, and everything I knew was self taught. After working hard
            throughout the class I was able to learn what it takes to be a
            full-stack web developer. Another key skill I learned from the
            bootcamp was how to further my education in the world of
            programming. Due to the ever changing world of technology, I feel
            that it is a very important trade to be able to continue learning.
          </Typography>
          <Typography variant="body1" className={style.textArea}>
            As a now full-stack web developer I have experience in using many
            different technologies to create useful web applications. The
            technologies that I have become proficient in at this time include,
            but are not limited to: Front-end: HTML, CSS and Javascript;
            Back-end: MySql and MongoDB; and libraries: ReactJS and MaterialUI.
          </Typography>
          <hr />
          <Typography variant="body1" className={style.textArea}>
            If you are interested in collaboration with a project, have
            questions for me, or are interested in hiring me for a position
            please visit the contact portion of my portfolio and reach out to me
            via any of the listed.
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
}
