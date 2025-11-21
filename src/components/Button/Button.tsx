import type { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

function Button({ children, width, height, ref, ...props}: ButtonProps) {

    return (
        <button 
        style={{
            height: height,
            width: width
        }}
        ref={ref} 
        className={styles['button']} 
        {...props}
        >{children}</button>
    );
};


export default Button;