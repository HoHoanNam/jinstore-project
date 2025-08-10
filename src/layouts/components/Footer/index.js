import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import UpperSection from './components/UpperSection';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <UpperSection />
    </div>
  );
}

export default Footer;
