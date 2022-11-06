//Complete the custom Input component based on the props that it expects to receive
import styles from "./input.module.css";
export const Input = ({
  type = "text",
  onChange,
  size,
  variant,
  value = "",
}) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${styles[size]} ${styles[variant]}`}
      type={type}
    />
  );
};
