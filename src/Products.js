import * as React from "react"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const products = [
  {
    id: "paddy",
    title: "Paddy Cultivation: Our way of growing",
    description: (
      <Description
        data={[
          "Grow crop with proven traditional practices",
          "Collect Bin Berry plants from nearby places and move them to beds",
          "Spread the Bin Berry plants across beds and ride the tractor",
          "Follows Transplantation, Field Maintenance, Harvesting, Threshing, Winnowing, and Milling",
          "River water is used for the paddy, which adds additional nutritional value",
          "Crop rotation, to optimize nutrients in the soil",
          "No to anything which contaminates soil, air, water, and the food",
        ]}
      />
    ),
    src:
      "https://www.youtube.com/embed/playlist?list=PLtaoilwXUzaI-kKWYQeeqU-0zO1SoOH5f&rel=0",
  },
]

function Description(props) {
  const data = props.data
  const listItems = data.map((d) => <li key={d}>{d}</li>)
  return <ul>{listItems}</ul>
}
export default function HorizontalCentering() {
  return (
    <Grid container spacing={2}>
      {products.map((p) => (
        <Grid item xs={12} key={p.id}>
          <iframe
            title={p.title}
            src={p.src}
            frameBorder="0"
            allowFullScreen
            width="100%"
            height={window.parent.innerHeight / 2}
          ></iframe>
          <Box>
            <Typography variant="h6">{p.title}</Typography>
            <Box sx={{ typography: "body2" }} color="text.secondary">
              {p.description}
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}
