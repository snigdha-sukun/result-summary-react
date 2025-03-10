import type { MarksData } from "../../types";
import { StyledDiv, StyledLi, StyledMarks, StyledTotal } from "./Marks.styled";

type MarksProps = {
	marks: MarksData; // Replace 'any' with the appropriate type
};

const Marks = ({ marks }: MarksProps) => {
	return (
		<StyledLi color={marks.color}>
			<StyledDiv>
				<img src={marks.icon} alt={marks.category} />
				{marks.category}
			</StyledDiv>
			<StyledDiv>
				<StyledMarks>{marks.score}</StyledMarks>
				<StyledTotal> / 100</StyledTotal>
			</StyledDiv>
		</StyledLi>
	);
};
export default Marks;
