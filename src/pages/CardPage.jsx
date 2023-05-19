import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom/dist';

const CardPage = () => {
  const [cardData, setCardData] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    async function fetchCardData() {
      const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?id=6983839');
      const data = await response.json();
      setCardData(data.data[0]);
    }
    fetchCardData();
  }, []);
  //fonction qui fait que quand je clique sur le bouton connexion, je suis redirigé vers la page connexion
  const handleConnexionClick = () => {
    navigate('/connexion');
  };
  const handleInscriptionClick = () => {
    navigate('/inscription');
  };

  return (
    <div>
      <h1>{cardData.name}</h1>
      <p>Type: {cardData.type}</p>
      <p>Frame Type: {cardData.frameType}</p>
      <p>Desc: {cardData.desc}</p>
      <p>ATK: {cardData.atk}</p>
      <p>DEF: {cardData.def}</p>
      <p>Level: {cardData.level}</p>
      <p>Race: {cardData.race}</p>
      <p>Attribute: {cardData.attribute}</p>
      <h2>Card Sets:</h2>
      <ul>
        {cardData.card_sets && cardData.card_sets.map((set, index) => (
          <li key={index}>
            <p>Set Name: {set.set_name}</p>
            <p>Set Code: {set.set_code}</p>
            <p>Set Rarity: {set.set_rarity}</p>
            <p>Set Price: {set.set_price}</p>
          </li>
        ))}
      </ul>
      <h2>Card Images:</h2>
      <img src={cardData.card_images && cardData.card_images[0].image_url} alt={cardData.name} />
      <button onClick={handleConnexionClick}>connexion</button>
      <button onClick={handleInscriptionClick}>inscription</button>


    </div>
  );
}

export default CardPage;
