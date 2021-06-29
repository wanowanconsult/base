import * as React from 'react';

// @ts-ignore
import styles from "./row.module.scss";
import classnames from "classnames";

type DefaultPositions = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type MediumPositions = 1 | 2 | 3 | 4 | 5 | 6;
type SmallPositions = 1 | 2 | 3 | 4;

export type RowProps = {
    /**
     * the start position of the row in 'default' screen size.
     */
    ds?: DefaultPositions;

    /**
     * the end position of the row in 'default' screen size.
     */
    de?: DefaultPositions;

    /**
     * the start position of the row in 'medium' screen size.
     */
    ms?: MediumPositions;

    /**
     * the end position of the row in 'medium' screen size.
     */
    me?: MediumPositions;

    /**
     * the start position of the row in 'small' screen size.
     */
    ss?: SmallPositions;

    /**
     * the end position of the row in 'small' screen size.
     */
    se?: SmallPositions;

} & React.HTMLAttributes<HTMLDivElement>;

export function Row({
                        ds = 1,
                        de = 12,
                        ms = 1,
                        me = 6,
                        ss = 1,
                        se = 4,
                        children,
                        ...props
                    }: RowProps) {

    console.log('Styles:', styles);

    const classNames = classnames({
        [styles[`Row_default_${ds}_${de}`]]: ds && de,
        [styles[`Row_medium_${ms}_${me}`]]: ms && me,
        [styles[`Row_small_${ss}_${se}`]]: ss && se
    });

    console.log('Classnames:', classNames);

    return (
      <div className={classNames} {...props}>
          {children}
      </div>
    );
}
