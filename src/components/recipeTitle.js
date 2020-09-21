import React from "react";
import "./recipeTitle.scss";

const RecipeTitle = (props) => {
 
  const {featuredImgUrl, featuredImgAlt, title} = props;
  let recipeTitle;
  if (featuredImgUrl) {
    recipeTitle = (
      <div className="feature-image-container">
        <div className="feature-image-title">{title}</div>
        <img
          className="feature-image"
          src={featuredImgUrl}
          alt={featuredImgAlt}
        ></img>
      </div>
    );
  }
  else {
    recipeTitle = (
    <h1>
      {title}
    </h1>
    )
  }
  return recipeTitle;
}


export default RecipeTitle;