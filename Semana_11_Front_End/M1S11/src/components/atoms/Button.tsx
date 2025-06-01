type ButtonProps = {
    text: string;
    onClick?: () => void;
    variant?: 'primary' | 'secundary';
    className?: string;
}

export const Button = ({text, onClick, variant = 'primary', className} : ButtonProps) => {

    const varianClasses = {
        primary: 'btn-primary',
        secundary: 'btn-secundary',
    };

    return(
        <button
            className={`btn ${varianClasses[variant]} ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );

}