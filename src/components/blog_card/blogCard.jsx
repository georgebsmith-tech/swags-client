import React from "react";
import { Typography } from "@mui/material";
import styles from "./blogCard.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const BlogCard = ({ image, author, date, title }) => {
  return (
    <div className={styles.parent}>
      <div className={styles.imagebox}>
        <img src={image || "/images/Gallery.png"} alt="blog post" width="80%" />
      </div>
      <div className={styles.info}>
        <Typography
          fontFamily="Poppins"
          //   mt="23px"
          fontWeight="normal"
          variant="subtitle2"
          sx={{ display: "flex", columnGap: "6.6px", fontSize: "15px" }}
        >
          <CalendarMonthIcon />
          {date || "10 FEB,2018"}
        </Typography>
        <Typography
          fontFamily="Poppins"
          //   mt="15px"
          fontWeight="normal"
          variant="subtitle2"
          sx={{ display: "flex", columnGap: "6.6px", fontSize: "15px" }}
        >
          <PermIdentityIcon />
          {author || "Writer"}
        </Typography>
      </div>
      <div className={styles.title}>
        <Typography
          fontFamily="Poppins"
          //   mt="15px"
          fontWeight="bold"
          variant="subtitle"
          sx={{ fontSize: "25px", lineHeight: "30px" }}
        >
          {title || "Palatial, palatable Portugal: a long weekend in Porto"}
        </Typography>
        <Typography
          fontFamily="Poppins"
          mt="18px"
          fontWeight="normal"
          variant="subtitle"
          sx={{ display: "flex", columnGap: "23px", color: "#3ABF5B" }}
        >
          Read More
        </Typography>
      </div>
    </div>
  );
};

export default BlogCard;
