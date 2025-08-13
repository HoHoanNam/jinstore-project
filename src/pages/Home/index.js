import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HeroSection from '~/components/HeroSection';
import CategoryList from '~/components/CategoryList';

import images from '~/assets/images';
import Blog from '~/components/Blog';
import Card from '~/components/Card';
import Banner from '~/components/Banner';
import { products, blogs } from '~/data';

const cx = classNames.bind(styles);
const { banners } = images;
const { newArrivalList, remainingList } = products;

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

          <div className='row' style={{ marginBottom: 50 }}>
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

          {/* Best sellers */}
          <div className={cx('best-sellers')} style={{ marginTop: 50 }}>
            {/* Best sellers title */}
            <h3 className={cx('title')}>
              Best sellers
              <span className={cx('sub-title')}>
                Top-Selling Favorites, Grab Yours Now!
              </span>
            </h3>

            {/* Best sellers list */}
            <div className='row g-4'>
              {remainingList.map((item, index) => (
                <div key={index} className='col-lg-4'>
                  <Card orientation='horizontal' product={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Blogs */}
          <div className={cx('blogs')} style={{ marginTop: 50 }}>
            {/* Blog title */}
            <h3 className={cx('title')}>
              Our News
              <span className={cx('sub-title')}>
                Some of the new posts this week
              </span>
            </h3>

            {/* Blog list */}
            <div className='row'>
              {blogs.map((blog, index) => (
                <div key={index} className='col-lg-3'>
                  <Blog data={blog} />
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
