import * as React from 'react';
import {ReactNode, useState} from 'react';
import classNames from 'classnames';

import {Loader} from "@wanowanconsult/base.elements.loader";

//@ts-ignore
import styles from './button.module.scss';


export type ButtonProps = {
    /**
     * determine which component is used as loader
     */
    loader?: ReactNode;

    /**
     * set the state of the button either 'loading' on not
     */
    loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
                           loader = <Loader />,
                           loading = false,
                           className,
                           onClick,
                           children,
                           ...rest
                       }: ButtonProps) {

    let activePromises = new Set<Promise<any>>();
    const [isLoading, setIsLoading] = useState(false);

    const _handleClick = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (!onClick) return;

        const promise = Promise.resolve(onClick.call(this, event)).catch(() => {
        });

        setIsLoading(true);
        activePromises.add(promise);
        promise.then(() => _handleResolve(promise));
    }

    const _handleResolve = (promise: Promise<any>) => {
        activePromises.delete(promise);

        if (activePromises.size === 0) {
            setIsLoading(false);
        }
    }

    const _isLoading = (loading !== undefined && loading) || isLoading;
    const content = _isLoading ? loader : children;

    return (
      <button
        {...rest}
        disabled={_isLoading}
        className={classNames(className, styles.Button)}
        onClick={_handleClick}>
          {content}
      </button>
    );
}
