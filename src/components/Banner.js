import React from 'react';
import profilepictureImg from "../images/profile-picture.jpg";

function Banner(props) {
    return (
        <>
            <div class="banner">
        <div class="quote">
          <blockquote cite="http://www.worldwildlife.org/who/index.html">
            Favorite Quotes
            <br />
            "If you don't like your destiny, don't accept it. <br />
            Instead have the courage to change it the way want it to be."
            <br />
            "Failing doesn't give you a reason to give up, as long as you
            believe." <br />
            -Naruto Uzumaki
            <br />
          </blockquote>
        </div>
      </div>
      <figure>
      <img src={profilepictureImg} 
          alt="photo of Hannah"
          width="300px"
          height="300px"
        />
      </figure>
        </>
    );
}

export default Banner;