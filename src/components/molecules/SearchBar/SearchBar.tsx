import type { ChangeEvent } from "react";
import { Input } from "@/components/atoms/Input";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.root}>
      <Input
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        spellCheck={false}
        fullWidth
      />
    </div>
  );
}
