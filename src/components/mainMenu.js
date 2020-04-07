import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import { Link } from 'react-router-dom'

class MainMenu extends Component {

  getCookie(cname) {
    var name = cname + "="
    var ca = document.cookie.split(';')
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ""
  }

  componentDidMount() {
    this.props.changeState({user: this.getCookie('username')})
  }

  render() {
    return (
      <div className='mainMenu'>
        <img src='./assets/mainMenuBackGround.jpg' style={{ width: '100vw', height: '100vh', position: 'fixed' ,zIndex: -1}}/>
        <div className='body'>
          <h1>
            Medicy
          </h1>
          <div className='buttonRow'>
            {this.props.user ?
            <div>
              <div className='button'>
                New
              </div>
              <div className='button'>
                Load
              </div>
            </div> :
            <a className='button' href='/login'>
              Login
            </a> 
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
MainMenu = connect(mapStateToProps, actions)(MainMenu)
export default MainMenu