import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'

class ListItem extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      searchName: "",
      searchPhone: ""
    }
  }

  handleSearchName(e){
    this.setState({searchName: e.target.value})
  }

  handleSearchPhone(e){
    this.setState({searchPhone: e.target.value})
  }

  render(){
    const {data, actions} = this.props
    let nodeData
    if(this.state.searchName == "" && this.state.searchPhone == ""){
      nodeData = data.map(function(data){
        return <DataItem key={data.id} data={data} {...actions} />
      })
    } else {
      nodeData = data.map(function(data){
        if(this.state.searchPhone ==""){
          if(data.name.startsWith(this.state.searchName)==true){
            return <DataItem key={data.id} data={data} {...actions} />
          }
        }

        if(this.state.searchName ==""){
          if(data.phone.startsWith(this.state.searchPhone)==true){
            return <DataItem key={data.id} data={data} {...actions} />
          }
        }

        if(this.state.searchName !="" && this.state.searchName !=""){
          if(data.phone.startsWith(this.state.searchPhone)==true && data.name.startsWith(this.state.searchName)==true){
            return <DataItem key={data.id} data={data} {...actions} />
          }
        }
      }.bind(this))
    }


    return (
      <div>
      <button className="btn btn-success">Search</button><br /><br />
      <form className="form-inline">
        <div className="form-group">
          Name: <input type="text" onChange = {this.handleSearchName.bind(this)} className="form-control" placeholder="Name" />
        </div>
        <div className="form-group">
          <label className="sr-only" for="exampleInputPassword3">Password</label>
           Phone Number: <input type="text" onChange = {this.handleSearchPhone.bind(this)} className="form-control" placeholder="Phone Number" />
        </div>
      </form><br />
      <table className='table table-striped'>
      <thead>
        <tr><th>Name</th><th>PhoneNumber</th><th>Action</th></tr>
      </thead>
      <tbody>
      {nodeData}
      </tbody>
      </table>
      </div>
    )
  }
}

ListItem.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default ListItem
