import React from 'react';
import './button.scss';

interface IButton {
    title: string;
    secondary?: boolean;
}

export const Button = ({title, secondary}: IButton) => {
    return (
        <button className={`btn ${secondary ? 'btn_secondary' : 'btn_primary'}`} type="button">
            {title}
        </button>
    );
};

export default Button;
