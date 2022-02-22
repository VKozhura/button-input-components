import classNames from "classnames";
import styles from "./Input.module.css";

export const Input = ({ error, disabled, helperText, value, size }) => {
	const inputClass = classNames({
		[styles.input]: true,
		[styles.inputError]: error,
		[styles.inputSmall]: size === "sm",
		[styles.inputMedium]: size === "md",
	});
	const smallClass = classNames({
		[styles.small]: true,
		[styles.smallError]: error,
	});
	return (
		<div className={styles.inputGroup}>
			<p className="title">
				&#8249;Input
				{error ? " error " : ""}
				{disabled ? " disabled " : ""}
				{helperText ? ` helperText='${helperText}' ` : ""}
				{value ? ` value='${value}' ` : ""}
				{size ? ` size='${size}' ` : ""}
				/&#8250;
			</p>
			<input
				className={inputClass}
				id=""
				type="text"
				placeholder="Placeholder"
				disabled={disabled}
				value={value}
			/>
			<label htmlFor="">Label</label>
			<small className={smallClass}>{helperText}</small>
		</div>
	);
};
