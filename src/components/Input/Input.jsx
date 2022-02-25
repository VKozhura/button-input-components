import classNames from "classnames";
import styles from "./Input.module.css";

export const Input = ({ error, disabled, helperText, value, size, fullwidth, multiline, row }) => {
	const inputClass = classNames({
		[styles.input]: true,
		[styles.inputError]: error,
		[styles.inputSmall]: size === "sm",
		[styles.inputMedium]: size === "md",
		[styles.fullwidth]: fullwidth,
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
				{fullwidth ? ` fullwidth ` : ""}
				{multiline ? ` multiline row='${row}'` : ""}
				/&#8250;
			</p>
			{!multiline && (
				<input
					className={inputClass}
					id=""
					type="text"
					placeholder="Placeholder"
					disabled={disabled}
					value={value}
				/>
			)}
			{multiline && (
				<textarea
					rows={row}
					className={inputClass}
					id=""
					type="text"
					placeholder="Placeholder"
					disabled={disabled}
					value={value}
				/>
			)}

			<label htmlFor="">Label</label>
			<small className={smallClass}>{helperText}</small>
		</div>
	);
};
