import { memo } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faCartArrowDown,
  faMagnifyingGlass,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import Button from '~/components/Button';
import styles from './Search.module.scss';

const { general } = images;
const cx = classNames.bind(styles);

function Search() {
  return (
    <div className={cx('wrapper')}>
      <div className='container'>
        <div className={cx('inner')}>
          {/* Logo */}
          <div className={cx('logo-section')}>
            <img
              className={cx('logo')}
              src={general.jinstoreLogo}
              alt='JinStore Logo'
            />
          </div>

          {/* Search */}
          <div className={cx('search')}>
            <input
              id='search-input'
              spellCheck={false}
              autoComplete='off'
              className={cx('search-input')}
              placeholder='Search for products, categories or brands...'
            />

            <Button
              aria-label='Search'
              className={cx('search-btn')}
              leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            />
          </div>

          {/* Account section */}
          <div className={cx('account-section')}>
            <Button
              transparent
              aria-label='User account'
              className={cx('account-btn')}
              leftIcon={<FontAwesomeIcon icon={faUser} />}
            />

            <Button
              transparent
              aria-label='Sign in to account'
              className={cx('account-btn', 'text')}
            >
              <span className={cx('signin-text')}>Sign in</span>
              <br />
              <span>Account</span>
            </Button>

            <Button
              transparent
              aria-label='Wishlist'
              className={cx('account-btn')}
              leftIcon={<FontAwesomeIcon icon={faHeart} />}
            />

            <Button
              transparent
              aria-label='Shopping cart'
              className={cx('account-btn')}
              leftIcon={<FontAwesomeIcon icon={faCartArrowDown} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Search);
