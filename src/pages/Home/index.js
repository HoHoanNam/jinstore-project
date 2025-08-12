import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HeroSection from '~/components/HeroSection';
import CategoryList from '~/components/CategoryList';

import { products } from '~/data';
import Card from '~/components/Card';

const cx = classNames.bind(styles);
const { newArrivalList } = products;

function Home() {
  return (
    <div className={cx('wrapper')}>
      <HeroSection />
      <CategoryList />

      {/* Main content */}
      <div className={cx('inner')}>
        <div className='container'>
          {/* New arrivals */}
          <div className={cx('new-arrivals')}>
            {/* New arrivals title */}
            <h3 className={cx('title')}>
              New Arrivals
              <span className={cx('sub-title')}>
                Do not miss the current offers until the end of March.
              </span>
            </h3>

            {/* New arrivals list */}
            <div className='row'>
              {newArrivalList.map((item, index) => (
                <div key={index} className='col-lg-2'>
                  <Card product={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
