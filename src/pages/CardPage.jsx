import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import {
  collection, addDoc
} from 'firebase/firestore';
import db from '../../firebase';


const CardPage = () => {
  const [cardData, setCardData] = useState({});
  const navigate = useNavigate();
  const [boutonDesactive, setBoutonDesactive] = useState(false);

  if (localStorage.getItem('userId') === null) {
    navigate('/');
  }
  useEffect(() => {
    //si le bouton enregistrer est désactivé, le réactive
    

    async function fetchCardData() {
      const response = await fetch('https://db.ygoprodeck.com/api/v7/randomcard.php');
      const data = await response.json();
      setCardData(data);
    }
    fetchCardData();
  }, []);
  //fonction qui fait que quand je clique sur le bouton connexion, je suis redirigé vers la page connexion
  const EnregistrerCarte = async () => {

    const userId = localStorage.getItem('userId');
    setBoutonDesactive(true);
    //ajoute dans la collection RegisterCardUser l'id de l'utilisateur et l'id de la carte
    await addDoc(collection(db, "RegisterCardUser"), {
      idUser: userId,
      iDCard: cardData.id,
    });
    //désactive le bouton enregistrer

    
  };

  const coffre = () => {
    navigate('/coffre');
  };
  const deconnexion = () => {
    const userId = localStorage.getItem('userId');
    if (userId !== null) {
      localStorage.removeItem('userId');
      console.log("vous êtes déconnecté");
      navigate('/');
    }
    else {
      navigate('/');
    }
  };
  const generCarte = async () => {
    setBoutonDesactive(false);
    const response = await fetch('https://db.ygoprodeck.com/api/v7/randomcard.php');
    const data = await response.json();
    console.log(data);
    setCardData(data);

  };

  return (
    <div>
      <h2>Card Images:</h2>
      <img src={cardData.card_images && cardData.card_images[0].image_url} alt={cardData.name} />
      <br />
      <button onClick={generCarte}>Nouvelle carte</button>
      <button onClick={EnregistrerCarte} disabled={boutonDesactive} name='enregistrer'>Garder cette carte</button>
      <button onClick={coffre}>Mon Coffre</button>

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


      <button onClick={deconnexion}>deconnexion</button>


    </div>
  );
}

export default CardPage;
