import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';
import _ from "lodash";

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {

  }

  render() {
    const { component: Comp, ...rest } = this.props;
    const { user } = this.props;
    return (
      <Route
        {...rest}
        render={(props) => {
          if (!_.isEmpty(user)) {
            return (
              <React.Fragment>
                <Comp {...props} {...rest} />
              </React.Fragment>
            );
          }
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          );
        }
        }
      />
    );
  }
}

export default PrivateRoute;
