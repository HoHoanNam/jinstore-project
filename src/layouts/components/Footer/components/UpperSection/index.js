import { memo } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './UpperSection.module.scss';

const cx = classNames.bind(styles);

function UpperSection() {
  return (
    <div className={cx('wrapper')}>
      <div className='container'>
        {/* Upper section */}
        <div className={cx('upper-section')}>
          {/* Newsletter */}
          <div className={cx('newsletter')}>
            {/* Newsletter title */}
            <h4 className={cx('newsletter-title')}>
              Join our newsletter for £10 offs
            </h4>

            {/* Newsletter desc */}
            <p className={cx('newsletter-desc')}>
              Register now to get latest updates on promotions & <br />
              coupons.Don’t worry, we not spam!
            </p>
          </div>

          {/* Register */}
          <div className={cx('register')}>
            {/* Register field */}
            <div className={cx('register-field')}>
              {/* Icon */}
              <div className={cx('envelop-icon')}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>

              {/* Input */}
              <input
                className={cx('register-input')}
                placeholder='Enter your email address'
              />

              {/* Button */}
              <Button className={cx('register-btn')}>SEND</Button>
            </div>

            {/* Terms */}
            <p className={cx('terms')}>
              <span>By subscribing you agree to our </span>
              <a href='#'>Terms & Conditions and Privacy & Cookies Policy.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(UpperSection);
