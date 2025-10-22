import styles from "./Spinner.module.css";

type SpinnerSize = "sm" | "md" | "lg";

type SpinnerProps = {
  label?: string;
  size?: SpinnerSize;
  className?: string;
};

const sizeToPixels: Record<SpinnerSize, number> = {
  sm: 24,
  md: 48,
  lg: 64,
};

export const Spinner = ({ label, size = "md", className }: SpinnerProps) => {
  const dimension = sizeToPixels[size];
  const containerClassName = className
    ? `${styles.root} ${className}`
    : styles.root;

  return (
    <div className={containerClassName} role="status">
      <div
        className={styles.spinner}
        style={{ width: dimension, height: dimension }}
      />
      {label ? (
        <span className={styles.label}>{label}</span>
      ) : (
        <span className={styles.srOnly}>Loading</span>
      )}
    </div>
  );
};
