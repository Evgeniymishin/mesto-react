function Card(card) {

  function handleCardClick() {
    card.onCardClick(card);
  }  

  return (
    <article className="element">
      <img src={card.link} alt={card.name} className="element__photo" onClick={handleCardClick}/>
      <div className="element__title-container">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button"></button>
          <p className="element__like-count">{card.likes.length}</p>
        </div>
      </div>
      <button className="element__delete-button" type="button"></button>
    </article>
  )
}

export default Card;