/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import React from 'react';
import clsx from 'clsx';
import {useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useStyles from './DrawableLayoutStyle';
import DrawerMenu from "./components/DrawerMenu/DrawerMenu";
import {FormDialog} from "../../reuse-components/FormDialog";
import LoginFormFieldsSpecifications
    from "../../reuse-components/LoginForm/LoginFormFieldsSpecifications";
import {LoginForm} from "../../reuse-components/LoginForm";
import SignUpFormFieldsSpecifications
    from "../../reuse-components/SignUpFormFields/SignUpFormFieldsSpecifications";
import {SignUpFormFields} from "../../reuse-components/SignUpFormFields";
import {connect} from 'react-redux';
import {asyncGetUserDetails} from "../../actions/userAction";
import AuthService from "../../service/AuthService";
import _ from 'lodash';
import {ACCESS_TOKEN} from "../../constants/Endpoints";
import {UserMenu} from "./components/UserMenu";

const DrawableLayout = ({children, history, asyncGetUserDetails, user}) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = React.useState('');
    const [signupErrorMessage, setSignupErrorMessage] = React.useState('');

    React.useEffect(() => {
        _.isEmpty(user) && localStorage.getItem(ACCESS_TOKEN) && asyncGetUserDetails()
    })


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const makeLogin = (values, closeDialog) => {
        const getUserDetailsAfterLogin = () => asyncGetUserDetails(closeDialog);
        AuthService.signin(values, getUserDetailsAfterLogin, (error) => setLoginErrorMessage(error.response.data.mensagem))
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
                        <Typography variant="h3" color={"secondary"} style={{display: 'flex', flex: 1}}>
                            Troca e Vendas Capelinha
                        </Typography>

                        {
                            !_.isEmpty(user) && <UserMenu/>
                        }
                        {
                            _.isEmpty(user) && <>
                                <FormDialog
                                    mainButtonName={"Login"}
                                    title={"Login"}
                                    confirmButtonName={'Entrar'}
                                    formikOptions={{
                                        ...LoginFormFieldsSpecifications,
                                        onSubmit: makeLogin
                                    }}
                                    errorMessage={loginErrorMessage}
                                    renderContent={(formik) => <LoginForm formik={formik}/>}
                                />

                                <FormDialog
                                    mainButtonName={"Cadastre-se"}
                                    title={"Cadastre-se"}
                                    confirmButtonName={'Confirmar'}
                                    errorMessage={signupErrorMessage}
                                    formikOptions={{
                                        ...SignUpFormFieldsSpecifications,
                                        onSubmit: (values, closeDialog) => AuthService.signin(values, closeDialog, (error) => setSignupErrorMessage(error.response.data.mensagem))
                                    }}
                                    renderContent={(formik) => <SignUpFormFields formik={formik}/>}
                                />
                            </>
                        }
                    </div>
                </Toolbar>

            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <DrawerMenu classes={classes} theme={theme} history={history}/>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader}/>
                {children}
            </main>
        </div>
    );
}

const mapStateToProps = state => ({user: state.user});
export default connect(mapStateToProps, {asyncGetUserDetails})(DrawableLayout);
