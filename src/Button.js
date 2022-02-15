import { css } from "styled-components";
import styled from "styled-components";

const Button = styled.button`
	display: block;
	min-width: 81px;
	padding: 8px;
	margin-right: 20px;
	text-align: center;

	color: #3f3f3f;
	background-color: #e0e0e0;
	&:hover,
	:focus {
		background-color: #aeaeae;
	}

	box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
	border: none;
	border-radius: 6px;

	${(props) =>
		props.primary &&
		css`
			color: #ffffff;
			background-color: #2962ff;
			&:hover,
			:focus {
				background-color: #0039cb;
			}
		`};

	${(props) =>
		props.secondary &&
		css`
			color: #ffffff;
			background-color: #455a64;
			&:hover,
			:focus {
				background-color: #1c313a;
			}
		`};

	${(props) =>
		props.danger &&
		css`
			color: #ffffff;
			background-color: #d32f2f;
			&:hover,
			:focus {
				background-color: #9a0007;
			}
		`};
`;

export default Button;
