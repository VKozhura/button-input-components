import classNames from "classnames";

const Button = ({ variant, disabled, disableshadow, color }) => {
	const btnClass = classNames({
		btn: true,
		[`btn-${variant}`]: variant !== undefined,
		"btn-no-shadow": disableshadow,
		[`btn-${color}`]: color !== undefined,
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
