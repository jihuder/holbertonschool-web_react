import React from 'react';
import PropTypes from "prop-types";
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";


function App({ isLoggedIn }) {
  return (
    <>
      <Notifications displayDrawer={false}/>
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-body">
          { isLoggedIn ? <CourseList /> : <Login /> }
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
