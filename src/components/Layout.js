import React from 'react'
import { Link } from 'gatsby'
import { Navbar, Grid, Row, Col, NavbarBrand, Form, FormControl, Button, MenuItem, NavItem, NavDropdown, Nav } from 'react-bootstrap';
import styles from './layout.module.css';
import classNames from 'classnames';
import NavbarComponent from './Navbar';

class Layout extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      transparentNavbar: window.pageYOffset < 100
    };
  }

  componentDidMount = () => {
    this.setState({ transparentNavbar: window.pageYOffset < 100 });
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const transparentNavbar = window.pageYOffset < 100;
    if (this.state.transparentNavbar !== transparentNavbar) {
      this.setState({ transparentNavbar });
    }
  }

  render() {
    console.log(window.pageYOffset);
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div></div>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div>
        <NavbarComponent />
        {header}
        {children}
      </div>
    )
  }
}

export default Layout;
