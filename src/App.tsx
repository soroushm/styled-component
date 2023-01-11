import React from 'react';
import ThemeProvider from './components/ThemeProvider';
import {BoxWrapper, Box} from "./components/Box";
import Flex from "./components/Flex";
import Text from "./components/Text";

const style = {
    container: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    box: {
        padding: 20,
        margin: 10
    }
}

function App() {


    return (
        <ThemeProvider>
            <Flex {...style.container}>
                <BoxWrapper {...style.box} stroke size="small" className="masoud">
                    <h1>Example</h1>
                    <Text textAlign="left" color="negative_500">
                        The quick brown fox jumps over the lazy dog.
                    </Text>
                </BoxWrapper>
                <BoxWrapper {...style.box} stroke size="small" className="masoud">
                    <h1>Example</h1>
                    <Text textAlign="left" color="negative_500">
                        The quick brown fox jumps over the lazy dog.
                    </Text>
                </BoxWrapper>
            </Flex>
        </ThemeProvider>
    );
}

export default App;
