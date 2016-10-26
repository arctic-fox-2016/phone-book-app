import React, {Component, PropTypes} from 'react'

class DataItem extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      name: this.props.data.name || '',
      phone: this.props.data.phone || '',
      update: 'no'
    }
  }

  handleEditButton(){
    this.setState({update: "yes"})
  }

  handleEditName(e){
    this.setState({name:e.target.value })
  }

  handleEditPhone(e){
    this.setState({phone:e.target.value })
  }

  handleSaveEdit(){
    this.props.updateData(this.props.data.id, this.state.name, this.state.phone)
    this.setState({update:'no'})
  }

  render(){
    const {data, deleteData, updateData} = this.props
    const liStyle = {
      'color': '#000000',
      'backgroundColor': '#ffffff'
    }
    if(this.state.update == 'no'){
      return(
        <tr><td>{data.name}</td><td>{data.phone}</td><td><button className="update-button btn btn-success" onClick={ this.handleEditButton.bind(this)}>Edit</button> <button className="update-button btn btn-danger" onClick={()=> deleteData(data.id)}>Delete</button></td></tr>
      )
    } else {
      return(
        <tr><td><input className="form-control" type="text" value={this.state.name} onChange={this.handleEditName.bind(this)} /></td><td><input className="form-control"type="text" value={this.state.phone} onChange={this.handleEditPhone.bind(this)} /></td><td><button className="update-button btn btn-success" onClick={this.handleSaveEdit.bind(this)}>save</button></td></tr>
      )
    }
  }
}

DataItem.propTypes = {
  data: PropTypes.object.isRequired,
  deleteData: PropTypes.func.isRequired,
  updateData:PropTypes.func.isRequired
}

export default DataItem
