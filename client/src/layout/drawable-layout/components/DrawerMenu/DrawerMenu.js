/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import React, {Component} from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {MLink} from "../../../internal-layout/components/MLink";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import ExitToAppSharp from "@material-ui/icons/ExitToAppSharp";

class DrawerMenu extends Component {
    render() {
        const {classes, theme, history} = this.props;
        return (
            <>
                <List>
                    <MLink to="/">
                        <ListItem button key="atendimento">
                            <ListItemIcon>{<LibraryBooksIcon/>}</ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItem>
                    </MLink>
                </List>
                <Divider/>
                <List>
                    <ListItem
                        button
                        key="sair"
                        onClick={async () => {
                            await console.log('realizar logout');
                            history.push('/');
                        }}
                    >
                        <ListItemIcon>{<ExitToAppSharp/>}</ListItemIcon>
                        <ListItemText primary="Sair"/>
                    </ListItem>
                </List>
            </>
        );
    }
}

DrawerMenu.propTypes = {};

export default DrawerMenu;
