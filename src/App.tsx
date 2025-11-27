import { ThemeProvider } from "styled-components";
import React from "react";
import { GlobalStyle, Placeholder, lightTheme, darkTheme } from "./lib";

function App() {
	const switcher = true;
	return (
		<ThemeProvider theme={switcher ? darkTheme : lightTheme}>
			<GlobalStyle />
			<main>
				<Placeholder text="Привет, мир!" />
			</main>
		</ThemeProvider>
	);
}

export default App;
