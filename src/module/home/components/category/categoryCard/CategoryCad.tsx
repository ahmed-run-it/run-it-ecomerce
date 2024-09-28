import React from "react";

interface CategoryCardeProps {
  background:string;
  img:string;
  title:string;
}

export const CategoryCarde:React.FC<CategoryCardeProps>=({background,img,title})=>{

  return <div className="allCard">
  <div
      className="categoty-card "
      style={{ backgroundColor: `${background}` }}>
        </div>{" "}
  <img alt="zcv" src={img} className="categoty-card-img" />
  <p className="categoty-card-text my-2">{title}</p>
</div>
}