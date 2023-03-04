import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import Input from './Input';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});
  
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="root" id="root">
      <Header />
      <Main
        onEditProfile={() => setIsEditProfilePopupOpen(true)}
        onAddPlace={() => setIsAddPlacePopupOpen(true)}
        onEditAvatar={() => setIsEditAvatarPopupOpen(true)}
        onDeleteClick={() => setIsDeleteCardPopupOpen(true)}
        handleCardClick={() => setSelectedCard}
      />
      <Footer />
      <PopupWithForm 
        name="edit-profile" 
        title="Редактировать профиль"
        buttonText="Сохранить"
        size="l"
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups}
      >
        <Input placeholder="Имя"></Input>
        <Input placeholder="О себе"></Input>
      </PopupWithForm>
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
      <PopupWithForm 
        name="delete-cards" 
        title="Вы уверены?"
        buttonText="Да"
        size="s"
        isOpen={isDeleteCardPopupOpen}
        onClose={closeAllPopups} 
      >
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      ></ImagePopup>
    </div>
  );
}

export default App;
