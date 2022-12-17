import React from "react";

import './userProfile.css'

function UserProfile(props) {
    return (
      <>
        <div className="title-user">
          <div>{props.name}</div>
          <div>{props.surname}</div>
        </div>
        <div className="data-user">
          <div>Дата рождения: {props.dateOfBirth}</div>
          <div>Телефон: {props.telephone}</div>
          <div>Сайт: {props.webSite}</div>
          <div>О себе: {props.aboutMyself}</div>
          <div>Стек технологий: {props.technologyStack}</div>
          <div>Описание последнего проекта: {props.descriptionOfTheLatestProject}</div>
        </div>
      </>
    )
}  

export default UserProfile;