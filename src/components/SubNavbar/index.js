import { memo } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './SubNavbar.module.scss';

const cx = classNames.bind(styles);

const leftTabs = [
  'Home',
  'Shop',
  'Fruits & Vegetables',
  'Beverages',
  'Blog',
  'Contact',
];

const rightTabs = ['Trending Products', 'Almost Finished', 'SALE'];

function SubNavbar() {
  return (
    <nav className={cx('wrapper')} role='navigation'>
      <div className='container'>
        <div className={cx('inner')}>
          {/* Left section */}
          <div className={cx('left-section')}>
            {leftTabs.map((tab, index) => (
              <Button
                key={tab}
                transparent
                className={cx('subnav-tab')}
                rightIcon={
                  index < 2 ? <FontAwesomeIcon icon={faChevronDown} /> : null
                } // Chỉ có icon cho Home và Shop
                aria-label={`Navigate to ${tab}`}
              >
                {tab}
              </Button>
            ))}
          </div>

          {/* Right section */}
          <div className={cx('right-section')}>
            {rightTabs.map((tab) => (
              <Button
                key={tab}
                transparent
                className={cx('subnav-tab', {
                  sale: tab !== 'Trending Products',
                })}
                textClass={tab === 'SALE' ? cx('sale-text') : undefined}
                rightIcon={<FontAwesomeIcon icon={faChevronDown} />}
                aria-label={`View ${tab}`}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default memo(SubNavbar);
