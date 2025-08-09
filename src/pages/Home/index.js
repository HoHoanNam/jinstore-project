import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HeroSection from '~/components/HeroSection';
import CategoryList from '~/components/CategoryList';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <HeroSection />
      <CategoryList />
    </div>
  );
}

export default Home;
