import { Link } from 'react-router-dom';

const variantClasses = {
    primary: 'border-[#384355] bg-[#384355] text-[#FDFDFD] shadow-[3px_3px_0px_0px_#FCF886] hover:shadow-[5px_5px_0px_0px_#FCF886] active:shadow-[1px_1px_0px_0px_#FCF886]', 
    secondary: 'border-[#384355] bg-[#E8E8E2] text-[#384355] shadow-[3px_3px_0px_0px_#384355] hover:shadow-[5px_5px_0px_0px_#384355] active:shadow-[1px_1px_0px_0px_#384355]',
    accent: 'border-[#384355] bg-[#FCF886] text-[#384355] shadow-[3px_3px_0px_0px_#384355] hover:shadow-[5px_5px_0px_0px_#384355] active:shadow-[1px_1px_0px_0px_#384355]',
};

const Button = ({
    children,
    to,
    type = 'button',
    variant = 'secondary',
    className = '',
    onClick,
    disabled = false
}) => {
    const classes = [ 
        'inline-flex items-center justify-center rounded-full border-2 border-[#384355] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.24em] transition-all duration-200 ease-in-out transform hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
        variantClasses[variant] ?? variantClasses.secondary,
        className,
    ]
        .join(' ')
        .trim();

    if (to) {
        return (
            <Link to={to} className={classes} onClick={onClick}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;