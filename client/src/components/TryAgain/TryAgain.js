import React from 'react';
import styles from '../../styles/TryAgain.scss';

/**
 * @description Renders error message in page if error
 */
const TryAgain = (props) => {
    // eslint-disable-next-line react/prop-types
    const {getData} = props;
    return (
        <div className={styles.container}>
            <span onClick={() => getData()}>Server Error. Try again</span>
            <i className="fas fa-redo" onClick={() => getData()}/>
        </div>
    );
};

export default TryAgain;
