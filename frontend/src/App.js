import './App.css';
import Main from './views/Main';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

// to apply roboto font with weights, un-comment these imports.
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
})

export default function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <div>
                <h1>all-in-one</h1>
                <Main/>
            </div>
        </ThemeProvider>
    );
}
