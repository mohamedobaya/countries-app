import { createGlobalStyle } from 'styled-components';

export const lightMode = {
    body : 'hsl(0, 0%, 98%)',
    fontColor : 'hsl(200, 15%, 8%)'
};

export const darkMode = {
    body: 'hsl(207, 26%, 17%)',
    fontColor: 'hsl(0, 0%, 100%)',
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;