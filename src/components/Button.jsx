import classNames from "classnames";
import styles from "./Button.module.css";

const Button = ({ variant, disabled, disableshadow, color }) => {
	const btnClass = classNames({
		[styles.btn]: true,
		[styles.btnOutline]: variant === "outline",
		[styles.btnText]: variant === "text",
		[styles.btnNoShadow]: disableshadow,
		[styles.btnDefault]: color === "default",
		[styles.btnPrimary]: color === "primary",
		[styles.btnSecondary]: color === "secondary",
		[styles.btnDanger]: color === "danger",
	});
	return (
		<div>
			<p className="title">
				&#8249;Button
				{variant ? ` variant='${variant} '` : ""}
				{disabled ? " disabled " : ""}
				{disableshadow ? " disableshadow " : ""}
				{color ? ` color='${color} '` : ""}
				/&#8250;
			</p>
			<button className={btnClass} disabled={disabled}>
				{disabled ? "Disabled" : "Default"}
			</button>
		</div>
	);
};

export default Button;
