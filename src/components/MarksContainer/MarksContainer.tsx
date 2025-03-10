import { StyledHeader3 } from "../../App.styled";
import Button from "../Button/Button";
import Marks from "../Marks/Marks";
import { StyledMarksContainer } from "./MarksContainer.styled";
import useFetchMarks from "./useFetchMarks";

const MarksContainer = () => {
	const { marks } = useFetchMarks();

	return (
		<StyledMarksContainer>
			<StyledHeader3>Summary</StyledHeader3>
            <ul>
                {marks.map((mark) => (
                    <Marks marks={mark} key={mark.category} />
                ))}
            </ul>
			<Button />
		</StyledMarksContainer>
	);
};
export default MarksContainer;
