import {ThemeProvider} from "@/theme-provider.tsx";
import Homepage from "@/components/screens/HomePage/Homepage.tsx";

function App() {
  return (
      <ThemeProvider defaultTheme="system">
          <Homepage />
      </ThemeProvider>
  )
}

export default App
