import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

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
    }
}
export default theme;
