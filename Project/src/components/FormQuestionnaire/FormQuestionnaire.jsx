import React from "react";
import Input from "../Input/Input";
import TextareaField from "../TextareaField/TextareaField"
import UserProfile from "../UserProfile/UserProfile";

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
        descriptionOfTheLatestProjectValue: '',
      },
    };
    this.flag = false;
  }
  dataCleans(event) {
    this.setState({
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
        descriptionOfTheLatestProjectValue: '',
      }
    })
    event.preventDefault()
  }
  handleClick(event) {
    
    let newObj = {
      nameValue: this.state.nameValue,
      surnameValue: this.state.surnameValue,
      dateOfBirthValue: this.state.dateOfBirthValue,
      telephoneValue: this.state.telephoneValue,
      webSiteValue: this.state.webSiteValue,
      aboutMyselfValue: this.state.aboutMyselfValue,
      aboutMyselfValueCount: this.state.aboutMyselfValue,
      technologyStackValue: this.state.technologyStackValue,
      technologyStackValueCount: this.state.technologyStackValue,
      descriptionOfTheLatestProjectValue: this.state.descriptionOfTheLatestProjectValue,
      descriptionOfTheLatestProjectValueCount: this.state.descriptionOfTheLatestProjectValue
    }

    let newFormError = {};

    if(!newObj.webSiteValue.endsWith('https://', 8)) {
      newFormError.webSiteValue = 'Строка должна начинаться с https://'
    }

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

    if(newObj.aboutMyselfValue.length > 600) {
      newFormError.aboutMyselfValue = 'Превышен лимит символов в поле';
    }
    if(newObj.technologyStackValue.length > 600) {
      newFormError.technologyStackValue = 'Превышен лимит символов в поле';
    }
    if(newObj.descriptionOfTheLatestProjectValue.length > 600) {
      newFormError.descriptionOfTheLatestProjectValue = 'Превышен лимит символов в поле';
    }

    this.setState({formErrors:newFormError});

    if(Object.keys(newFormError).length === 0) {
      this.flag = true;
    } else {
      this.flag = false;
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
              value: this.state.nameValue,
              onChange: (event) => {
                if(event.target.value.charAt(0) !== event.target.value.charAt(0).toUpperCase()) {
                  this.setState( prev => {
                    return {
                      ...prev,
                      formErrors: {nameValue: 'Напишите с заглавной буквы'}
                    }
                  })
                } else {
                  this.setState( prev => {
                    return {                      
                      ...prev,
                      formErrors: {nameValue: ''} 
                    }
                  })
                this.setState({nameValue: event.target.value})
                }
              },
              formErrors: this.state.formErrors.nameValue
          },
          {
              type: 'text',
              label: 'Фамилия',
              placeholder:"Фамилия",
              value: this.state.surnameValue,
              onChange: (event) => {
                if(event.target.value.charAt(0) !== event.target.value.charAt(0).toUpperCase()) {
                  this.setState( prev => {
                    return {
                      ...prev,
                      formErrors: {surnameValue: 'Напишите с заглавной буквы'}
                    }
                  })
                } else {
                  this.setState( prev => {
                    return {                      
                      ...prev,
                      formErrors: {surnameValue: ''} 
                    }
                  })
                this.setState({surnameValue: event.target.value})
                }
              },
              formErrors: this.state.formErrors.surnameValue
          },
          {
              type: 'date',
              label: 'Дата рождения',
              placeholder:"Дата рождения",
              value: this.state.dateOfBirthValue,
              onChange: (event) => this.setState({dateOfBirthValue: event.target.value}),
              formErrors: this.state.formErrors.dateOfBirthValue
          },
          {
              type: 'text',
              label: 'Телефон',
              placeholder:"Телефон",
              value: this.state.telephoneValue,
              onChange: (event) => {
                const x = event.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
                event.target.value =  + x[1] + (x[2] ? `-${x[2]}` : '') + (x[3] ? `-${x[3]}` : '') + (x[4] ? `-${x[4]}` : '');
                this.setState({telephoneValue: event.target.value})
              },
              formErrors: this.state.formErrors.telephoneValue,
          },
          {
              type: 'text',
              label: 'Сайт',
              placeholder: 'Сайт',
              value: this.state.webSiteValue,
              onChange: (event) => this.setState({webSiteValue: event.target.value}),
              formErrors: this.state.formErrors.webSiteValue
          },
      ],
      textArea: [
          {
            label: 'О себе',
            rows: 7,
            placeholder: 'О себе',
            value: this.state.aboutMyselfValue,
            onChange: (event) => {
              this.setState({aboutMyselfValue: event.target.value})
              if(event.target.value.length > 600) {
                this.setState({formErrors: {aboutMyselfValue: 'Превышен лимит символов в поле'}})
              } else {
                this.setState({formErrors: {aboutMyselfValue: ''}})
              }
            },
            formErrors: this.state.formErrors.aboutMyselfValue
          },
          {
            label: 'Стек технологий',
            rows: 7,
            placeholder: 'Стек технологий',
            value: this.state.technologyStackValue,
            onChange: (event) => {
              this.setState({technologyStackValue: event.target.value})
              if(event.target.value.length > 600) {
                this.setState({formErrors: {technologyStackValue: 'Превышен лимит символов в поле'}})
              } else {
                this.setState({formErrors: {technologyStackValue: ''}})
              }
            },
            formErrors: this.state.formErrors.technologyStackValue
          },
          {
            label: 'Описание последнего проекта',
            rows: 7,
            placeholder: 'Описание последнего проекта',
            value: this.state.descriptionOfTheLatestProjectValue,
            onChange: (event) => {
              this.setState({descriptionOfTheLatestProjectValue: event.target.value})
              if(event.target.value.length > 600) {
                this.setState({formErrors: {descriptionOfTheLatestProjectValue: 'Превышен лимит символов в поле'}})
              } else {
                this.setState({formErrors: {descriptionOfTheLatestProjectValue: ''}})
              }
            },
            formErrors: this.state.formErrors.descriptionOfTheLatestProjectValue
          },
      ]
  };  

if(this.flag === true) {
  return (
    <UserProfile 
      name={this.state.nameValue} 
      surname={this.state.surnameValue} 
      dateOfBirth={this.state.dateOfBirthValue} 
      telephone={this.state.telephoneValue}
      webSite={this.state.webSiteValue}
      aboutMyself={this.state.aboutMyselfValue}
      technologyStack={this.state.technologyStackValue}
      descriptionOfTheLatestProject={this.state.descriptionOfTheLatestProjectValue}
      flag={this.state.flag}
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
          <input type="submit" value="Сохранить" onClick={this.handleClick.bind(this)}/>
          <input type="submit" value="Отмена" onClick={this.dataCleans.bind(this)}/>
        </div>
      </form>
    </>
  );
}
  }
}

export default FormQuestionnaire;
