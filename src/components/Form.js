import React from 'react';

//initiated
class Form extends React.Component {
  

  // handleSubmit = event => {
  //   event.preventDefault()
  //   let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
  //   let dataArray = this.state.submittedData.concat(formData)
  //   this.setState({submittedData: dataArray})
  // }

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(data => {
  //     return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
  //   })
  // }

  render() {
    return (
      <div>
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <input 
            type="text" 
            name="firstName" 
            onChange={event => this.props.handleFirstNameChange(event)} 
            value={this.props.formData.firstName} 
          />
          <input 
            type="text" 
            name="lastName" 
            onChange={event => this.props.handleLastNameChange(event)} 
            value={this.props.formData.lastName} 
          />
          <input type="submit"/>
        </form>
        {/* {this.listOfSubmissions()} */}
      </div>
    )
  }
}

export default Form;