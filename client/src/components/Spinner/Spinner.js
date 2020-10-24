import React from 'react';
import {ClipLoader} from 'react-spinners';
import {css} from '@emotion/core';
import styles from '../../styles/Spinner.scss';

const override = css`border-color: #46568a;`;

/**
 * @description Shows a spinner while the page is loading
 * @return {*}
 */
const SpinnerLoader = () => {
    return (
        <div className={styles.loaderContainer}>
            <ClipLoader
                sizeUnit={'px'}
                css={override}
                size={50}
                color={'#46568a'}
                loading
            />
        </div>
    );
};

export default SpinnerLoader;
