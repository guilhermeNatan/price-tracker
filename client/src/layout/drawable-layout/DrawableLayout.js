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
import LoginFormFieldsSpecifications, {loginRequest} from "../../reuse-components/LoginForm/LoginFormFieldsSpecifications";
import {LoginForm} from "../../reuse-components/LoginForm";
import SignUpFormFieldsSpecifications, {signupRequest} from "../../reuse-components/SignUpFormFields/SignUpFormFieldsSpecifications";
import {SignUpFormFields} from "../../reuse-components/SignUpFormFields";
import {access_token} from "../../constants/Endpoints";

export default function DrawableLayout({children, history}) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = React.useState('');
    const [signupErrorMessage, setSignupErrorMessage] = React.useState('');
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
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
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h3" color={"secondary"}>
                        Jogo justo
                    </Typography>

                    <FormDialog
                        mainButtonName={"Login"}
                        title={"Login"}
                        confirmButtonName={'Entrar'}
                        formikOptions={{
                            ...LoginFormFieldsSpecifications,
                            onSubmit: (values, actions, closeDialog) => loginRequest(values, actions,
                                (response) => {
                                    localStorage.setItem(access_token, response.data.accessToken);
                                    closeDialog()
                                },
                                (error) => setLoginErrorMessage(error.response.data.mensagem)
                            )
                        }}
                        errorMessage={loginErrorMessage}
                        renderContent={(formik) => <LoginForm formik={formik}/>}
                    />

                    <FormDialog
                        mainButtonName={"Cadastre-se"}
                        title={"Cadastre-se"}
                        confirmButtonName={'Confirmar'}
                        formikOptions={SignUpFormFieldsSpecifications(signupRequest())}
                        renderContent={(formik) => <SignUpFormFields formik={formik}/>}
                    />
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
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <DrawerMenu classes={classes} theme={theme} history={history} />
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {children}
            </main>
        </div>
    );
}
