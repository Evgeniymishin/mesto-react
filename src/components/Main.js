import React from 'react';
import Card from './Card';
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container" onClick={props.onEditAvatar}>
            <img
              className="profile__avatar"
              alt="Аватар автора"
              src={currentUser.avatar}
            />
          </div>
          <div className="profile-info">
            <h1 className="profile-info__title">{currentUser.name}</h1>
            <button className="profile-info__edit-button" type="button" onClick={props.onEditProfile} />
            <p className="profile-info__text">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace} />
      </section>
      <section className="elements">
        {props.cards.map((card) => (
          <li key = {card._id}>
            <Card 
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
            />
          </li>
        ))}
      </section>
    </main>
  )
}

export default Main;