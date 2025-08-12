import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HeroSection from '~/components/HeroSection';
import CategoryList from '~/components/CategoryList';

import { products } from '~/data';
import Card from '~/components/Card';
import images from '~/assets/images';
import Banner from '~/components/Banner';

const cx = classNames.bind(styles);
const { banners } = images;
const { newArrivalList } = products;

function Home() {
  return (
    <div className={cx('wrapper')}>
      <HeroSection />
      <CategoryList />

      {/* Main content */}
      <div className={cx('inner')}>
        <div className='container'>
          {/* Banners */}
          <h3 className={cx('title')}>
            Category Products
            <span className={cx('sub-title')}>
              Do not miss the current offers until the end of March.
            </span>
          </h3>

          <div className='row' style={{ marginBottom: 40 }}>
            {/* Banner 1 */}
            <div className='col-lg-6'>
              <Banner
                widthPercent={60}
                src={banners.lemonBanner}
                subSlogan='Feed your family the best'
                slogan='Make your grocery shopping easy with us'
              />
            </div>

            {/* Banner 2 */}
            <div className='col-lg-6'>
              <Banner
                widthPercent={50}
                src={banners.chocolateBanner}
                slogan='Get your everyday needs here with us'
                subSlogan='A different kind of grocery store'
              />
            </div>
          </div>

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
