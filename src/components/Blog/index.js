import { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Blog.module.scss';

const cx = classNames.bind(styles);

function Blog({ data }) {
  return (
    <div className={cx('blog')}>
      {/* Image section */}
      <div className={cx('img-section')}>
        {/* Blog img */}
        <img src={data.src} alt={data.title} className={cx('blog-img')} />
      </div>

      {/* Blog details */}
      <div className={cx('blog-details')}>
        {/* Blog title */}
        <h4 className={cx('blog-title')}>{data.title}</h4>

        {/* Blog desc */}
        <p className={cx('blog-desc')}>{data.desc}</p>

        {/* Byline */}
        <div className={cx('byline')}>
          <span className='fst-italic'>by</span> {''}
          <span className='fw-semibold'>{data.author}</span> {''}
          <span className='fs-4'>&bull;</span> {''}
          <span>{data.timestamp}</span>
        </div>
      </div>

      {/* Label */}
      <span className={cx('blog-label')}>Uncategorized</span>
    </div>
  );
}

export default memo(Blog);
