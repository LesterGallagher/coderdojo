import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get';
import Helmet from 'react-helmet'
import { Button, Grid, Row, Col, Panel, Image, Glyphicon } from "react-bootstrap";
import Img from "gatsby-image/withIEPolyfill"
import styles from '../styles/global.module.css';
import { renderMarkdown } from '../utils/md';
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import BackgroundImage from '../components/BackgroundImage';
import classNames from 'classnames';

class Fab extends React.Component {

    render() {
        return (
            <Button className={classNames(styles.fab, 'fab')} {...this.props}>{this.props.children}</Button>
        )
    }
}

export default Fab;
