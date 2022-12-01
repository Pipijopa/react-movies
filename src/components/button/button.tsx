import React from 'react';
import styles from './button.module.scss';
import cn from 'classnames';

interface IButton {
  secondary?: boolean;
  children: any;
}

export const Button: React.FC<IButton> = ({secondary, children}) => {
  return (
    <button
      className={cn(styles.btn, {[styles.btn_secondary]: secondary, [styles.btn_primary]: !secondary})}
      type="button">
      {children}
    </button>
  );
};

export default Button;
