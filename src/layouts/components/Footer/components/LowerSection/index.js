import { memo } from 'react';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import Button from '~/components/Button';
import styles from './LowerSection.module.scss';

const { payment } = images;
const cx = classNames.bind(styles);

const paymentList = [
  {
    name: 'Visa',
    image: payment.visa,
  },
  {
    name: 'Mastercard',
    image: payment.mastercard,
  },
  {
    name: 'Paypal',
    image: payment.paypal,
  },
  {
    name: 'Skrill',
    image: payment.skrill,
  },
  {
    name: 'Klarna',
    image: payment.klarna,
  },
];

function LowerSection() {
  return (
    <div className={cx('wrapper')}>
      <div className='container'>
        <div className={cx('lower-section')}>
          {/* Left section */}
          <div className={cx('left-section')}>
            {/* Copyright */}
            <p className={cx('copyright')}>
              Copyright 2024 © Jinstore WooCommerce WordPress Theme. <br />
              All right reserved. Powered by {''}
              <span className={cx('emphasis')}>BlackRise Themes.</span>
            </p>

            {/* Payment */}
            <ul className={cx('payment-list')}>
              {paymentList.map((item) => (
                <li key={item.name} className={cx('payment-item')}>
                  <Button href='#' className={cx('payment-btn')}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={cx('payment-img')}
                    />
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right section */}
          <div className={cx('right-section')}>
            <div className={cx('terms')}>
              <a href='#' className={cx('terms-link')}>
                Terms and Conditions
              </a>
              <a href='#' className={cx('terms-link')}>
                Privacy Policy
              </a>
              <a href='#' className={cx('terms-link')}>
                Order Tracking
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(LowerSection);
