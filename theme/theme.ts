// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
    red: {
        500: "#EE1B24",
        600: "#EE1B24",
        700: "#EE1B24",
        800: "#EE1B24"
    }
  },
})

export default theme;