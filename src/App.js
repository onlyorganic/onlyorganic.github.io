import * as React from "react"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import Products from "./Products"

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ pt: 2 }}>
          <Products />
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default App
