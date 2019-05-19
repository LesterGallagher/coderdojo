import React from 'react'
import { Link, graphql } from 'gatsby'
import { Button, Grid, Row, Col, Panel, Image, Glyphicon } from "react-bootstrap";
import Img from "gatsby-image/withIEPolyfill"
import globalStyles from '../../styles/global.module.css';
import proptTypes from 'prop-types';

class LesModule extends React.Component {
    render() {


        return (
            <Panel style={{ position: 'relative' }}>
                <Link to={this.props.link}>{this.props.image}</Link>
                <Panel.Body>
                    <h2>{this.props.title}</h2><br />
                    {this.props.children}
                    <div className={globalStyles.textLeft}>
                    {/* <Fab bsStyle="warning"><Glyphicon glyph="plus" /></Fab> */}
                        <Link to={this.props.link}><Button bsStyle="info" className={globalStyles.h5}>{this.props.btnText || 'Beginnen 🎉'}</Button></Link>
                    </div>
                </Panel.Body>
            </Panel>
        )
    }
}

LesModule.proptTypes = {
    link: proptTypes.string,
    image: proptTypes.element,
    title: proptTypes.string,
};

export default LesModule