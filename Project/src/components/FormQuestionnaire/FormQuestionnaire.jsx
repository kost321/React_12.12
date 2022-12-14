import React from "react";
import Input from "../Input/Input";
import TextareaField from "../TextareaField/TextareaField"
import FormErrors from "../FormErrors/FormErrors";

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
      descriptionOfTheLatestProjectValue: '',
      formErrors: {
        nameValue: '',
        surnameValue: '',
        dateOfBirthValue: '',
        telephoneValue: '',
        webSiteValue: '',
        aboutMyselfValue: '',
        technologyStackValue: '',
        descriptionOfTheLatestProjectValue: ''
      },
    };
  }

  handleClick(event) {
    let newObj = {
      nameValue: this.state.nameValue,
      surnameValue: this.state.surnameValue,
      dateOfBirthValue: this.state.dateOfBirthValue,
      telephoneValue: this.state.telephoneValue,
      webSiteValue: this.state.webSiteValue,
      aboutMyselfValue: this.state.aboutMyselfValue,
      technologyStackValue: this.state.technologyStackValue,
      descriptionOfTheLatestProjectValue: this.state.descriptionOfTheLatestProjectValue
    }

    let newFormError = {};
    for(let i in newObj) {
      newObj[i] = newObj[i].trim();
      if(newObj[i] === "") {
        newFormError[i] = 'Поле пустое. Заполните пожалуйста';
      }
    }

    if(newObj.nameValue.charAt(0) !== newObj.nameValue.charAt(0).toUpperCase()) {
      newFormError.nameValue = 'Напишите с заглавной буквы';
    } else if (newObj.surnameValue.charAt(0) !== newObj.surnameValue.charAt(0).toUpperCase()) {
      newFormError.surnameValue = 'Напишите с заглавной буквы'
    }

    console.log(newFormError)
    this.setState({formErrors:newFormError})
    event.preventDefault()
  }

  inputMaskTelephone(event) {
    const x = event.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
    event.target.value =  + x[1] + (x[2] ? `-${x[2]}` : '') + (x[3] ? `-${x[3]}` : '') + (x[4] ? `-${x[4]}` : '');
    this.setState({telephoneValue: event.target.value})
  }

  render() {
    return (
      <form className="form-inner">
          <Input type='text' formErrors={this.state.formErrors.nameValue} label="Имя" placeholder="Имя" value={this.state.nameValue} onChange={(event) => this.setState({nameValue: event.target.value})}/>
          <Input type='text' formErrors={this.state.formErrors.surnameValue} label="Фамилия" placeholder="Фамилия" value={this.state.surnameValue} onChange={(event) => this.setState({surnameValue: event.target.value})}/>
          <Input type='date' formErrors={this.state.formErrors.dateOfBirthValue} label="Дата рождения" placeholder="Дата рождения" value={this.state.dateOfBirthValue} onChange={(event) => this.setState({dateOfBirthValue: event.target.value})}/>
          <Input type='text' formErrors={this.state.formErrors.telephoneValue} label="Телефон" placeholder="Телефон" value={this.state.telephoneValue} onChange={this.inputMaskTelephone.bind(this)}/>
          <Input type='text' formErrors={this.state.formErrors.webSiteValue} label="Сайт" placeholder="Сайт" value={this.state.webSiteValue} onChange={(event) => this.setState({webSiteValue: event.target.value})}/>
          <TextareaField formErrors={this.state.formErrors.aboutMyselfValue} label="О себе" rows={7} placeholder="О себе" value={this.state.aboutMyselfValue} onChange={(event) => this.setState({aboutMyselfValue: event.target.value})}/>
          <TextareaField formErrors={this.state.formErrors.technologyStackValue} label="Стек технологий" rows={7} placeholder="Стек технологий" value={this.state.technologyStackValue} onChange={(event) => this.setState({technologyStackValue: event.target.value})}/>
          <TextareaField formErrors={this.state.formErrors.descriptionOfTheLatestProjectValue} label="Описание последнего проекта" rows={7} placeholder="Описание последнего проекта" value={this.state.descriptionOfTheLatestProjectValue} onChange={(event) => this.setState({descriptionOfTheLatestProjectValue: event.target.value})}/>
        <div>
          <input type="submit" value="Сохранить" onClick={this.handleClick.bind(this)}/>
          <input type="submit" value="Отмена"/>
        </div>
      </form>
    );
  }
}

export default FormQuestionnaire;
