// Source: https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md
import { css } from 'styled-components';

const sizes = {
	iphone: 415,
	sm: 640,
	sl: 768,
	md: 1024,
	lg: 1280,
	xl: 1520,
};

// iterate through the sizes and create a media template
export default Object.keys(sizes).reduce((accumulator, label) => {
	const acc = accumulator;
	acc[label] = (...args) => css `
		@media (min-width: ${sizes[label]}px) {
			${css(...args)}
		}
	`;

	return acc;
}, {});
