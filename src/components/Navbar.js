import React from 'react';
import { Navbar, MenuItem, NavItem, NavDropdown, Nav } from 'react-bootstrap';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styles from './navbar.module.css';
import get from 'lodash/get';
import icon from '../uploads/icon.svg';
import classNames from 'classnames';

class NavbarComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            secondary: false,
        };
    }

    componentDidMount = () => {
        document.addEventListener('scroll', this.calculateScroll);
        this.calculateScroll();
    }

    componentWillUnmount = () => {
        document.removeEventListener('scroll', this.calculateScroll);
    }

    calculateScroll = (e) => {
        console.log(window.pageYOffset, this.state.transparent);
        if (window.pageYOffset < 600 && this.state.secondary === true) {
            this.setState({ secondary: false });
        } else if (window.pageYOffset >= 600 && this.state.secondary === false) {
            this.setState({ secondary: true });
        }
    }

    render = () => {
        return (
            <Navbar className={classNames({ [styles.navbar]: true, [styles.secondary]: this.state.secondary })} fixedTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>
                        <img className={styles.logo} height={25} src={icon} alt="Icon" /> Coderdojo
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Link
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link
                        </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarComponent;
