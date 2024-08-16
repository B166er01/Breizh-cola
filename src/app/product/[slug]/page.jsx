import React from "react";

const page = ({ params }) => {
  console.log(params.slug);
  return <div className="pt-36">product</div>;
};

export default page;
