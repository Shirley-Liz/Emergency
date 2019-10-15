import React from "react";
import ReactDOM from "react-dom";
import { SignUpPage } from "./components/SignUpPage";
import "admin-lte/dist/css/adminlte.css";

/**
 * Main Application Component
 */
class App extends React.Component {
  /**
   * Renders the component DOM
   * @return {void}
   */

  render() {
    return <SignUpPage/>
  }
}
ReactDOM.render(<App />, document.getElementById("App"));
