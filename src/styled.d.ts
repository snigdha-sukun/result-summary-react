import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			lightRed: string;
			orangeyYellow: string;
			greenTeal: string;
			cobaltBlue: string;
			lightSlateBlueBackground: string;
			lightRoyalBlueBackground: string;
			violetBlueCircle: string;
			persianBlueCircle: string;
			white: string;
			paleBlue: string;
			lightLavender: string;
			darkGrayBlue: string;
			lightGrayBlue: string;
			lightRedBg: string;
			orangeyYellowBg: string;
			greenTealBg: string;
			cobaltBlueBg: string;
		};
		fontSizes: {
			base: string;
		};
		fontWeights: {
			base: number;
			bold: number;
			bolder: number;
		};
	}
}
