import React from 'react';
import styles from '../LoginForm.module.css';
const ImageDisplay = ({ imageUrls }) => {
const ouvrimage = () => {
  //change dans l'url cards_cropped par cards
  imageUrls = imageUrls.replace("cards_cropped", "cards"); 
    window.open(imageUrls);
}


  return (
    <div>

        <img onClick={ouvrimage} className={styles.imag} src={imageUrls} alt={`Image ${imageUrls}` }  />

    </div>
  );
};

export default ImageDisplay;
