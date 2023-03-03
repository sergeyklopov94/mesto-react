import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="root">
      <Header />
      <Main />
      <Footer />
      <div className="popup popup_edit-profile">
        <div className="popup__container popup__container_size-l">
          <button className="popup__close-button" type="button"></button>
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__content" noValidate>
            <label className="popup__field">
              <input className="popup__info" type="text" placeholder="Имя" id="name-input" name="name" minLength="2" maxLength="40" required />
              <span className="popup__info-error name-input-error"></span>
            </label>
            <label className="popup__field">
              <input className="popup__info" type="text" placeholder="О себе" id="about-input" name="about" minLength="2" maxLength="200" required />
              <span className="popup__info-error about-input-error"></span>
            </label>
            <button className="popup__save-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_add-cards">
        <div className="popup__container popup__container_size-l">
          <button className="popup__close-button" type="button"></button>
          <h3 className="popup__title">Новое место</h3>
          <form className="popup__content" noValidate>
            <label className="popup__field">
              <input className="popup__info" type="text" placeholder="Название" id="appellation-input" name="name" minLength="2" maxLength="30" required />
              <span className="popup__info-error appellation-input-error"></span>
            </label>
            <label className="popup__field">
              <input className="popup__info" type="url" placeholder="Ссылка на картинку" id="link-input" name="link" required />
              <span className="popup__info-error link-input-error"></span>
            </label>
            <button className="popup__save-button" type="submit">Создать</button>
          </form>
        </div>
      </div>
      <div className="popup popup_open-cards">
        <div className="popup__container-figure">
          <button className="popup__close-button" type="button"></button>
          <figure className="popup__figure">
            <img className="popup__image" src="#" alt="" />
            <figcaption className="popup__caption"></figcaption>
          </figure>
        </div>
      </div>
      <div className="popup popup_delete-cards">
        <div className="popup__container popup__container_size-s">
          <button className="popup__close-button" type="button"></button>
          <h3 className="popup__title popup__title_confirm">Вы уверены?</h3>
          <form className="popup__content">
            <button className="popup__save-button" type="submit">Да</button>
          </form>
        </div>
      </div>
      <div className="popup popup_edit-avatar">
        <div className="popup__container popup__container_size-m">
          <button className="popup__close-button" type="button"></button>
          <h3 className="popup__title popup__title_edit-avatar">Обновить аватар</h3>
          <form className="popup__content">
            <label className="popup__field">
              <input className="popup__info" type="url" placeholder="Ссылка на картинку" id="avatar-link-input" name="link" required />
              <span className="popup__info-error avatar-link-input-error"></span>
            </label>
            <button className="popup__save-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <template id="card-template">
        <li className="element">
          <button className="element__delete-button" type="button"></button>
          <img className="element__image" src="#" alt="" />
          <div className="element__info">
            <h2 className="element__name">555</h2>
            <div className="element__like-section">
              <button className="element__like-button" type="button"></button>
              <span className="element__like-number">0</span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
