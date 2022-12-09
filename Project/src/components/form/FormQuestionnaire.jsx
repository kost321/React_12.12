import React from "react";
import FieldForm from "./Form/FieldForm";

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
        <label>
          Name:
          <FieldForm placeholder="Name" value={this.state.nameValue} onChange={(event) => this.setState({nameValue: event.target.value})}/>
        </label>
        <label>
          Surname:
          <FieldForm placeholder="Surname" value={this.state.surnameValue} onChange={(event) => this.setState({surnameValue: event.target.value})}/>
        </label>
        <label>
          Date of Birth:
          <FieldForm placeholder="Date of Birth" value={this.state.dateOfBirthValue} onChange={(event) => this.setState({dateOfBirthValue: event.target.value})}/>
        </label>
        <label>
          Telephone:
          <FieldForm placeholder="Telephone" value={this.state.telephoneValue} onChange={(event) => this.setState({telephoneValue: event.target.value})}/>
        </label>
        <label>
          Website:
          <FieldForm placeholder="Website" value={this.state.webSiteValue} onChange={(event) => this.setState({webSiteValue: event.target.value})}/>
        </label>
        <label>
          About myself:
          <FieldForm rows={7} placeholder="About myself" value={this.state.aboutMyselfValue} onChange={(event) => this.setState({aboutMyselfValue: event.target.value})} />
        </label>
        <label>
          Technology stack:
          <FieldForm rows={7} placeholder="Technology stack" value={this.state.technologyStackValue} onChange={(event) => this.setState({technologyStackValue: event.target.value})}/>
        </label>
        <label>
          Description of the latest project:
          <FieldForm rows={7} placeholder="Description of the latest project" value={this.state.descriptionOfTheLatestProjectValue} onChange={(event) => this.setState({descriptionOfTheLatestProjectValue: event.target.value})}/>
        </label>
        <div>
          <input type="submit" value="Save"/>
          <input type="submit" value="Cancel"/>
        </div>
      </form>
    );
  }
}

export default FormQuestionnaire;





  