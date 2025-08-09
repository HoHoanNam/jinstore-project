import { memo } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

const tabs = ['About Us', 'My account', 'Wishlist'];

function Navbar() {
  return (
    <div className={cx('wrapper')}>
      <div className='container h-100'>
        <div className={cx('inner')}>
          {/* Tabs */}
          <div className={cx('tabs')}>
            {tabs.map((tab) => (
              <Button
                key={tab}
                transparent
                className={cx('navbar-tab')}
                aria-label={`Navigate to ${tab}`}
              >
                {tab}
              </Button>
            ))}
          </div>

          {/* Seperate */}
          <div className={cx('seperate')}></div>

          {/* Operating hours */}
          <div className={cx('operating-hours')}>
            <span className={cx('text')}>We deliver to you every day from</span>
            <span className={cx('hours')}>7:00 to 23:00</span>
          </div>

          {/* Actions */}
          <div className={cx('actions')}>
            <Button
              transparent
              aria-label='Select language'
              className={cx('action-btn')}
              rightIcon={<FontAwesomeIcon icon={faChevronDown} />}
            >
              English
            </Button>

            <Button
              transparent
              aria-label='Select currency'
              className={cx('action-btn')}
              rightIcon={<FontAwesomeIcon icon={faChevronDown} />}
            >
              USD
            </Button>

            <Button
              transparent
              aria-label='Track order'
              className={cx('action-btn')}
            >
              Order Tracking
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Navbar);
