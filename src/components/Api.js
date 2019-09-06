import React from "react";
import axios from "axios";
import Images from './Images'
const Api = () => {
    let imageArray = []
  const Search = async () => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: "cars" },
      headers: {
        Authorization:
          "Client-ID bf212ee9f25f55cf50152fab5d4ff2019342d0e1623f3c03b11806753d2dc599"
      }
    });
    console.log(response.data.results)
    imageArray = response.data.results;
  };
  return (
    <div>
      <button onClick={Search}>Click here</button>
      {imageArray.map(image=>{
          return (
              <p>{image.id}</p> 
          )
      })}
      <Images imageArray= {imageArray}/>
    </div>
  );
};
export default Api;
