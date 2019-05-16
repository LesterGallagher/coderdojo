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
import Fab from './Fab';

class CoderDojoLocation extends React.Component {
    render() {


        return (
            <Panel style={{ position: 'relative' }}>
                <Image responsive src={this.props.image} />
                <Panel.Body>
                    <h2>{this.props.title}</h2><br />
                    {this.props.children}
                    <div className={styles.textRight}>
                    {/* <Fab bsStyle="warning"><Glyphicon glyph="plus" /></Fab> */}
                    <Link to={this.props.link}><Button bsStyle="warning" bsSize="xsmall">Meer info</Button></Link>
                    </div>
                </Panel.Body>
            </Panel>
        )
    }
}

export default CoderDojoLocation