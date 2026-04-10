import { Link } from 'react-router-dom';

const variantClasses = {
    primary: 'border-[#384355] bg-[#384355] text-[#FDFDFD] hover:bg-[#384355]/75', 
    secondary: 'border-[#E8E8E2] bg-[#E8E8E2] text-[#384355] hover:bg-[#384355]/25',
};

const Button = ({
    children,
    to,
    type = 'button',
    variant = 'secondary',
    className = '',
}) => {
    const classes = [ 
        'inline-flex items-center justify-center rounded-full border-2 border- zinc-900 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition',
        variantClasses[variant] ?? variantClasses.secondary,
        className,
    ]
        .join(' ')
        .trim();

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={classes}>
            {children}
        </button>
    );
};

export default Button;