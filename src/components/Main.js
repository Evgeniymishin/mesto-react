function Main(props) {
  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container" onClick={props.onEditAvatar}>
            <img
              className="profile__avatar"
              src="./images/profile-image.png"
              alt="Аватар автора"
            />
          </div>
          <div className="profile-info">
            <h1 className="profile-info__title">Жак-Ив Кусто</h1>
            <button className="profile-info__edit-button" type="button" onClick={props.onEditAvatar} />
            <p className="profile-info__text">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace} />
      </section>
      <section className="elements"></section>
    </main>
  )
}

export default Main;