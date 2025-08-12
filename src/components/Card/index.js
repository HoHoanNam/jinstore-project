import { memo } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullhorn,
  faShopSlash,
  faWarehouse,
  faHeartPulse,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Card.module.scss';
import Button from '~/components/Button';
import { getRatingImage } from '~/assets/images';

const cx = classNames.bind(styles);

const getStatusIcon = (type) => {
  let statusIcon;

  switch (type) {
    case 'In Stock':
      statusIcon = <FontAwesomeIcon icon={faWarehouse} />;
      break;
    case 'Coming Soon':
      statusIcon = <FontAwesomeIcon icon={faBullhorn} />;
      break;
    case 'Out of Stock':
      statusIcon = <FontAwesomeIcon icon={faShopSlash} />;
      break;
    default:
      console.log('Invalid status!');
  }

  return statusIcon;
};

const getStatusClass = (type) => {
  let statusClass;

  switch (type) {
    case 'In Stock':
      statusClass = 'instock';
      break;
    case 'Coming Soon':
      statusClass = 'coming-soon';
      break;
    case 'Out of Stock':
      statusClass = 'out-of-stock';
      break;
    default:
      console.log('Invalid status!');
  }

  return statusClass;
};

function Card({ orientation = 'vertical', product }) {
  const cardClass = cx('card', { [orientation]: orientation });

  return (
    <div className={cardClass}>
      {/* Product image */}
      <div className={cx('img-section')}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className={cx('product-img')}
        />
      </div>

      {/* Product details */}
      <div className={cx('product-details')}>
        {product.isOrganic && (
          <Button className={cx('organic-btn')}>ORGANIC</Button>
        )}
        {product.isColdSale && (
          <Button className={cx('cold-sale-btn')}>COLD SALE</Button>
        )}

        {/* Name */}
        <h4 className={cx('product-name')}>{product.name}</h4>

        {/* Rating section */}
        <div className={cx('rating-section')}>
          {/* Rating stars */}
          <div className={cx('rating-stars-wrapper')}>
            <img
              className={cx('rating-stars')}
              src={getRatingImage(product.rating)}
              alt={'Rating: ' + product.rating}
            />
            <span>&#58;</span>
          </div>

          {/* Num of reviews */}
          <div className={cx('num-of-reviews')}>{product.numOfReviews}</div>
        </div>

        {/* Price section */}
        <div className={cx('price-section')}>
          {/* Price */}
          <span className={cx('price')}>${product.price.toFixed(2)}</span>
          {/* Original price */}
          {product.originalPrice && (
            <span className={cx('original-price')}>
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className={cx('actions')}>
          {/* Action btn */}
          <Button
            leftIcon={getStatusIcon(product.status)}
            className={cx(getStatusClass(product.status))}
          />

          {/* Status text */}
          <span className={cx('status-text')}>{product.status}</span>
        </div>

        {/* Labels */}
        {/* Discount label */}
        {product.discountPercentage && (
          <div className={cx('discount-label')}>
            {product.discountPercentage}%
          </div>
        )}

        {/* Wishlist label */}
        <Button
          className={cx('wishlist-label')}
          leftIcon={<FontAwesomeIcon icon={faHeartPulse} />}
        />
      </div>
    </div>
  );
}

export default memo(Card);
