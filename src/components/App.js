import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from './PopupWithForm';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick () {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleEditProfileClick () {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleAddPlaceClick () {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div className="root">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <label className="popup__control">
              <input
                className="popup__input popup__input_type_title"
                type="text"
                name="title"
                placeholder="Ваше имя"
                required=""
                minLength={2}
                maxLength={40}
              />
              <span className="popup__error" />
            </label>
            <label className="popup__control">
              <input
                className="popup__input popup__input_type_text"
                type="text"
                name="text"
                placeholder="Род деятельности"
                required=""
                minLength={2}
                maxLength={200}
              />
              <span className="popup__error" />
            </label>
          </>
        }
      />
      <PopupWithForm
        name="add"
        title="Новое место"
        buttonText="Добавить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <label className="popup__control">
              <input
                className="popup__input popup__input_type_title"
                type="text"
                name="title"
                placeholder="Название"
                required=""
                minLength={2}
                maxLength={30}
              />
              <span className="popup__error" />
            </label>
            <label className="popup__control">
              <input
                className="popup__input popup__input_type_text"
                type="url"
                name="text"
                placeholder="Ссылка на картинку"
                required=""
              />
              <span className="popup__error" />
            </label>
          </>
        }
      />
      {/* <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        buttonText="Да"
        isOpen={false}
        children={
          <></>
        }
      /> */}
      <PopupWithForm
        name="update-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <label className="popup__control">
              <input
                className="popup__input popup__input_type_title"
                type="url"
                name="avatar"
                placeholder="Ссылка на картинку"
                required=""
              />
              <span className="popup__error" />
            </label>
          </>
        }
      />
      <template id="element" />
    </div>
  );
}

export default App;
