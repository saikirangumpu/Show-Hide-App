// Write your code
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  onShowFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onShowLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="title"> Show/Hide </h1>
        <div className="both-container">
          <div className="single-container">
            <button className="button" onClick={this.onShowFirstName}>
              Show/Hide Firstname
            </button>
            {firstName && <p className="name-container"> Joe </p>}
          </div>
          <div className="single-container">
            <button className="button" onClick={this.onShowLastName}>
              Show/Hide Lastname
            </button>
            {lastName && <p className="name-container"> Jonas </p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
