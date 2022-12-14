import React, { useState } from "react";
import { Input } from "../Input/Input";
import { TextareaField } from "../TextareaField/TextareaField"
import { UserProfile } from "../UserProfile/UserProfile";

import './formQuestionnaire.css'

export const FormQuestionnaire = () => {
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
  const [isSubmitted, setSubmitted] = useState(false);

 let dataCleans = (event) => {
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
    setSubmitted(false)
    event.preventDefault()
  }
  
let handleClick = (event) => {
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

    for(let i in newObj) {
      newObj[i] = newObj[i].trim();
      if(newObj[i] === "") {
        newFormError[i] = '???????? ????????????. ?????????????????? ????????????????????';
      }
    }
    
    if(!newObj.webSiteValue.trim().endsWith('https://', 8)) {
      newFormError.webSiteValue = '???????????? ???????????? ???????????????????? ?? https://'
    }

    if(aboutMyselfValue.length > 600) {
      newFormError.aboutMyselfValue = '???????????????? ?????????? ???????????????? ?? ????????';
    }
    if(technologyStackValue.length > 600) {
      newFormError.technologyStackValue = '???????????????? ?????????? ???????????????? ?? ????????';
    }
    if(descriptionOfTheLatestProjectValue.length > 600) {
      newFormError.descriptionOfTheLatestProjectValue = '???????????????? ?????????? ???????????????? ?? ????????';
    }

    setFormErrors({...newFormError});

    if(Object.keys(newFormError).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
    event.preventDefault()
  }
  
  const formData = {
    input: [
        {
            type: 'text',
            label: '??????',
            placeholder:"??????", 
            value: nameValue,
            onChange: (event) => {
              let newValue = event.target.value.trim();
              if(newValue.charAt(0) !== newValue.charAt(0).toUpperCase()) {
                setFormErrors( prev => {
                  return {
                    ...prev,
                    nameValue: '???????????????? ?? ?????????????????? ??????????'
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
            label: '??????????????',
            placeholder:"??????????????",
            value: surnameValue,
            onChange: (event) => {
              let newValue = event.target.value.trim();
              if(newValue.charAt(0) !== newValue.charAt(0).toUpperCase()) {
                setFormErrors( prev => {
                  return {
                    ...prev,
                    surnameValue: '???????????????? ?? ?????????????????? ??????????'
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
            label: '???????? ????????????????',
            placeholder:"???????? ????????????????",
            value: dateOfBirthValue,
            onChange: (event) => setDateOfBirthValue(event.target.value),
            formErrors: formErrors.dateOfBirthValue
        },
        {
            type: 'text',
            label: '??????????????',
            placeholder:"??????????????",
            value: telephoneValue,
            onChange: (event) => {
              const x = event.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
              event.target.value = x[1] + (x[2] ? `-${x[2]}` : '') + (x[3] ? `-${x[3]}` : '') + (x[4] ? `-${x[4]}` : '');
              setTelephoneValue(event.target.value);
            },
            formErrors: formErrors.telephoneValue,
        },
        {
            type: 'text',
            label: '????????',
            placeholder: '????????',
            value: webSiteValue,
            onChange: (event) => {
              if(!'https://'.startsWith(event.target.value.trim().substr(0, 8))) {
                setFormErrors(prev => {
                  return {
                    ...prev,
                    webSiteValue: '???????????? ???????????? ???????????????????? ?? https://'
                  }
                })
              } else {
                setFormErrors(prev => {
                  return {
                    ...prev,
                    webSiteValue: ''
                  }
                })
              }
            setWebSiteValue(event.target.value)
            },
            formErrors: formErrors.webSiteValue
        },
    ],
    textArea: [
        {
          label: '?? ????????',
          rows: 7,
          placeholder: '?? ????????',
          value: aboutMyselfValue,
          onChange: (event) => {
            setAboutMyselfValue(event.target.value)
            if(event.target.value.length > 600) {
              setFormErrors( prev => {
                return {
                  ...prev,
                  aboutMyselfValue: '???????????????? ?????????? ???????????????? ?? ????????'
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
          label: '???????? ????????????????????',
          rows: 7,
          placeholder: '???????? ????????????????????',
          value: technologyStackValue,
          onChange: (event) => {
            setTechnologyStackValue(event.target.value)
            if(event.target.value.length > 600) {
              setFormErrors( prev => {
                return {
                  ...prev,
                  technologyStackValue: '???????????????? ?????????? ???????????????? ?? ????????'
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
          label: '???????????????? ???????????????????? ??????????????',
          rows: 7,
          placeholder: '???????????????? ???????????????????? ??????????????',
          value: descriptionOfTheLatestProjectValue,
          onChange: (event) => {
            setDescriptionOfTheLatestProjectValue(event.target.value);
            if(event.target.value.length > 600) {
              setFormErrors( prev => {
                return {
                  ...prev,
                  descriptionOfTheLatestProjectValue: '???????????????? ?????????? ???????????????? ?? ????????'
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
  
if(isSubmitted === true) {
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
      isSubmitted={isSubmitted}
      />
  )
} else {
  return (
    <>
      <div className="title">???????????????? ????????????</div>
        <form className="form-inner">
        {formData.input.map((el,index) => <Input key={index} formErrors={el.formErrors} type={el.type} label={el.label} placeholder={el.placeholder} value={el.value} onChange={el.onChange}/>)}
        {formData.textArea.map((el,index) => <TextareaField key={index} formErrors={el.formErrors} label={el.label} rows={el.rows} placeholder={el.placeholder} value={el.value} onChange={el.onChange}/>)}   
        <div>
          <input type="submit" value="??????????????????" onClick={handleClick}/>
          <input type="submit" value="????????????" onClick={dataCleans}/>
        </div>
      </form>
    </>
  );
}
}
