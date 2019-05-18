import React from 'react'
import { Link, graphql } from 'gatsby'
import { Button, Grid, Row, Col, Panel, Image, Glyphicon } from "react-bootstrap";
import styles from '../styles/global.module.css';
import classNames from 'classnames';

class Divider extends React.Component {
    render() {
        const className = classNames({
            [styles.divider]: true,
            [styles.dividerSm]: this.props.size === 'sm',
            [styles.dividerMd]: this.props.size === 'md',
            [styles.dividerLg]: this.props.size === 'lg',
        });
        return (
            <div role="seperator" className={className}>
                <span className={styles.dividerInner}></span>
            </div>
        )
    }
}

export default Divider