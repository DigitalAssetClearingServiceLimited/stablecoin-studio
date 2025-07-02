import { Global, css } from '@emotion/react';

const GlobalStyles = css`
	&::-webkit-scrollbar {
		width: 16px;
	}
	&::-webkit-scrollbar-track {
		margin: 0 10px;
	}
	&::-webkit-scrollbar-thumb {
		background: #d5e6f1;
		border-radius: 24px;
		border: 5px solid transparent;
		background-clip: padding-box;
	}
`;

export const ScrollBar = () => <Global styles={GlobalStyles} />;
