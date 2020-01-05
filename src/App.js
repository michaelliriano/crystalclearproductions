import React, { Component } from 'react';
import PageWrapper from '../src/components//PageWrapper';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//Pages

import Home from '../src/components/Pages/Home';
import About from '../src/components/Pages/About';
import Services from '../src/components/Common/Services';
import Team from '../src/components/Common/Team';
import Contact from '../src/components/Pages/Contact';
import Portfolio from '../src/components/Common/Portfolio';
import Login from './components/Pages/Login';
import Dashboard from './components/Pages/Dashboard';

import AdminWrapper from './components/AdminWrapper';

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          path='/admin'
          render={props => {
            return (
              <AdminWrapper>
                {this.props.auth.token ? <Dashboard /> : <Login />}
              </AdminWrapper>
            );
          }}
        />
        <Route
          exact={true}
          path='/'
          render={props => (
            <PageWrapper>
              <Home {...props} />
            </PageWrapper>
          )}
        />
        <Route
          path='/services'
          render={props => (
            <PageWrapper>
              <Services {...props} />
            </PageWrapper>
          )}
        />
        <Route
          path='/about'
          render={props => (
            <PageWrapper>
              <About {...props} />
            </PageWrapper>
          )}
        />
        <Route
          path='/team'
          render={props => (
            <PageWrapper>
              <Team {...props} />
            </PageWrapper>
          )}
        />
        <Route
          path='/portfolio'
          render={props => (
            <PageWrapper>
              <Portfolio {...props} />
            </PageWrapper>
          )}
        />

        <Route
          path='/contact'
          render={props => (
            <PageWrapper>
              <Contact {...props} />
            </PageWrapper>
          )}
        />
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
