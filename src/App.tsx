import React from 'react';
import ThemeProvider from './components/ThemeProvider';
import Box from "./components/Box";
import Text from "./components/Text";

function App() {
  return (
      <ThemeProvider>
        <Box textAlign="center">
          <h1>Example</h1>
          <Text textAlign="left" color="negative_500">
            Choose from an ever-changing mix of meat, fish, Beyond Meat™ and health-conscious
            offerings.
          </Text>
        </Box>
      </ThemeProvider>
  );
}

export default App;
