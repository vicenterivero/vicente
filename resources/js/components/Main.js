import React from 'react';
import ReactDOM from 'react-dom';

import Nav from "./Nav"
import Form from "./employee/Form"
import List from "./employee/List"
import Edit from "./employee/Edit"

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


function Main() {
    return (
   /*      <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">hola mundo hermoso</div>
                    </div>
                </div>
            </div>
        </div> */
        <Router>
        <main>
          <Nav/>
          <Switch>
            <Route path="/employee/index" exact component={List} />
            <Route path="/employee/form"  component={Form} />
            <Route path="/employee/edit/:id" component={Edit} />
          </Switch>
        </main>
      </Router>
    );
}

export default Main;

/* if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
 */

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
