import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ListItem from '../components/ListItem'
import AppTextInput from '../components/AppTextInput'
import * as AppActions from '../actions'

class App extends Component {
  render(){
    const {data, actions} = this.props
    let jumbotronStyle ={textAlign:"center", height: "100px"}
    let headingStyle = {marginTop: "auto", marginBottom:"auto"}
    return (
      <div className="container">
        <div className="jumbotron" style={jumbotronStyle}>
          <h2 style={headingStyle}>Hacktiv8 Phone Books Apps</h2>
        </div>
        <button className="btn btn-success">Add +</button><br />
        <br />
        <AppTextInput name="" phone="" onSave={actions.addData} /><br />

        <ListItem data={data} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {data: state.data}
}

function mapDispatchtoProps(dispatch){
  return {
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(App)
