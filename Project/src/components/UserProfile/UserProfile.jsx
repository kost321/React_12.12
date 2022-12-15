import React from "react";

import './userProfile.css'

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <div className="title-user">
          <div>{this.props.name}</div>
          <div>{this.props.surname}</div>
        </div>
        <div className="data-user">
          <div>Дата рождения: {this.props.dateOfBirth}</div>
          <div>Телефон: {this.props.telephone}</div>
          <div>Сайт: {this.props.webSite}</div>
          <div>О себе: {this.props.aboutMyself}</div>
          <div>Стек технологий: {this.props.technologyStack}</div>
          <div>Описание последнего проекта: {this.props.descriptionOfTheLatestProject}</div>
        </div>
      </>
    )
  }  
}

export default UserProfile;