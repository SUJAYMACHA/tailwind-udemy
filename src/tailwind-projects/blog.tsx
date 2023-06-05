import React from "react";
import { Blogheader } from "./blog-components/Blogheader";
import { Blogfirstcontent } from "./blog-components/Blogfirstcontent";
import { Blogsecondcontent } from "./blog-components/Blogsecondcontent";


const Blog = () => {
  const buttons = ['sujay','adarsh']
  return (
    <div>
    <Blogheader/>
      
      <Blogfirstcontent />
      <Blogsecondcontent />
    </div>
  );
};


export default Blog;
