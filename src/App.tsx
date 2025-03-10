import { StyledContainer } from "./App.styled";
import { GlobalStyles } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import MarksContainer from "./components/MarksContainer/MarksContainer";
import ResultContainer from "./components/ResultContainer/ResultContainer";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<StyledContainer>
				<ResultContainer />
				<MarksContainer />
			</StyledContainer>
		</ThemeProvider>
	);
}

export default App;
