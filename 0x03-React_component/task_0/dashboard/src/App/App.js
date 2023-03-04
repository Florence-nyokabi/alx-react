import React, {Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList'
import { getLatestNotification } from '../utils/utils';

const listCourses = [
  {id: 1, name: "ES6", credit: 60},
  {id: 2, name: "Webpack", credit: 20},
  {id: 3, name: "React", credit: 40}
]
const listNotifications = [
  {id: 1, type:'default', value:"New course available"},
  {id: 2, type:'urgent', value:"New resume available"},
  {id: 3, type:'urgent', html:{__html: getLatestNotification() }}
]

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
            <Header />
            <div className="App-body">
              {this.props.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
            </div>
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default App;
