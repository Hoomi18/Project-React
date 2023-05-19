import React, { useState } from 'react';
import styles from '../LoginForm.module.css';
import db from '../../firebase';
import {
  collection,addDoc
} from 'firebase/firestore';

const Inscription = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pseudo, setPseudo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuez ici votre logique de connexion, par exemple, en envoyant les données au backend
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Pseudo:', pseudo);
    
    // Réinitialiser les champs du formulaire
    setEmail('');
    setPassword('');
  };

  const addUser = async () => {
    await addDoc(collection(db, "User"), {
        Email: email,
        Password: password,
        Name: pseudo
      });
   
 }
    



  return (
    
    <form onSubmit={handleSubmit} className={styles.email}>
      <div>
        <label htmlFor="pseudo">Pseudo:</label>
        <input
          type="string"
          id="pseudo"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          required
        />
      </div>
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
      
      <button type="submit" onClick={addUser}>Connexion</button>
    </form>
  );
};

export default Inscription;
