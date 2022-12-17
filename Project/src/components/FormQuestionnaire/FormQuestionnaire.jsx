import React, {useState} from "react";
import Input from "../Input/Input";
import TextareaField from "../TextareaField/TextareaField"
import UserProfile from "../UserProfile/UserProfile";

import './formQuestionnaire.css'

function FormQuestionnaire() {
  const [nameValue,setNameValue] = useState('');
  const [surnameValue, setSurnameValue] = useState('');
  const [dateOfBirthValue, setDateOfBirthValue] = useState('');
  const [telephoneValue, setTelephoneValue] = useState('');
  const [webSiteValue,setWebSiteValue] = useState('');
  const [aboutMyselfValue,setAboutMyselfValue] = useState('');
  const [technologyStackValue, setTechnologyStackValue] = useState('');
  const [descriptionOfTheLatestProjectValue, setDescriptionOfTheLatestProjectValue] = useState('');
  const [formErrors, setFormErrors] = useState({
    nameValue: '',
    surnameValue: '',
    dateOfBirthValue: '',
    telephoneValue: '',
    webSiteValue: '',
    aboutMyselfValue: '',
    technologyStackValue: '',
    descriptionOfTheLatestProjectValue: '',
  });
  const [flag, setFlag] = useState(false);

  function dataCleans(event) {
    setNameValue('');
    setSurnameValue('');
    setDateOfBirthValue('');
    setTelephoneValue('');
    setWebSiteValue('');
    setAboutMyselfValue('');
    setTechnologyStackValue('');
    setDescriptionOfTheLatestProjectValue('');
    setFormErrors({
      nameValue: '',
      surnameValue: '',
      dateOfBirthValue: '',
      telephoneValue: '',
      webSiteValue: '',
      aboutMyselfValue: '',
      technologyStackValue: '',
      descriptionOfTheLatestProjectValue: '',
    });
    event.preventDefault()
  }
  
  function handleClick(event) {
    let newObj = {
      nameValue: nameValue,
      surnameValue: surnameValue,
      dateOfBirthValue: dateOfBirthValue,
      telephoneValue: telephoneValue,
      webSiteValue: webSiteValue,
      aboutMyselfValue: aboutMyselfValue,
      technologyStackValue: technologyStackValue,
      descriptionOfTheLatestProjectValue: descriptionOfTheLatestProjectValue,
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

    if(newObj.aboutMyselfValue.length > 600) {
      newFormError.aboutMyselfValue = 'Превышен лимит символов в поле';
    } else if(newObj.technologyStackValue.length > 600) {
      newFormError.technologyStackValue = 'Превышен лимит символов в поле';
    } else if(newObj.descriptionOfTheLatestProjectValue.length > 600) {
      newFormError.descriptionOfTheLatestProjectValue = 'Превышен лимит символов в поле';
    }

    setFormErrors(newFormError);

    if(Object.keys(formErrors).length === 0) {
      setFlag(true);
    } else {
      setFlag(false);
    }
    event.preventDefault()
  }
  
  const formData = {
    input: [
        {
            type: 'text',
            label: 'Имя',
            placeholder:"Имя", 
            value: nameValue,
            onChange: (event) => {
              if(event.target.value.charAt(0) !== event.target.value.charAt(0).toUpperCase()) {
                setFormErrors( prev => {
                  return {
                    ...prev,
                    nameValue: 'Напишите с заглавной буквы'
                  }
                })
              } else {
                setFormErrors( prev => {
                  return {
                    ...prev,
                    nameValue: ''
                  }
                })
                setNameValue(event.target.value)}
              },
            formErrors: formErrors.nameValue
        },
        {
            type: 'text',
            label: 'Фамилия',
            placeholder:"Фамилия",
            value: surnameValue,
            onChange: (event) => {
              if(event.target.value.charAt(0) !== event.target.value.charAt(0).toUpperCase()) {
                setFormErrors( prev => {
                  return {
                    ...prev,
                    surnameValue: 'Напишите с заглавной буквы'
                  }
                })
              } else {
                setFormErrors( prev => {
                  return {
                    ...prev,
                    surnameValue: ''
                  }
                })
                setSurnameValue(event.target.value)}
              },
            formErrors: formErrors.surnameValue
        },
        {
            type: 'date',
            label: 'Дата рождения',
            placeholder:"Дата рождения",
            value: dateOfBirthValue,
            onChange: (event) => setDateOfBirthValue(event.target.value),
            formErrors: formErrors.dateOfBirthValue
        },
        {
            type: 'text',
            label: 'Телефон',
            placeholder:"Телефон",
            value: telephoneValue,
            onChange: (event) => {
              const x = event.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
              event.target.value =  + x[1] + (x[2] ? `-${x[2]}` : '') + (x[3] ? `-${x[3]}` : '') + (x[4] ? `-${x[4]}` : '');
              setTelephoneValue(event.target.value)
            },
            formErrors: formErrors.telephoneValue,
        },
        {
            type: 'text',
            label: 'Сайт',
            placeholder: 'Сайт',
            value: webSiteValue,
            onChange: (event) => setWebSiteValue(event.target.value),
            formErrors: formErrors.webSiteValue
        },
    ],
    textArea: [
        {
          label: 'О себе',
          rows: 7,
          placeholder: 'О себе',
          value: aboutMyselfValue,
          onChange: (event) => {
            setAboutMyselfValue(event.target.value)
            if(event.target.value.length > 600) {
              setFormErrors( prev => {
                return {
                  ...prev,
                  aboutMyselfValue: 'Превышен лимит символов в поле'
                }
              })
            } else {
              setFormErrors( prev => {
                return {
                  ...prev,
                  aboutMyselfValue: ''
                }
              })
            }
          },
          formErrors: formErrors.aboutMyselfValue
        },
        {
          label: 'Стек технологий',
          rows: 7,
          placeholder: 'Стек технологий',
          value: technologyStackValue,
          onChange: (event) => {
            if(event.target.value.length > 600) {
              setTechnologyStackValue(event.target.value)
              setFormErrors( prev => {
                return {
                  ...prev,
                  technologyStackValue: 'Превышен лимит символов в поле'
                }
              })
            } else {
              setFormErrors( prev => {
                return {
                  ...prev,
                  technologyStackValue: ''
                }
              })
            }
          },
          formErrors: formErrors.technologyStackValue
        },
        {
          label: 'Описание последнего проекта',
          rows: 7,
          placeholder: 'Описание последнего проекта',
          value: descriptionOfTheLatestProjectValue,
          onChange: (event) => {
            if(event.target.value.length > 600) {
              setDescriptionOfTheLatestProjectValue(event.target.value);
              setFormErrors( prev => {
                return {
                  ...prev,
                  descriptionOfTheLatestProjectValue: 'Превышен лимит символов в поле'
                }
              })
            } else {
              setFormErrors( prev => {
                return {
                  ...prev,
                  descriptionOfTheLatestProjectValue: ''
                }
              })
            }
          },
          formErrors: formErrors.descriptionOfTheLatestProjectValue
        },
    ]
};  
  
if(flag === true) {
  return (
    <UserProfile 
      name={nameValue} 
      surname={surnameValue} 
      dateOfBirth={dateOfBirthValue} 
      telephone={telephoneValue}
      webSite={webSiteValue}
      aboutMyself={aboutMyselfValue}
      technologyStack={technologyStackValue}
      descriptionOfTheLatestProject={descriptionOfTheLatestProjectValue}
      flag={flag}
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
          <input type="submit" value="Сохранить" onClick={handleClick}/>
          <input type="submit" value="Отмена" onClick={dataCleans}/>
        </div>
      </form>
    </>
  );
}
}

export default FormQuestionnaire;
