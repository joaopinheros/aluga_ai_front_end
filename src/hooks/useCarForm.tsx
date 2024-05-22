import { useState } from "react";
import { Car } from "../interfaces/Car";

export const useCarForm = () => {
  const [car, setCar] = useState<Car>({
    model: "",
    year: 0,
    color: "",
    plate: "",
    mileage: 0,
    security: false,
    renavan: "",
    chassis: "",
    yearOfManufacture: 0,
    numberOfPorts: 0,
    typeFuel: "",
    available: false,
    additionalDetails: "",
    carModel: {
      id: 0,
      typeCar: "",
      brand: "",
    },
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      const isChecked = (event.target as HTMLInputElement).checked;
      setCar((prevCar) => ({
        ...prevCar,
        [name]: isChecked,
      }));
    } else {
      setCar((prevCar) => ({
        ...prevCar,
        [name]: value,
      }));
    }
  };

  return { car, handleChange };
};
