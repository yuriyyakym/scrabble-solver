import classNames from 'classnames';
import React, { FunctionComponent, useMemo } from 'react';

import { useTranslation } from 'state';

import PlainTiles from '../PlainTiles';

import styles from './Loading.module.scss';
import useInfiniteProgress from './useInfiniteProgress';

interface Props {
  children?: never;
  className?: string;
  estimatedDuration?: number;
  wave?: boolean;
}

const Loading: FunctionComponent<Props> = ({ className, estimatedDuration, wave = true }) => {
  const loading = useTranslation('loading');
  const content = useMemo<string[][]>(() => [[loading.toUpperCase()]], [loading]);
  const progress = useInfiniteProgress(estimatedDuration);
  const progressPercent = `${(progress * 100).toFixed(2)}%`;

  return (
    <div className={classNames(styles.loading, className)}>
      <div className={styles.dim} />
      <div className={styles.logo}>
        <PlainTiles className={classNames(styles.logoGrayscale)} content={content} wave={wave} />
        <PlainTiles
          className={classNames(styles.logoColor)}
          content={content}
          style={{ clipPath: `polygon(0% 0%, ${progressPercent} 0, ${progressPercent} 100%, 0% 100%)` }}
          wave={wave}
        />
      </div>
    </div>
  );
};

export default Loading;
