import React, {Component} from 'react';
import styles from './LogoStyles';
import Typography from "@material-ui/core/Typography";
import manifest from '../../application_manifest.json'
class Logo extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Typography variant="h1"  style={styles.logo}>
            {manifest.name}
        </Typography>
      </div>
    );
  }
}

export default Logo;
