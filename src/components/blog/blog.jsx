import React from "react";
import SectionHeader from "../section_header/section_header";
import { Typography } from "@mui/material";
import styles from "./blog.module.css";
import BlogCard from "../blog_card/blogCard";

const Blog = () => {
  return (
    <div className={styles.parent}>
      <SectionHeader title="Latest Blog" />
      <Typography
        fontFamily="Poppins"
        fontWeight="bold"
        variant="h5"
        mb="57.25px"
      >
        Stay up to date <br /> with our blog
      </Typography>
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default Blog;
