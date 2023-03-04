import React from 'react';

function Card({card, onCardClick, onDeleteClick}) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="element">
      <button className="element__delete-button" type="button" onClick={onDeleteClick}></button>
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <div className="element__info">
        <h2 className="element__name">{card.name}</h2>
        <div className="element__like-section">
          <button className="element__like-button" type="button"></button>
          <span className="element__like-number">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}
  
export default Card;