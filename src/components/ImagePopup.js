function ImagePopup(props) {
  return (
    <div className="popup popup_type_preview">
      <div className="popup__preview-container">
        <figure className="popup__preview-figure">
          <img src="#" alt="alt" className="popup__preview-img">
          <figcaption className="popup__preview-caption"></figcaption>
        </figure>
        <button className="popup__button-close" type="button"></button>
      </div>
    </div>
  )
}

export default ImagePopup;