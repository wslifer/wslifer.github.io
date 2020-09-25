import React, { useState } from "react";
import { makeStyles, IconButton, Link, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LockIcon from "@material-ui/icons/Lock";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  paper: (props) => ({
    height: "200px",
    position: "relative",
    "&:hover": {
      cursor: props.locked ? "not=allowed" : "pointer",
    },
    "& .MuiTypography-root": {
      color: "white",
    },
    "& .MuiPaper-rounded": {
      borderRadius: 0,
    },
  }),
  media: {
    maxHeight: "100%",
    maxWidth: "100%",
    objectFit: "cover",
  },
  content: {
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#000",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    transition: "all 300ms ease-out",
    "&:hover": {
      opacity: 0.85,
    },
  },
  title: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: 600,
  },
  description: {
    lineHeight: 1.8,
    color: "#fff",
  },
  icons: (props) => ({
    color: "#fff",
    "&:hover": {
      cursor: props.locked ? "not-allowed" : "pointer",
      color: "#bdbdbd",
    },
  }),
});

export default function Card(props) {
  const style = useStyles(props);
  const [hover, setHover] = useState(false);

  return (
    <div
      className={style.paper}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      elevation={2}
      style={{
        backgroundImage: `url(${props.image}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Link
        href={props.link}
        color="inherit"
        underline="none"
        target="_blank"
        rel="noopener"
        className={style.content}
        align="center"
      >
        <motion.div
          animate={hover ? { y: 0 } : { y: 8 }}
          transition={{ duration: 0.2 }}
          className={style.info}
        >
          <Typography gutterBottom variant="h6" className={style.title}>
            {props.title}
          </Typography>
          <Typography variant="body1">{props.desc}</Typography>
          <Typography
            variant="body1"
            component="p"
            className={style.description}
          >
            {props.text}
          </Typography>
          <Link href={props.repo} target="_blank" rel="noopener">
            <IconButton>
              {props.locked ? (
                <LockIcon
                  className={style.icons}
                  style={{ color: "white" }}
                  fontSize="large"
                  aria-label="github"
                />
              ) : (
                <GitHubIcon
                  className={style.icons}
                  fontSize="medium"
                  aria-label="github"
                />
              )}
            </IconButton>
          </Link>
        </motion.div>
      </Link>
    </div>
  );
}
