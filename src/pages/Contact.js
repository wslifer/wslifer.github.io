import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Button, Chip } from "@material-ui/core/";

const useStyles = makeStyles({
  contact: {
    color: "white",
    fontSize: 28,
    background: "#615e57",
    borderRadius: 3,
    height: 450,
    width: 750,
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    background: "#0276aa",
    color: "white",
    width: 300,
    height: 75,
    display: "flex",
    marginBottom: 20,
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: 20,
  },
  chip: {
    color: "white",
    background: "#0276aa",
    display: "flex",
    justifyContent: "center",
  },
});

export default function Contact() {
  const style = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Card item xs={6} className={style.contact}>
          <CardContent>
            <Button
              className={style.button}
              target="_blank"
              href="https://github.com/wslifer"
            >
              Github
            </Button>
            <Button
              className={style.button}
              target="_blank"
              href="https://www.linkedin.com/in/wesley-slifer"
            >
              LinkedIn
            </Button>
            <Button
              className={style.button}
              target="_blank"
              href="https://docs.google.com/document/d/1xJyHqfyaGYW9o0bk_da3j560ggTP2LP6BtKD9JMovJM/edit?usp=sharing"
            >
              Resume
            </Button>
            <Chip
              className={style.chip}
              size="large"
              label="Email: wesleyslifer32@gmail.com"
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
