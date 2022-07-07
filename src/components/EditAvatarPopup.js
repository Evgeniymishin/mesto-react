import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();
  
  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  } 

  return(
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <label className="popup__control">
        <input
          className="popup__input popup__input_type_title"
          type="url"
          name="avatar"
          placeholder="Ссылка на картинку"
          required=""
          ref={avatarRef}
        />
        <span className="popup__error" />
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;