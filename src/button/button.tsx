import './button.scss';

export const Button = (props: {title: string; secondary?: boolean}) => {
    return (
        <button className={`btn ${props.secondary ? 'btn_secondary' : 'btn_primary'}`} type="button">
            {props.title}
        </button>
    );
};

export default Button;
