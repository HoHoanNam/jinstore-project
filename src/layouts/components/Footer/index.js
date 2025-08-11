import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import UpperSection from './components/UpperSection';
import MiddleSection from './components/MiddleSection';
import LowerSection from './components/LowerSection';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <UpperSection />
      <MiddleSection />
      <LowerSection />
    </div>
  );
}

export default Footer;
