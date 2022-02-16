import { css } from "styled-components";
import styled from "styled-components";

const handleVariantType = (variant) => {
	switch (variant) {
		case "outline":
			return "color: #3D5AFE; background-color: #ffffff; border: 1px solid #3D5AFE; box-shadow: none";
		default:
			return "color: #3f3f3f; background-color: #e0e0e0; border: none; box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2)";
	}
};

export const Button = styled.button`
	display: block;
	min-width: 81px;
	padding: 8px;
	margin-right: 20px;
	cursor: pointer;
	text-align: center;

	&:disabled {
		color: #9e9e9e;
	}

	&:hover,
	:focus {
		background-color: #aeaeae;
	}

	border-radius: 6px;
	${({ variant }) => handleVariantType(variant)}
`;

// 	${(props) =>
// 		props.primary &&
// 		css`
// 			color: #ffffff;
// 			background-color: #2962ff;
// 			&:hover,
// 			:focus {
// 				background-color: #0039cb;
// 			}
// 		`};

// 	${(props) =>
// 		props.secondary &&
// 		css`
// 			color: #ffffff;
// 			background-color: #455a64;
// 			&:hover,
// 			:focus {
// 				background-color: #1c313a;
// 			}
// 		`};

// 	${(props) =>
// 		props.danger &&
// 		css`
// 			color: #ffffff;
// 			background-color: #d32f2f;
// 			&:hover,
// 			:focus {
// 				background-color: #9a0007;
// 			}
// 		`};
// `;
