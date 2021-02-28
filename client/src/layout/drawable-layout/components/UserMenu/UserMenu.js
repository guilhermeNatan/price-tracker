import React, {Component} from 'react';
import styles from './UserMenuStyles';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
          </Menu>
        </div>
    );
  }
}

export default UserMenu;
