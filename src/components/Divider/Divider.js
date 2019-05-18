import React from 'react'
import { Link, graphql } from 'gatsby'
import { Button, Grid, Row, Col, Panel, Image, Glyphicon } from "react-bootstrap";
import globalStyles from '../../styles/global.module.css';
import classNames from 'classnames';

class Divider extends React.Component {
    render() {
        const className = classNames({
            [globalStyles.divider]: true,
            [globalStyles.dividerSm]: this.props.size === 'sm',
            [globalStyles.dividerMd]: this.props.size === 'md',
            [globalStyles.dividerLg]: this.props.size === 'lg',
        });
        return (
            <div role="seperator" className={className}>
                <span className={globalStyles.dividerInner}></span>
            </div>
        )
    }
}

export default Divider