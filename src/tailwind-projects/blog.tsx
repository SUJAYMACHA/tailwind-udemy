import React from "react";
import { Blogheader } from "./blog-components/Blogheader";
import { Blogfirstcontent } from "./blog-components/Blogfirstcontent";
import { Blogsecondcontent } from "./blog-components/Blogsecondcontent";

const blog = () => {
  return (
    <div>
      <Blogheader></Blogheader>
      <Blogfirstcontent></Blogfirstcontent>
      <Blogsecondcontent></Blogsecondcontent>
    </div>
  );
};

export default blog;
