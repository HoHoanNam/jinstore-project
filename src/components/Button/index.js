import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  transparent,
  leftIcon,
  rightIcon,
  className,
  textClass,
  leftIconClass,
  rightIconClass,
  children,
  href,
  onClick,
  ...props
}) {
  const classes = classNames(cx('btn', { transparent }), className);
  const textClasses = classNames(cx('children'), textClass);
  const leftIconClasses = classNames(cx('icon'), leftIconClass);
  const rightIconClasses = classNames(cx('icon'), rightIconClass);

  const Component = href ? 'a' : 'button';
  const componentProps = href ? { href, ...props } : { onClick, ...props };

  return (
    <Component className={classes} {...componentProps}>
      {leftIcon && <span className={leftIconClasses}>{leftIcon}</span>}
      {children && <span className={textClasses}>{children}</span>}
      {rightIcon && <span className={rightIconClasses}>{rightIcon}</span>}
    </Component>
  );
}

export default Button;
