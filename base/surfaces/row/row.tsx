import * as React from 'react';

// @ts-ignore
import styles from "./row.module.scss";
import classnames from "classnames";

type Positions = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ResponsivePositions = 1 | 2 | 3 | 4 | 5 | 6;

export type RowProps = {
    /**
     * the start position of the row in 'default' screen size.
     */
    ds?: Positions;

    /**
     * the end position of the row in 'default' screen size.
     */
    de?: Positions;

    /**
     * the start position of the row in 'medium' screen size.
     */
    ms?: ResponsivePositions;

    /**
     * the end position of the row in 'medium' screen size.
     */
    me?: ResponsivePositions;

    /**
     * the start position of the row in 'small' screen size.
     */
    ss?: ResponsivePositions;

    /**
     * the end position of the row in 'small' screen size.
     */
    se?: ResponsivePositions;

} & React.HTMLAttributes<HTMLDivElement>;

export function Row({
                        ds = 1,
                        de = 12,
                        ms = 1,
                        me = 6,
                        ss = 1,
                        se = 6,
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
