//Complete the custom Input component based on the props that it expects to receive
import styles from "./button.module.css";
export const Button = ({
  colorScheme = "white",
  size = "md",
  variant,
  onClick,
  borderRadius = "5px",
  children,
}) => {
  return (
    <button
      style={{
        borderRadius: `${borderRadius}`,
      }}
      className={`${styles[colorScheme]} ${styles[size]} ${styles[variant]} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
