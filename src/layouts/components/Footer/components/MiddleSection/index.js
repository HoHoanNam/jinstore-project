import { memo } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import {
  faApple,
  faXTwitter,
  faFacebookF,
  faInstagram,
  faGooglePlay,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

import { columnData } from '~/data';
import Button from '~/components/Button';
import styles from './MiddleSection.module.scss';

const cx = classNames.bind(styles);
const { secondColumnData, thirdColumnData, fourthColumnData } = columnData;

const socials = [
  {
    socialIconClass: 'facebook-icon',
    type: <FontAwesomeIcon icon={faFacebookF} />,
  },
  {
    socialIconClass: 'x-icon',
    type: <FontAwesomeIcon icon={faXTwitter} />,
  },
  {
    socialIconClass: 'instagram-icon',
    type: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    socialIconClass: 'linkedin-icon',
    type: <FontAwesomeIcon icon={faLinkedinIn} />,
  },
];

function MiddleSection() {
  return (
    <div className={cx('wrapper')}>
      <div className='container'>
        <div className={cx('middle-section')}>
          <div className='row'>
            {/* First column */}
            <div className='col-lg-3'>
              {/* Title */}
              <h4 className={cx('title')}>Do You Need Help ?</h4>

              {/* Desc */}
              <p className={cx('desc')}>
                Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
                Pressa fåmoska.
              </p>

              {/* Info */}
              <div className={cx('info')}>
                <div className={cx('info-icon')}>
                  <FontAwesomeIcon icon={faPhoneVolume} />
                </div>

                <div className={cx('info-content')}>
                  <p className={cx('info-text')}>Monday-Friday: 08am-09pm</p>
                  <p className={cx('info-phone')}>0 800 300-353</p>
                </div>
              </div>

              {/* Contact */}
              <div className={cx('contact')}>
                <div className={cx('contact-icon')}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>

                <div className={cx('contact-content')}>
                  <p className={cx('contact-text')}>
                    Need help with your order?
                  </p>
                  <p className={cx('contact-email')}>info@example.com</p>
                </div>
              </div>
            </div>

            {/* Second column */}
            <div className='col-lg-2'>
              {/* Title */}
              <h4 className={cx('title')}>Make Money with Us</h4>

              {/* List */}
              <ul className={cx('list')}>
                {secondColumnData.map((data) => (
                  <li key={data} className={cx('list-item')}>
                    <a href='#'>{data}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Third column */}
            <div className='col-lg-2'>
              {/* Title */}
              <h4 className={cx('title')}>Let Us Help You</h4>

              {/* List */}
              <ul className={cx('list')}>
                {thirdColumnData.map((data) => (
                  <li key={data} className={cx('list-item')}>
                    <a href='#'>{data}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fourth column */}
            <div className='col-lg-2'>
              {/* Title */}
              <h4 className={cx('title')}>Get to Know Us</h4>

              {/* List */}
              <ul className={cx('list')}>
                {fourthColumnData.map((data) => (
                  <li key={data} className={cx('list-item')}>
                    <a href='#'>{data}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fifth column */}
            <div className='col-lg-3'>
              {/* Title */}
              <h4 className={cx('title')}>Download our app</h4>

              {/* Download apps */}
              <div className={cx('download-apps')}>
                {/* Google Play */}
                <div className={cx('download-app')}>
                  {/* Google Play btn */}
                  <Button
                    href='#'
                    className={cx('download-btn')}
                    leftIconClass={cx('download-icon')}
                    leftIcon={<FontAwesomeIcon icon={faGooglePlay} />}
                  >
                    <span className={cx('msg')}>GET IT ON</span>
                    <br />
                    <span className={cx('download-app-name')}>Google Play</span>
                  </Button>

                  {/* Download msg */}
                  <div className={cx('download-msg')}>
                    Download App Get <br />
                    -10% Discount
                  </div>
                </div>

                {/* App Store */}
                <div className={cx('download-app')}>
                  {/* App Store btn */}
                  <Button
                    href='#'
                    className={cx('download-btn')}
                    leftIconClass={cx('download-icon')}
                    leftIcon={<FontAwesomeIcon icon={faApple} />}
                  >
                    <span className={cx('msg')}>Download on the</span>
                    <br />
                    <span className={cx('download-app-name')}>App Store</span>
                  </Button>

                  {/* Download msg */}
                  <div className={cx('download-msg')}>
                    Download App Get <br />
                    -20% Discount
                  </div>
                </div>
              </div>

              {/* Social apps */}
              <div className={cx('social-apps')}>
                {/* Social Following */}
                <p className={cx('social-following')}>
                  Follow us on social media:
                </p>

                {/* Social list */}
                <ul className={cx('social-list')}>
                  {socials.map((social) => (
                    <li className={cx('social-item')}>
                      <Button
                        href='#'
                        className={cx('social-btn')}
                        leftIconClass={cx(social.socialIconClass)}
                        leftIcon={social.type}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(MiddleSection);
