import colors from "../../theme/colors";

const drawerWidth = 0;
const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.iceBackground
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        backgroundColor: colors.primaryDarkColor
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1
    },
    footer: {
        backgroundColor: colors.footer,
        height: '20vh',
        width: '100%',
        marginTop: '10%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    linksContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: '0 5vw 0 5vw'
    },
    link: {fontSize: '.8rem', fontWeight: 600},
    divider: {width: '100%', margin: '2vh 0 2vh 0', backgroundColor: colors.iceBackground},
    address: {fontSize: '.8rem', margin: '0 5vw 0 5vw'}
});

export default styles;
