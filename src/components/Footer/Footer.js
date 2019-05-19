import React, { Component } from 'react';
import styles from './Footer.module.css';
console.log(styles);
import globalStyles from '../../styles/global.module.css';
import { Col, Row, Grid } from 'react-bootstrap';
import icon from '../../uploads/icon.svg';

class Footer extends Component {
    constructor(props) {
        super();
        this.state = {
        };

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <footer className={styles.footer}>
                <Grid>
                    <Row>
                        <Col xs={6}>
                            <div>2019 &copy; Coderdojo Oosterhout</div>
                            <div>Gemaakt door: <a target="_blank" href="https://esstudio.site/">ESStudio</a> | <a href="/admin">Inloggen</a></div>
                        </Col>
                        <Col xs={6} className={globalStyles.textRight}>
                            <img className={styles.icon} src={icon} alt="Footer icon image" />
                        </Col>
                    </Row>
                </Grid>
            </footer>
        );
    }
}

export default Footer;
