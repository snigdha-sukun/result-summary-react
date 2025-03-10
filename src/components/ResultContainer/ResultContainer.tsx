import { StyledHeader3 } from "../../App.styled";
import ResultCircle from "../ResultCircle/ResultCircle";
import {
	StyledResultContainer,
	StyledHeader2,
	StyledParagraph,
	StyledContent,
} from "./ResultContainer.styled";

const ResultContainer = () => {
	return (
		<StyledResultContainer>
			<StyledHeader3>Your Result</StyledHeader3>
			<ResultCircle />
			<StyledContent>
				<StyledHeader2>Great</StyledHeader2>
				<StyledParagraph>
					You scored higher than 65% of the people who have taken these tests.
				</StyledParagraph>
			</StyledContent>
		</StyledResultContainer>
	);
};
export default ResultContainer;
