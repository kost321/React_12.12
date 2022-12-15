import React from "react";
import Input from "../Input/Input";
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
    const formData = {
      input: [
          {
              type: 'text',
              label: 'Имя',
              placeholder:"Имя", 
              value: this.state.nameValue,
              onChange: (event) => this.setState({nameValue: event.target.value})
          },
          {
              type: 'text',
              label: 'Фамилия',
              placeholder:"Фамилия",
              value: this.state.surnameValue,
              onChange: (event) => this.setState({surnameValue: event.target.value})
          },
          {
              type: 'date',
              label: 'Дата рождения',
              placeholder:"Дата рождения",
              value: this.state.dateOfBirthValue,
              onChange: (event) => this.setState({dateOfBirthValue: event.target.value})
          },
          {
              type: 'text',
              label: 'Телефон',
              placeholder:"Телефон",
              value: this.state.telephoneValue,
              onChange: (event) => this.setState({telephoneValue: event.target.value})
          },
          {
              type: 'text',
              label: 'Сайт',
              placeholder: 'Сайт',
              value: this.state.webSiteValue,
              onChange: (event) => this.setState({webSiteValue: event.target.value})
          },
      ],
      textArea: [
          {
            label: 'О себе',
            rows: 7,
            placeholder: 'О себе',
            value: this.state.aboutMyselfValue,
            onChange: (event) => this.setState({aboutMyselfValue: event.target.value})
          },
          {
            label: 'Стек технологий',
            rows: 7,
            placeholder: 'Стек технологий',
            value: this.state.technologyStackValue,
            onChange: (event) => this.setState({technologyStackValue: event.target.value})
          },
          {
            label: 'Описание последнего проекта',
            rows: 7,
            placeholder: 'Описание последнего проекта',
            value: this.state.descriptionOfTheLatestProjectValue,
            onChange: (event) => this.setState({descriptionOfTheLatestProjectValue: event.target.value})
          },
      ]
  };

    return (
      <form className="form-inner">
          {formData.input.map((el,index) => <Input key={index} type={el.type} label={el.label} placeholder={el.placeholder} value={el.value} onChange={el.onChange}/>)}
          {formData.textArea.map((el,index) => <TextareaField key={index} label={el.label} rows={el.rows} placeholder={el.placeholder} value={el.value} onChange={el.onChange}/>)}          
          <div>
          <input type="submit" value="Сохранить"/>
          <input type="submit" value="Отмена"/>
        </div>
      </form>
    );
  }
}

export default FormQuestionnaire;
