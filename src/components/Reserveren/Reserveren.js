import React, { Component } from 'react';
import styles from './Reserveren.module.css';
import { Button } from 'react-bootstrap';
import { Link } from 'gatsby';
import globalStyles from '../../styles/global.module.css';

class Reserveren extends Component {
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
            <a target="_blank" rel="noopener nofollow noreferrer" href="https://theek5.lerendoeje.nu/activiteiten/482235.Kom-programmeren---Coderdojo-Kameleon-Oosterhout.-Maak-een-website-7.html">
                <Button bsStyle="warning" className={styles.btn}>Reserveren</Button>
            </a>
        );
    }
}

export default Reserveren;
