import React, { useState } from 'react';
import styles from '../LoginForm.module.css';
import db from '../../firebase';
import {
   getDocs,where,query, collection 
} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom/dist';

const Connexion = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuez ici votre logique de connexion, par exemple, en envoyant les données au backend
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Réinitialiser les champs du formulaire
    setEmail('');
    setPassword('');
  };
  const handleInscriptionClick = () => {
    navigate('/inscription');
  };
  const login = async () => {
    //fait une requête firestore pour voir si l'email et le mot de passe sont dans la base de données
    const noteRef = collection(db, "User");

    const q = query(noteRef, where("Email", "==", email), where( "Password", "==", password));
    const querySnapshot = await getDocs(q);


    
    
    if (querySnapshot.size > 0 ) {
        console.log("connexion réussie");
        console.log(querySnapshot.docs[0].id);
        const userId = querySnapshot.docs[0].id;
        localStorage.setItem('userId', userId);
        navigate('/card')

      }
      else{
        console.log("mot de passe ou email incorrect");
      }
 }
    



  return (
    
    <form onSubmit={handleSubmit} className={styles.email}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" onClick={login}>Connexion</button>
      <button onClick={handleInscriptionClick}>inscription</button>

    </form>
  );
};

export default Connexion;
