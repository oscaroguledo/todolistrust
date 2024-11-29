import PropTypes from 'prop-types';

export function Button({ text, type, className, icon, iconPosition }) {
    return (
        <button type={type} className={`td-btn ${className}`}>
            {icon && iconPosition === 'left' && <span className="td-icon">{icon}</span>}
            {text && <span className="td-text">{text}</span>}
            {icon && iconPosition === 'right' && <span className="td-icon">{icon}</span>}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string, // Text is optional when using only icons
    type: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.node, // Icon can be any valid React node
    iconPosition: PropTypes.oneOf(['left', 'right']), // Position of the icon
};

Button.defaultProps = {
    type: 'button',
    className: '',
    icon: null,
    iconPosition: 'left', // Default position for the icon
};

// Success Button
export function SuccessButton({ text, type, icon, iconPosition }) {
    return (
        <Button
            className="td-bg-success"
            text={text}
            type={type}
            icon={icon}
            iconPosition={iconPosition}
        />
    );
}

// Danger Button
export function DangerButton({ text, type, icon, iconPosition }) {
    return (
        <Button
            className="td-bg-danger"
            text={text}
            type={type}
            icon={icon}
            iconPosition={iconPosition}
        />
    );
}

// Primary Button
export function PrimaryButton({ text, type, icon, iconPosition }) {
    return (
        <Button
            className="td-bg-primary"
            text={text}
            type={type}
            icon={icon}
            iconPosition={iconPosition}
        />
    );
}

// Secondary Button
export function SecondaryButton({ text, type, icon, iconPosition }) {
    return (
        <Button
            className="td-bg-secondary"
            text={text}
            type={type}
            icon={icon}
            iconPosition={iconPosition}
        />
    );
}

// Warning Button
export function WarningButton({ text, type, icon, iconPosition }) {
    return (
        <Button
            className="td-bg-warning"
            text={text}
            type={type}
            icon={icon}
            iconPosition={iconPosition}
        />
    );
}

// Info Button
export function InfoButton({ text, type, icon, iconPosition }) {
    return (
        <Button
            className="td-bg-info"
            text={text}
            type={type}
            icon={icon}
            iconPosition={iconPosition}
        />
    );
}
