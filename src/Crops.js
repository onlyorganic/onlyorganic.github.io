import * as React from "react"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const getDays = (start, end) => {
  const date1 = end ? new Date(end) : new Date()
  const date2 = new Date(start)
  const diffTime = Math.abs(date2 - date1)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays + " days"
}
const crops = [
  {
    id: "paddy",
    title: "Paddy Cultivation: Our way of growing",
    startTime: "15 December 2021",
    description: (
      <Description
        data={[
          "Grow crop with proven traditional practices",
          "Collect Gin Berry plant (Gonji chettu) stems from nearby places and move them to beds",
          "Spread the Gin Berry plants across beds and ride the tractor",
          "Follows Transplantation, Field Maintenance, Harvesting, Threshing, Winnowing, and Milling",
          "River water is used for the paddy, which adds additional nutritional value",
          "Crop rotation, to optimize nutrients in the soil",
          "No to anything which contaminates soil, air, water, and the food",
          "Type: Sugarless, Started on: 15 December 2021, Age: " +
            getDays("15 December 2021"),
        ]}
      />
    ),
    src: "https://www.youtube.com/embed/7IyxYKPqkBI?rel=0",
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
