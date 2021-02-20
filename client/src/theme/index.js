import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';
import Verify from "../util/Verify";

//https://www.youtube.com/watch?v=mu8-u7V7Z8s&ab_channel=Headway
const theme = createMuiTheme({
    palette: {
        background: {
            dark: '#F4F6F8',
            default: colors.common.white,
            paper: colors.common.white
        },
        primary: {
            main: colors.indigo[900]
        },
        secondary: {
            main: colors.deepOrange[400]
        },
        text: {
            primary: colors.blueGrey[900],
            secondary: colors.blueGrey[600]
        }
    },
    shadows,
    typography

});

theme.props = {
    MuiButton: {
        disableElevation: true,
    },
    MuiTypography: {
        color: 'textPrimary'
    }
}
theme.overrides = {
    MuiButton: {
        root: {
            textTransform: 'none',
            "&:focus": {
                outline: 'none'
            }
        },
        containedPrimary: {
            backgroundColor:  theme.palette.primary.main,
            "&:hover": {
                backgroundColor:  theme.palette.secondary.main,
            },
        },
        containedSecondary: {
            color: 'white'
        }
    },
    MuiTypography: {
        h1: {
            fontSize: '29px'
        },
        h2: {
            fontSize: '24px'
        },
        h3: {
            fontSize: '20px'
        },
        h4: {
            fontSize: '16px'
        },
        h5: {
            fontSize: '14px'
        },
        h6: {
            fontSize: '12px'
        }
    }

}
export default theme;
