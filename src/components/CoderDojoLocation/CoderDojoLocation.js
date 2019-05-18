import React from 'react'
import { Link, graphql } from 'gatsby'
import { Button, Grid, Row, Col, Panel, Image, Glyphicon } from "react-bootstrap";
import Img from "gatsby-image/withIEPolyfill"
import globalStyles from '../../styles/global.module.css';
import classNames from 'classnames';
import Fab from '../Fab/Fab';


class CoderDojoLocation extends React.Component {
    render() {


        return (
            <Panel style={{ position: 'relative' }}>
                <Link to={this.props.link}>{this.props.image}</Link>
                <Panel.Body>
                    <h2>{this.props.title}</h2><br />
                    {this.props.children}
                    <div className={globalStyles.textRight}>
                    {/* <Fab bsStyle="warning"><Glyphicon glyph="plus" /></Fab> */}
                    <Link to={this.props.link}><Button bsStyle="warning" bsSize="xsmall">Meer info</Button></Link>
                    </div>
                </Panel.Body>
            </Panel>
        )
    }
}

export default CoderDojoLocation