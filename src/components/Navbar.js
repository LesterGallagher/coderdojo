import React from 'react';
import { Navbar, MenuItem, NavItem, NavDropdown, Nav } from 'react-bootstrap';
import { Link, graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import styles from './navbar.module.css';

export default props => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "icon.svg" }) {
                name
                publicURL
            }
        }
    `);

    console.log(data);

    const iconUrl = get(data, 'file.publicURL', null);

    return (
        <Navbar className={styles.navbar} fixedTop collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to={'/'}>
                    <img className={styles.logo} height={25} src={iconUrl} alt="Icon" /> Coderdojo
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
};
