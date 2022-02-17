import classNames from "classnames";
import styles from "./Button.module.css";

const Button = ({ variant, disabled, disableshadow, color, startIcon, endIcon, size }) => {
	const btnClass = classNames({
		[styles.btn]: true,
		[styles.btnOutline]: variant === "outline",
		[styles.btnText]: variant === "text",
		[styles.btnNoShadow]: disableshadow,
		[styles.btnDefault]: color === "default",
		[styles.btnPrimary]: color === "primary",
		[styles.btnSecondary]: color === "secondary",
		[styles.btnDanger]: color === "danger",
		[styles.btnStartIcon]: startIcon !== undefined,
		[styles.btnEndIcon]: endIcon !== undefined,
		[styles.btnSmall]: size === "sm",
		[styles.btnMedium]: size === "md",
		[styles.btnLarge]: size === "lg",
	});
	return (
		<div>
			<p className="title">
				&#8249;Button
				{variant ? ` variant='${variant} '` : ""}
				{disabled ? " disabled " : ""}
				{disableshadow ? " disableshadow " : ""}
				{color ? ` color='${color} '` : ""}
				{startIcon ? ` startIcon='${startIcon} '` : ""}
				{endIcon ? ` endIcon='${endIcon} '` : ""}
				{size ? ` size='${size} '` : ""}
				/&#8250;
			</p>
			<button className={btnClass} disabled={disabled}>
				<span>{disabled ? "Disabled" : "Default"}</span>
			</button>
		</div>
	);
};

export default Button;
