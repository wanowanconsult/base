import * as React from 'react';

// @ts-ignore
import styles from "./grid.module.scss";

export type GridProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function Grid({children, ...props}: GridProps) {
    return (
      <div className={styles.Grid} {...props}>
          {children}
      </div>
    );
}
