import { memo } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import Button from '~/components/Button';
import styles from './HeroSection.module.scss';

const cx = classNames.bind(styles);

function HeroSection() {
  return (
    <div
      className={cx('wrapper')}
      style={{ backgroundImage: `url(${images.heroSection})` }}
    >
      <div className='container'>
        <div className={cx('inner')}>
          {/* Weekend discount btn */}
          <div>
            <Button className={cx('weekend-discount-btn')}>
              Weekend Discount
            </Button>
          </div>

          {/* Title */}
          <div className={cx('hero-title')}>
            Shopping with us for <br /> better quality and the <br /> best price
          </div>

          {/* Description */}
          <div className={cx('hero-desc')}>
            <span>
              We have prepared special discounts for you on grocery products.
            </span>
            <br />
            <span>Don't miss these opportunities...</span>
          </div>

          {/* Actions */}
          <div className={cx('actions')}>
            {/* Shop btn */}
            <Button
              className={cx('shop-btn')}
              rightIcon={<FontAwesomeIcon icon={faBasketShopping} />}
            >
              Shop now
            </Button>

            {/* Price-section */}
            <div className={cx('price-section')}>
              <div>
                <span className={cx('price')}>$21.67</span>
                <span className={cx('original-price')}>$26.67</span>
              </div>
              <div className={cx('reminder')}>
                Don't miss this limited time offer.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(HeroSection);
