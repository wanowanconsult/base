import * as React from 'react';
import classnames from 'classnames';

// @ts-ignore
import styles from './defaults.module.scss';

export type ThemeProps = {
    /** Choose between light and dark mode. */
    mode?: 'light' | 'dark';
} & React.HTMLAttributes<HTMLDivElement>;

export const Theme = ({className, mode, ...props}: ThemeProps) => {
    return (
        <div
            {...props}
            className={classnames(styles.defaults, mode, className)}>

        </div>
    );
};
