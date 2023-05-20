import React, { useState, useEffect } from 'react';
import db from '../../firebase';
import { collection, getDocs, where, query } from "firebase/firestore";
import { useNavigate } from 'react-router-dom/dist';
import ImageDisplay from '../components/ImageDisplay';
import styles from '../LoginForm.module.css';


const CoffrePage = () => {
    const navigate = useNavigate();
    const [cardData, setCardData] = useState([]);


    const genereCarte = () => {
        navigate('/card');
    };

    useEffect(() => {
        async function fetchCardData() {
            const noteRef = collection(db, "RegisterCardUser");
            const q = query(noteRef, where("idUser", "==", localStorage.getItem('userId')));
            const querySnapshot = await getDocs(q);
            const idCard = [];
            querySnapshot.forEach((doc) => {
                idCard.push(doc.data().iDCard);
            });
            
            setCardData(idCard);
            // for (let i = 0; i < idCard.length; i++) {
            //     const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${idCard[i]}`);
            //     const data = await response.json();
                
                

            // }
        }

        fetchCardData();
    }, []);

    return (
        <div>
            <div className={styles.wrapper}>  {cardData.map((card, index) => {
                

                return (<ImageDisplay key={index} imageUrls={`https://images.ygoprodeck.com/images/cards_cropped/${card}.jpg`} />)
            })

            }
            </div>
            <button onClick={genereCarte}>Generer des cartes</button>
        </div>
    );
};

export default CoffrePage;
