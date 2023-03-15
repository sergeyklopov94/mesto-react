import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import Input from './Input';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import api from '../utils/api';
import {CurrentUserContext, currentData} from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const [cards, setCards] = React.useState([]);

  const [currentUser, setCurrentUser] = React.useState(currentData);
  
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleCardClick({name, link}) {
    setSelectedCard({name, link});
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (isLiked) {
      api.dislikeCard(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api.likeCard(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => {
          console.log(err);
        });
    }
} 

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
      setCards((state) => state.filter(c => c._id !== card._id));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, cardData]) => {
        setCurrentUser(userData);
        setCards(cardData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleUpdateUser(data) {
    api.editUserInfo(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root" id="root">
        <Header />
        <Main
          cards={cards}
          onEditProfile ={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupWithForm
          name="add-cards"
          title="Новое место"
          buttonText="Создать"
          size="l"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups} 
          >
          <Input placeholder="Название"></Input>
          <Input placeholder="Ссылка на картинку"></Input> 
        </PopupWithForm>
        <PopupWithForm 
          name="edit-avatar" 
          title="Обновить аватар"
          buttonText="Сохранить"
          size="m" 
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <Input placeholder="Ссылка на картинку"></Input>
        </PopupWithForm>
        {/* <PopupWithForm 
          name="delete-cards" 
          title="Вы уверены?"
          buttonText="Да"
          size="s"
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups} 
        >
        </PopupWithForm> */}
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        >
        </ImagePopup>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
