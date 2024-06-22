import { useState } from "react";
import shoes1 from './img/shoes1.jpg'
import shoes2 from './img/shoes2.jpg'
import shoes3 from './img/shoes3.jpg'

let data = [
    {
      id : 0,
      img : shoes1,
      title : "White and Black",
      content : "Born in France",
      price : 120000
    },
  
    {
      id : 1,
      img : shoes2,
      title : "Red Knit",
      content : "Born in Seoul",
      price : 110000
    },
  
    {
      id : 2,
      img : shoes3,
      title : "Grey Yordan",
      content : "Born in the States",
      price : 130000
    }
  ] 

export default data;