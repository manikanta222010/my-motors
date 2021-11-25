import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function AddMotorBike() {
  // useHistory to change page link(Navigation purpose)
  const history = useHistory();

  // useState on every category of data to take care of updation of that particular variable 
  const [brand, setBrand] = useState("");
  const [modal, setModal] = useState("");
  const [description, setDescription] = useState("");
  const [engine, setEngine] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");

  // Function to add bike to existing data
  const addBike = () => {
    const newBike = {
      brand, modal, description, engine, price, url
    };


    fetch(`https://619a40d09022ea0017a7b0a9.mockapi.io/bikes`, {
      method: "POST",
      body: JSON.stringify(newBike),
      headers: { 'Content-Type': 'application/json' }
    }).then(() => history.push("/motorbikes"));
  };

  return (
    <div className="add-bike-form">
      <Button onClick={() => history.goBack()}
        variant="oulined"
        style={{ color: "#000", marginRight: "auto" }}
        startIcon={<ArrowBackIcon />}
      >Back
      </Button>
      <Typography gutterBottom variant="h5" component="div" color="#000" sx={{ textAlign: 'center', textTransform: "uppercase" }}>
        Add Bike Info
      </Typography>
      <TextField value={brand} onChange={(event) => setBrand(event.target.value)} label="Enter Car Brand" variant="outlined" />
      <TextField value={modal} onChange={(event) => setModal(event.target.value)} label="Enter Modal Name" variant="outlined" />
      <TextField value={description} onChange={(event) => setDescription(event.target.value)} label="Description" variant="outlined" />
      <TextField value={engine} onChange={(event) => setEngine(event.target.value)} label="Engine Modal" variant="outlined" />
      <TextField value={price} onChange={(event) => setPrice(event.target.value)} label="Price" variant="outlined" />
      <TextField value={url} onChange={(event) => setUrl(event.target.value)} label="Image URL" variant="outlined" />
      <Button onClick={addBike} variant="contained" style={{ background: "#000" }}>Add</Button>
    </div>
  );
}
