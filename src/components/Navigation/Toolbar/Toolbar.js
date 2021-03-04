import React from 'react';

import classes from '../Toolbar/Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} className={classes.Logo}>
        </DrawerToggle>
        <Logo />
        <nav className={classes.DesktopOnly}>
            <NavItems />
        </nav>
    </header>
);
 
export default toolbar;