import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, handleCardClick, onDeleteClick}) {

  const [userName, setUserName] = React.useState(null);
  const [userDescription, setUserDescription] = React.useState(null); 
  const [userAvatar, setUserAvatar] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, cardData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content root__content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="Аватар профиля" onClick={onEditAvatar}/>
        </div>
        <div className="profile__info">
          <div className="profile__edit-name">
            <h1 className="profile__name">{userName}</h1>
            <button className="edit-button" type="button" onClick={onEditProfile}></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button className="add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements-container">
          {cards.map((card) => (
            <Card 
              card={card}
              onCardClick={handleCardClick()}
              onDeleteClick={onDeleteClick} 
              key={card._id}>
            </Card>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;