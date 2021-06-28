import * as React from 'react';

// @ts-ignore
import styles from "./row.module.scss";

type DefaultPositions = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Positions = 1 | 2 | 3 | 4 | 5 | 6;

export type RowProps = {
    /**
     * a text to be rendered in the component.
     */
    defaultStart: DefaultPositions;

    /**
     * a text to be rendered in the component.
     */
    defaultEnd: DefaultPositions;

    /**
     * a text to be rendered in the component.
     */
    mediumStart: Positions;

    /**
     * a text to be rendered in the component.
     */
    mediumEnd: Positions;

    /**
     * a text to be rendered in the component.
     */
    smallStart: Positions;

    /**
     * a text to be rendered in the component.
     */
    smallEnd: Positions;

} & React.HTMLAttributes<HTMLDivElement>;

export function Row({
                        defaultStart,
                        defaultEnd,
                        mediumStart,
                        mediumEnd,
                        smallStart,
                        smallEnd,
                        children,
                        ...props
                    }: RowProps) {
    return (
      <div className={styles.Row} {...props}>
          {children}
      </div>
    );
}

Row.defaultProps = {
    defaultStart: 1,
    defaultEnd: 12,
    mediumStart: 1,
    mediumEnd: 6,
    smallStart: 1,
    smallEnd: 6
}
