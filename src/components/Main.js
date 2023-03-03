import React from 'react';

 function Main() {
   return (
     <main className="content root__content">
       <section className="profile">
         <div className="profile__avatar-container">
           <img className="profile__avatar" src="<%=require('./images/profile-image.jpg')%>" alt="Аватар профиля" />
         </div>
         <div className="profile__info">
           <div className="profile__edit-name">
             <h1 className="profile__name">Жак-Ив Кусто</h1>
             <button className="edit-button" type="button"></button>
           </div>
           <p className="profile__description">Исследователь океана</p>
         </div>
         <button className="add-button" type="button"></button>
       </section>
       <section className="elements">
         <ul className="elements-container"></ul>
       </section>
     </main>
   );
 }
   
 export default Main;