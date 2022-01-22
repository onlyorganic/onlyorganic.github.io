import * as React from "react"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const crops = [
  {
    id: "paddy",
    title: "Paddy Cultivation: Our way of growing",
    description: (
      <Description
        data={[
          "Grow crop with proven traditional practices",
          "Collect Gin Berry plants (Gonji chettu) from nearby places and move them to beds",
          "Spread the Gin Berry plants across beds and ride the tractor",
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
  return <ul style={{ marginTop: 0 }}>{listItems}</ul>
}

export default function Crops() {
  return (
    <Grid container spacing={2}>
      {crops.map((crop) => (
        <Grid item xs={12} key={crop.id}>
          <div className="iframe-container">
            <iframe
              title={crop.title}
              src={crop.src}
              frameBorder="0"
              allowFullScreen
              width="100%"
              className="iframe"
            ></iframe>
          </div>
          <Box>
            <Typography variant="h6">{crop.title}</Typography>
            <Box sx={{ typography: "body2" }} color="text.secondary">
              {crop.description}
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}
