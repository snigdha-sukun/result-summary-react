import { StyledHeader3 } from "../../App.styled";
import type { MarksData } from "../../types";
import Button from "../Button/Button";
import Marks from "../Marks/Marks";
import { StyledMarksContainer } from "./MarksContainer.styled";
import { useEffect, useState } from "react";

const MarksContainer = () => {
	const [data, setData] = useState<MarksData[]>([]);

	useEffect(() => {
		fetch("/data.json")
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<StyledMarksContainer>
			<StyledHeader3>Summary</StyledHeader3>
            <ul>
                {data.map((marks) => (
                    <Marks marks={marks} key={marks.category} />
                ))}
            </ul>
			<Button />
		</StyledMarksContainer>
	);
};
export default MarksContainer;
