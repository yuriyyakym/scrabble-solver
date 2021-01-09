import classNames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

import styles from './Section.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
  title: string;
}

const Section: FunctionComponent<Props> = ({ children, className, title }) => (
  <div className={classNames(styles.section, className)}>
    <h2 className={styles.heading}>{title}</h2>
    <div>{children}</div>
  </div>
);

export default Section;
