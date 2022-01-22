import * as React from "react"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Crops from "./Crops"
import CssBaseline from "@mui/material/CssBaseline"

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ pt: 2 }}>
          <Crops />
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default App
