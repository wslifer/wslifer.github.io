import React from "react";
import { Grid, Paper, Button, Typography } from "@material-ui/core";
import Card from "../components/Card";
import { makeStyles } from "@material-ui/core/styles";
import quarantinis from "../assets/images/Quarantinis.PNG";
import projectYou from "../assets/images/ProjectYou.png";
import itTakesAVillage from "../assets/images/ItTakesAVillage.png";
import teamProGen from "../assets/images/TeamProfileGenerator.png";
import emplTracker from "../assets/images/EmployeeTracker.png";
import codingQuiz from "../assets/images/CodingQuiz.png";

const useStyles = makeStyles({
  paper: {
    textAlign: "center",
    "& .MuiPaper-rounded": {
      borderRadius: 0,
    },
  },
  title: {
    textAlign: "center",
    margingBottom: 50,
  },
});

export default function Portfolio() {
  const style = useStyles();

  return (
    <Grid style={{ background: "#f5f5f5" }}>
      <Typography variant="h4" className={style.title}>
        Projects
      </Typography>

      <div className={style.grid}>
        <Grid container spacing={3}>
          <Grid item md={4} sm={6} xs={12}>
            <Paper className={style.paper}>
              <Card
                image={quarantinis}
                title="Bites and Quarantinis"
                alt="Project Picture"
                desc="Group project made with APIs, javascript, and html."
                repo="https://github.com/wslifer/Project_1"
                link="https://wslifer.github.io/Project_1/"
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={style.paper}>
              <Card
                image={projectYou}
                title="Project You"
                alt="Project Picture"
                desc="Group project made with Node.js, Express.js, MySql, Sequelize, and heroku."
                repo="https://github.com/wslifer/projectYOU"
                link="https://projectyou.herokuapp.com/"
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={style.paper}>
              <Card
                image={itTakesAVillage}
                title="It Take a Village"
                alt="Project Picture"
                desc="Full stack application, utilizing Node.js, Express.js, mongodb, and heroku."
                repo="https://github.com/wslifer/it-takes-a-village"
                link="https://stormy-thicket-60781.herokuapp.com/"
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={style.paper}>
              <Card
                image={codingQuiz}
                title="Coding Quiz"
                alt="Project Picture"
                desc="Fun quiz about coding, with high scores!"
                repo="https://github.com/wslifer/coding-quiz"
                link="https://wslifer.github.io/coding-quiz/"
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={style.paper}>
              <Card
                image={teamProGen}
                title="Team Profile Generator"
                alt="Project Picture"
                desc="Application using javascript to produce an html page of the team you created."
                repo="https://github.com/wslifer/team-profile-generator"
                link="https://drive.google.com/file/d/18gA6ISAoiyxPe_O-hkoqC53sdPB-qQf5/view"
                locked={false}
              />
            </Paper>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Paper className={style.paper}>
              <Card
                image={emplTracker}
                title="Employee Tracker"
                alt="Project Picture"
                desc="Application using javascript to keep track of all of your employees and who they report to."
                repo="https://github.com/wslifer/employee_tracker"
                link="https://drive.google.com/file/d/1--8FGoylf_rpfDjaK5I4hU7l5jIr2Bo3/view"
                locked={false}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
