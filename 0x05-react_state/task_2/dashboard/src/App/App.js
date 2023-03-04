import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notification from "../Notifications/Notifications";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import { AppProvider, user } from "./AppContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    this.listNotifications = [
      { id: 1, value: "New course available", type: "default" },
      { id: 2, value: "New resume available", type: "urgent" },
      { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
    ];

    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
    };
  }

  logIn = (email, password) => {
    // Update the user state
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    // Reset the user in the local state
    this.setState({
      user: user,
    });
  };

  handleDisplayDrawer = () => {
    this.setState({
      displayDrawer: true,
    });
  };

  handleHideDrawer = () => {
    this.setState({
      displayDrawer: false,
    });
  };

  handleKeyDown(e) {
    if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      alert("Logging you out");
      this.logOut();
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <AppProvider
        value={{
          user: this.state.user,
          logOut: this.state.logOut,
        }}
      >
        <React.Fragment>
          <Notification
            listNotifications={this.listNotifications}
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <div className={css(bodyStyles.App)}>
            <Header />
            {this.state.user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Random Text</p>
            </BodySection>
            <div className={css(footerStyles.footer)}>
              <Footer />
            </div>
          </div>
        </React.Fragment>
      </AppProvider>
    );
  }
}

const bodyStyles = StyleSheet.create({
  App: {
    position: "relative",
    minHeight: "100vh",
  },
});

const footerStyles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "3px solid #E11D3F",
    padding: "1rem",
    fontStyle: "italic",
  },
});

export default App;
