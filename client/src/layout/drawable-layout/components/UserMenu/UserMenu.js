import React, {Component} from 'react';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from "prop-types";
import {BARRA} from "../../../../constants/RoutePaths";


class UserMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      anchorEl: null
    }
  }
  setAnchorEl = (anchorEl) => this.setState({anchorEl});

  handleClick = (event) => {
    this.setAnchorEl(event.currentTarget);
  };

  handleClose = () => {
    this.setAnchorEl(null);
  };

  logout= () => {
    const {logout, history} = this.props;
    logout();
    history.push(BARRA);
  }


  render() {
    const {anchorEl} = this.state;

    return (
        <div>
          <PersonOutlineTwoToneIcon  aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick} />
          <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleClose}>My account</MenuItem>
            <MenuItem onClick={this.logout}>Logout</MenuItem>
          </Menu>
        </div>
    );
  }
}


UserMenu.propTypes = {
  logout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};
export default UserMenu;
