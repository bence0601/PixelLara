import React from "react";
import myPicture from './NagyBence.jpg';
import './About.css'; 

function About() {
  return (
    <div className="about-container">
      <div className="about-introduction">
        <h2>Hi, this is me, Ben. CEO and Lead-dev of the PixelLara</h2>
      </div>
      <div className="about-additionalInfo">
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum quam sit amet urna convallis mollis. Morbi pretium sapien vel ligula imperdiet, id iaculis est interdum. Sed auctor ante id rhoncus faucibus. Pellentesque tempor tortor volutpat porttitor tempus. Cras id justo sed lacus viverra sagittis sit amet vitae ligula. Etiam sed justo sed dui efficitur tempus. Integer tincidunt ac felis sed convallis. Vivamus egestas hendrerit felis eu fringilla. Maecenas pharetra faucibus justo, vitae tincidunt neque placerat at. Cras gravida vehicula ligula, 
            quis bibendum arcu pulvinar non. Cras eu fringilla nisl. Pellentesque eu ornare augue, in sodales libero.</h3>
      </div>
      <div className="about-image-container">
        <img src={myPicture} alt="This is a placeholder in case my pic decides not to be rendered somehow" className="about-image" />
      </div>
    </div>
  );
}

export default About;
