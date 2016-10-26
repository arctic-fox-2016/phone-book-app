import React, {Component, PropTypes} from 'react'

class AppTextInput extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      name: this.props.name || '',
      phone: this.props.phone || ''
    }
  }

  handleNameChange(e){
    this.setState({name: e.target.value})
  }

  handlePhoneChange(e){
    this.setState({phone: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    var name = this.state.name.trim()
    var phone = this.state.phone.trim()
    if(!name || !phone){
      return;
    }
    this.props.onSave(name, phone)
    this.setState({name:'', phone:''})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Name</span>
          <input className="form-control" placeholder="Name" type = "text" value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
        </div>

        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Phone Number</span>
          <input className="form-control" placeholder="Phone Number" type = "text" value={this.state.phone} onChange={this.handlePhoneChange.bind(this)}/>
        </div><br />

        <button type= "submit" className="btn btn-success">Save</button>
      </form>
    )
  }
}

AppTextInput.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  onSave: PropTypes.func.isRequired
}

export default AppTextInput
