import './App.css';
import { Switch, Route } from "react-router-dom";
import { EditBike } from './EditBike';
import { BikeDetails } from './BikeDetails';
import { AddMotorBike } from './AddMotorBike';
import { CarDetails } from './CarDetails';
import { EditCar } from './EditCar';
import { Cars } from './Cars';
import { AddCar } from './AddCar';
import { MotorBikes } from './MotorBikes';
import { Welcome } from './Welcome';



export default function App() {

  return (
    <div className="App">

      <div className="main">
        {/* Following are the endpoints of the API */}
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/motorbike/edit/:id">
            <EditBike />
          </Route>
          <Route path="/motorbikes">
            <MotorBikes />
          </Route>
          <Route path="/add-motorbike">
            <AddMotorBike />
          </Route>
          <Route path="/motorbike/:id">
            <BikeDetails />
          </Route>

          <Route path="/car/edit/:id">
            <EditCar />
          </Route>
          <Route path="/cars">
            <Cars />
          </Route>
          <Route path="/add-car">
            <AddCar />
          </Route>
          <Route path="/car/:id">
            <CarDetails />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export const validateForm = (values) => {
  const errors = {}

  return errors
}
