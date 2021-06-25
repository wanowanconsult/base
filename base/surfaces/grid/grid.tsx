import * as React from 'react';
import classnames from 'classnames';

// @ts-ignore
import styles from "./grid.module.scss";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = "sm" | "md" | "lg";

type JustifyContent = "flex-start" | "center" | "flex-end" | "space-between";
type AlignItems = "flex-start" | "center" | "flex-end";

export type GridProps = {
    /**
     * Define if the grid is a container.
     */
    container?: boolean;

    /**
     * Define if the grid is an item.
     */
    item?: boolean;

    xs?: Cols;
    sm?: Cols;
    md?: Cols;
    lg?: Cols;
    spacing?: Spacing;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
} & React.HTMLAttributes<HTMLDivElement>;

export function Grid({
                         container,
                         item,
                         xs,
                         sm,
                         md,
                         lg,
                         spacing,
                         justifyContent,
                         alignItems,
                         children,
                         ...props
                     }: GridProps) {
    const classNames = classnames({
        [styles.Grid_container]: container,
        [styles.Grid_item]: item,
        [styles[`Grid_xs_${xs}`]]: xs,
        [styles[`Grid_sm_${sm}`]]: sm,
        [styles[`Grid_md_${md}`]]: md,
        [styles[`Grid_lg_${lg}`]]: lg,
        [styles[`Grid_spacing_${spacing}`]]: spacing,
        [styles[`Grid_justifyContent_${justifyContent}`]]: justifyContent,
        [styles[`Grid_alignItems_${alignItems}`]]: alignItems,
    });

    return (
      <div className={classNames} {...props}>
          {children}
      </div>
    );
}

Grid.defaultProps = {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    spacing: 'xs',
}
