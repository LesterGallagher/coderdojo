import React from 'react';
import { Navbar, MenuItem, NavItem, NavDropdown, Nav } from 'react-bootstrap';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styles from './navbar.module.css';
import get from 'lodash/get';
import icon from '../../uploads/icon.svg';
import classNames from 'classnames';

class NavbarComponent extends React.Component {

    constructor(props) {
        super(props);


        const { location, title, children } = props
        const rootPath = `${__PATH_PREFIX__}/`
        let header

        const isRoot = location.pathname === rootPath;

        this.state = {
            secondary: false,
            isRoot
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
        if (window.pageYOffset < 600 && this.state.secondary === true) {
            this.setState({ secondary: false });
        } else if (window.pageYOffset >= 600 && this.state.secondary === false) {
            this.setState({ secondary: true });
        }
    }

    preventDefault = e => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    render = () => {
        const { isRoot, secondary } = this.state;
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
                    {isRoot ? <Nav pullLeft>
                        <NavItem eventKey={11} href="#locaties">
                            Locaties
                        </NavItem>
                        <NavItem eventKey={11} href="#over">
                            Over
                        </NavItem>
                        <NavItem eventKey={11} href="#tutorials">
                            Tutorials
                        </NavItem>
                        <NavItem eventKey={11} href="#nieuws">
                            Nieuws
                        </NavItem>
                    </Nav> : null}
                    <Nav pullRight>
                        <NavItem componentClass={Link} type="button" href="/vrijwilligers" to="/vrijwilligers" eventKey={1}>
                            Mentor worden
                        </NavItem>
                        {/* <NavItem componentClass={Link} type="button" href="/lessen" to="/lessen" eventKey={2}>
                            Link
                        </NavItem> */}
                        <NavDropdown eventKey={3} href="javascript:void(0)" title="Online Tutorials" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} componentClass={Link} href="/lessen" to="/lessen">Alle Tutorials</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.2} componentClass={Link} href="/lessen/arduino" to="/lessen/arduino">Knutselen met Arduino</MenuItem>
                            <MenuItem eventKey={3.3} componentClass={Link} href="/lessen" to="/lessen/scratch">Scratch Leren</MenuItem>
                            <MenuItem eventKey={3.4} componentClass={Link} href="/lessen" to="/lessen/website-maken">Maak een eigen Website</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarComponent;
