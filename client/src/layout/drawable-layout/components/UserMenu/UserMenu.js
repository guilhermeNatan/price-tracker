import React, {Component} from 'react';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from "prop-types";


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


  render() {
    const {anchorEl} = this.state;
    const {logout} = this.props;
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
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </div>
    );
  }
}


UserMenu.propTypes = {
  logout: PropTypes.func.isRequired,
};
export default UserMenu;
