import React from "react";
import Input from "../FieldForm/FieldForm";
import TextareaField from "../TextareaField/TextareaField"

import './formQuestionnaire.css'

class FormQuestionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      surnameValue: '',
      dateOfBirthValue: '',
      telephoneValue: '',
      webSiteValue: '',
      aboutMyselfValue: '',
      technologyStackValue: '',
      descriptionOfTheLatestProjectValue: ''
    };
  }

  render() {
    return (
      <form className="form-inner">
          <Input label="Имя" placeholder="Имя" value={this.state.nameValue} onChange={(event) => this.setState({nameValue: event.target.value})}/>
          <Input label="Фамилия" placeholder="Фамилия" value={this.state.surnameValue} onChange={(event) => this.setState({surnameValue: event.target.value})}/>
          <Input label="Дата рождения" placeholder="Дата рождения" value={this.state.dateOfBirthValue} onChange={(event) => this.setState({dateOfBirthValue: event.target.value})}/>
          <Input label="Телефон" placeholder="Телефон" value={this.state.telephoneValue} onChange={(event) => this.setState({telephoneValue: event.target.value})}/>
          <Input label="Сайт" placeholder="Сайт" value={this.state.webSiteValue} onChange={(event) => this.setState({webSiteValue: event.target.value})}/>
          <TextareaField label="О себе" rows={7} placeholder="О себе" value={this.state.aboutMyselfValue} onChange={(event) => this.setState({aboutMyselfValue: event.target.value})} />
          <TextareaField label="Стек технологий" rows={7} placeholder="Стек технологий" value={this.state.technologyStackValue} onChange={(event) => this.setState({technologyStackValue: event.target.value})}/>
          <TextareaField label="Описание последнего проекта" rows={7} placeholder="Описание последнего проекта" value={this.state.descriptionOfTheLatestProjectValue} onChange={(event) => this.setState({descriptionOfTheLatestProjectValue: event.target.value})}/>
        <div>
          <input type="submit" value="Сохранить"/>
          <input type="submit" value="Отмена"/>
        </div>
      </form>
    );
  }
}

export default FormQuestionnaire;
