import { memo } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner({ src, slogan, subSlogan, widthPercent }) {
  return (
    <div className={cx('banner')} style={{ backgroundImage: `url(${src})` }}>
      {/* Label banner */}
      <Button className={cx('label-banner')} onClick={null}>
        Only This Week
      </Button>

      {/* Slogan */}
      <h3 className={cx('slogan')} style={{ width: widthPercent + '%' }}>
        {slogan}
      </h3>

      {/* Sub slogan */}
      <p className={cx('sub-slogan')}>{subSlogan}</p>

      {/* Shop btn */}
      <Button
        className={cx('shop-btn')}
        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
      >
        Shop Now
      </Button>
    </div>
  );
}

export default memo(Banner);
