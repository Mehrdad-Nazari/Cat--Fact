import React, { useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Axios from "axios";
import { Pets } from "@mui/icons-material";

function App() {
  const [fact, setFact] = useState(
    "I want to tell you some facts that you don't know about us. . ."
  );

  const fetchFact = async () => {
    try {
      const response = await Axios.get("https://catfact.ninja/fact");
      setFact(response.data.fact);
    } catch (error) {
      console.error("Error fetching fact:", error);
    }
  };

  return (
    <div className="full-height-bg">
      <div className="container">
        <Card
          sx={{
            maxWidth: 500,
            textAlign: "center",
            borderRadius: 2,
            bgcolor: "#ddd",
            mx: "auto",
          }}
        >
          <Button
            sx={{ width: 300, my: 2 }}
            onClick={fetchFact}
            variant="outlined"
            startIcon={<Pets />}
          >
            Tell me a Fact ...
          </Button>

          <CardMedia
            component="img"
            height="260"
            image="https://bit.ly/fcc-relaxing-cat"
            alt="Relaxing cat"
          />
          <CardContent>
            <Box sx={{ height: 175, mb: 2 }}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                textAlign="center"
                fontFamily="Luminari', sans-serif;"
              >
                {fact}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
export default App;