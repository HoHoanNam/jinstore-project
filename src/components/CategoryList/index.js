import { memo } from 'react';
import classNames from 'classnames/bind';

import { categories } from '~/data';
import styles from './CategoryList.module.scss';

const cx = classNames.bind(styles);

function CategoryList() {
  return (
    <div className={cx('wrapper')}>
      <div className='container'>
        <div className={cx('inner')}>
          {/* Category list */}
          <ul className={cx('category-list')}>
            {categories.map((category) => (
              // Category item
              <li key={category.name} className={cx('category-item')}>
                <a href='#'>
                  {/* Category img */}
                  <img
                    className={cx('category-img')}
                    src={category.image}
                    alt={category.name}
                  />

                  {/* Category name */}
                  <div className={cx('category-name')}>{category.name}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default memo(CategoryList);
