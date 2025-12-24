import type { AnchorHTMLAttributes } from 'react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: IconProp;
}

export function CustomLink({
  icon,
  children,
  className,
  ...rest
}: CustomLinkProps) {
  return (
    <a className={`${className} ${styles.customLink}`} {...rest}>
      {children}
      {!!icon && <FontAwesomeIcon icon={icon} />}
    </a>
  );
}
