import React, {Component} from 'react';
import styles from './LogoStyles';
import Typography from "@material-ui/core/Typography";
import manifest from '../../application_manifest.json'
import colors from "../../theme/colors";

class Logo extends Component {
    render() {
        const {typographyProps, containerStyles} = this.props;
        return (
            <div style={{...styles.container, ...containerStyles}}>
                <button style={{
                    border: "none", background: "none",
                    color: colors.secondaryTextColor,
                    padding: 0,
                    font: "inherit",
                    cursor: "pointer",
                    outline: "inherit",

                }}>
                    <Typography variant="h1" style={styles.logo} {...typographyProps} >
                        {manifest.name}
                    </Typography>
                </button>
            </div>
        );
    }
}

export default Logo;
