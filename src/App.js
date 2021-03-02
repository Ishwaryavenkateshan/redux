import React from 'react';
import { connect } from 'react-redux';
import {userGet} from './redux/actions/login.actions'
// import { activateGeod, closeGeod } from './redux';

// App.js
export class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.geod.title || 'Hello World!'}</h1>
        <input type='text' name='name' />
        
          <button
            onClick={() =>
              this.props.userGet({ data: '' })
            }
          >
            Click Me!
          </button>
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  geod: state.geod,
});

const mapDispatchToProps = {
  userGet

};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;