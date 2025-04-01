import {ThemeProvider} from "@/theme-provider.tsx";
import Homepage from "@/components/screens/HomePage/Homepage.tsx";

function App() {
  return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Homepage />
      </ThemeProvider>
  )
}

export default App
