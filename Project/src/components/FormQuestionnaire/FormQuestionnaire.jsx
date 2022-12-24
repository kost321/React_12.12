import React from "react";
import Input from "../Input/Input";
import TextareaField from "../TextareaField/TextareaField"
import UserProfile from "../UserProfile/UserProfile";

import './formQuestionnaire.css'

class FormQuestionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        nameValue: '',
        surnameValue: '',
        dateOfBirthValue: '',
        telephoneValue: '',
        webSiteValue: '',
        aboutMyselfValue: '',
        technologyStackValue: '',
        descriptionOfTheLatestProjectValue: '',
      },
      formErrors: {
        nameValue: '',
        surnameValue: '',
        dateOfBirthValue: '',
        telephoneValue: '',
        webSiteValue: '',
        aboutMyselfValue: '',
        technologyStackValue: '',
        descriptionOfTheLatestProjectValue: '',
      },
      isSubmitted: false,
    };
  }

  cleanData(event) {
    this.setState({
      values: {
        nameValue: '',
        surnameValue: '',
        dateOfBirthValue: '',
        telephoneValue: '',
        webSiteValue: '',
        aboutMyselfValue: '',
        technologyStackValue: '',
        descriptionOfTheLatestProjectValue: '',
      },
      formErrors: {
        nameValue: '',
        surnameValue: '',
        dateOfBirthValue: '',
        telephoneValue: '',
        webSiteValue: '',
        aboutMyselfValue: '',
        technologyStackValue: '',
        descriptionOfTheLatestProjectValue: '',
      },
      isSubmitted: false,
    })
    event.preventDefault()
  }

  handleSubmit(event) {  
    let newObj = {
      nameValue: this.state.values.nameValue,
      surnameValue: this.state.values.surnameValue,
      dateOfBirthValue: this.state.values.dateOfBirthValue,
      telephoneValue: this.state.values.telephoneValue,
      webSiteValue: this.state.values.webSiteValue,
      aboutMyselfValue: this.state.values.aboutMyselfValue,
      technologyStackValue: this.state.values.technologyStackValue,
      descriptionOfTheLatestProjectValue: this.state.values.descriptionOfTheLatestProjectValue,
    }

    let newFormError = {};

    for(let i in newObj) {
      newObj[i] = newObj[i].trim();
      if(newObj[i] === "") {
        newFormError[i] = 'Поле пустое. Заполните пожалуйста';
      }
    }

    this.setState(prev => ({formErrors: {...prev.formErrors, ...newFormError}}));

    if(Object.keys(newFormError).length === 0) {
      this.state.isSubmitted = true;
    } else {
      this.state.isSubmitted = false;
    }

    event.preventDefault()
  }

  render() {
    const formData = {
      input: [
          {
              type: 'text',
              label: 'Имя',
              placeholder:"Имя", 
              value: this.state.values.nameValue,
              onChange: (event) => {
                let newValue = event.target.value.trim()
                if(newValue.charAt(0) !== newValue.charAt(0).toUpperCase()) {
                  this.setState(prev => ({
                    formErrors: {
                      ...prev.formErrors,
                      nameValue: 'Напишите с заглавной буквы'
                    }
                  }))
                } else {
                  this.setState(prev => ({
                    formErrors: {
                      ...prev.formErrors,
                      nameValue: ''
                    },
                    values: {
                      ...prev.values,
                      nameValue: event.target.value
                    }
                  }));
                }
              },
              formErrors: this.state.formErrors.nameValue
          },
          {
              type: 'text',
              label: 'Фамилия',
              placeholder:"Фамилия",
              value: this.state.values.surnameValue,
              onChange: (event) => {
                let newValue = event.target.value.trim()
                if(newValue.charAt(0) !== newValue.charAt(0).toUpperCase()) {
                  this.setState(prev => ({
                    formErrors: {
                      ...prev.formErrors,
                      surnameValue: 'Напишите с заглавной буквы'
                    }
                  }))
                } else {
                  this.setState(prev => ({
                    formErrors: {
                      ...prev.formErrors,
                      surnameValue: ''
                    },
                    values: {
                      ...prev.values,
                      surnameValue: event.target.value
                    }
                  }));
                }
              },
              formErrors: this.state.formErrors.surnameValue
          },
          {
              type: 'date',
              label: 'Дата рождения',
              placeholder:"Дата рождения",
              value: this.state.values.dateOfBirthValue,
              onChange: (event) => this.setState(prev => ({values: {...prev.values, dateOfBirthValue: event.target.value}})),
              formErrors: this.state.formErrors.dateOfBirthValue
          },
          {
              type: 'text',
              label: 'Телефон',
              placeholder:"Телефон",
              value: this.state.values.telephoneValue,
              onChange: (event) => {
                const x = event.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
                event.target.value = x[1] + (x[2] ? `-${x[2]}` : '') + (x[3] ? `-${x[3]}` : '') + (x[4] ? `-${x[4]}` : '');
                this.setState(prev => ({values: {...prev.values, telephoneValue: event.target.value}}))
              },
              formErrors: this.state.formErrors.telephoneValue,
          },
          {
              type: 'text',
              label: 'Сайт',
              placeholder: 'Сайт',
              value: this.state.values.webSiteValue,
              onChange: (event) => {
                if(!'https://'.startsWith(event.target.value.trim().substr(0, 8))) {
                  this.setState(prev => ({
                    formErrors: {
                      ...prev.formErrors,
                      webSiteValue: 'Строка должна начинаться с https://'
                    }
                  }))
                } else {
                  this.setState(prev => ({
                    formErrors: {
                      ...prev.formErrors,
                      webSiteValue: ''
                    },
                    values: {
                      ...prev.values,
                      webSiteValue: event.target.value
                    }
                  }));
                }
              },
              formErrors: this.state.formErrors.webSiteValue
          },
      ],
      textArea: [
          {
            label: 'О себе',
            rows: 7,
            placeholder: 'О себе',
            value: this.state.values.aboutMyselfValue,
            onChange: (event) => {
              this.setState(prev => ({values: {...prev.values, aboutMyselfValue: event.target.value}}));
              if(event.target.value.length > 600) {
                this.setState(prev => ({
                  formErrors: {
                    ...prev.formErrors,
                    aboutMyselfValue: 'Превышен лимит символов в поле'
                  }
                }))
              } else {
                this.setState(prev => ({
                  formErrors: {
                    ...prev.formErrors,
                    aboutMyselfValue: ''
                  }
                }))
              }
            },
            formErrors: this.state.formErrors.aboutMyselfValue
          },
          {
            label: 'Стек технологий',
            rows: 7,
            placeholder: 'Стек технологий',
            value: this.state.values.technologyStackValue,
            onChange: (event) => {
              this.setState(prev => ({values: {...prev.values, technologyStackValue: event.target.value}}));
              if(event.target.value.length > 600) {
                this.setState(prev => ({
                  formErrors: {
                    ...prev.formErrors,
                    technologyStackValue: 'Превышен лимит символов в поле'
                  }
                }))
              } else {
                this.setState(prev => ({
                  formErrors: {
                    ...prev.formErrors,
                    technologyStackValue: ''
                  }
                }))
              }
            },
            formErrors: this.state.formErrors.technologyStackValue
          },
          {
            label: 'Описание последнего проекта',
            rows: 7,
            placeholder: 'Описание последнего проекта',
            value: this.state.values.descriptionOfTheLatestProjectValue,
            onChange: (event) => {
              this.setState(prev => ({values: {...prev.values, descriptionOfTheLatestProjectValue: event.target.value}}));
              if(event.target.value.length > 600) {
                this.setState(prev => ({
                  formErrors: {
                    ...prev.formErrors,
                    descriptionOfTheLatestProjectValue: 'Превышен лимит символов в поле'
                  }
                }))
              } else {
                this.setState(prev => ({
                  formErrors: {
                    ...prev.formErrors,
                    descriptionOfTheLatestProjectValue: ''
                  }
                }))
              }
            },
            formErrors: this.state.formErrors.descriptionOfTheLatestProjectValue
          },
      ]
  };  

if(this.state.isSubmitted === true) {
  return (
    <UserProfile 
      name={this.state.values.nameValue} 
      surname={this.state.values.surnameValue} 
      dateOfBirth={this.state.values.dateOfBirthValue} 
      telephone={this.state.values.telephoneValue}
      webSite={this.state.values.webSiteValue}
      aboutMyself={this.state.values.aboutMyselfValue}
      technologyStack={this.state.values.technologyStackValue}
      descriptionOfTheLatestProject={this.state.values.descriptionOfTheLatestProjectValue}
      />
  )
} else {
  return (
    <>
      <div className="title">Создание анкеты</div>
        <form className="form-inner">
        {formData.input.map((el,index) => <Input key={index} formErrors={el.formErrors} type={el.type} label={el.label} placeholder={el.placeholder} value={el.value} onChange={el.onChange}/>)}
        {formData.textArea.map((el,index) => <TextareaField key={index} formErrors={el.formErrors} label={el.label} rows={el.rows} placeholder={el.placeholder} value={el.value} onChange={el.onChange}/>)}   
        <div>
          <input type="submit" value="Сохранить" onClick={this.handleSubmit.bind(this)}/>
          <input type="submit" value="Отмена" onClick={this.cleanData.bind(this)}/>
        </div>
      </form>
    </>
  );
}
  }
}

export default FormQuestionnaire;
