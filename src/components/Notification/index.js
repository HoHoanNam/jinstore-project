import classNames from 'classnames/bind';
import { useState, useEffect, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

function calculateTimeLeft(endDate) {
  // +new Date() => convert sang number dưới dạng milliseconds
  const difference = +new Date(endDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

function Notification({ onClose }) {
  const endDate = '2025-09-04';
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const { days = 0, hours = 0, minutes = 0, seconds = 0 } = timeLeft;

  if (days + hours + minutes + seconds <= 0) {
    onClose && onClose(); // Tự ẩn khi hết thời gian
    return null;
  }

  return (
    <div className={cx('wrapper')}>
      <div className='container h-100'>
        <div className={cx('inner')}>
          {/* Discount section */}
          <div className={cx('discount-section')}>
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order
            in.
          </div>

          {/* Timestamp section */}
          <div aria-live='polite' className={cx('timestamp-section')}>
            <span className={cx('text')}>Until the end of the sale:</span>
            <span className={cx('number')}>{days}</span>
            <span className={cx('text')}>days</span>
            <span className={cx('number')}>{hours}</span>
            <span className={cx('text')}>hours</span>
            <span className={cx('number')}>{minutes}</span>
            <span className={cx('text')}>minutes</span>
            <span className={cx('number')}>{seconds}</span>
            <span className={cx('text')}>secs.</span>
          </div>

          {/* Close btn */}
          <button
            className={cx('close-btn')}
            aria-label='Close notification'
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(Notification);
