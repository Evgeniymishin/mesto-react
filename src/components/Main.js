import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setUserName(data.name)
      setUserDescription(data.about)
      setUserAvatar(data.avatar)
    })
    .catch((err) => {
      console.log(err);
    })
    api.getCards()
    .then((cardData) => {
      setCards(cardData.map((data) => ({
        id: data._id,
        name: data.name,
        link: data.link,
        likes: data.likes
      })))
    })
    .catch((err) => {
      console.log(err);
    })
  })

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container" onClick={props.onEditAvatar}>
            <img
              className="profile__avatar"
              alt="Аватар автора"
              src={userAvatar}
            />
          </div>
          <div className="profile-info">
            <h1 className="profile-info__title">{userName}</h1>
            <button className="profile-info__edit-button" type="button" onClick={props.onEditProfile} />
            <p className="profile-info__text">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace} />
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card 
          key={card.id}
          name={card.name}
          link={card.link}
          likes={card.likes}
          onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  )
}

export default Main;