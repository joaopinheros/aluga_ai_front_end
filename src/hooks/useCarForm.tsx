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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/cars', { // Atualize a URL conforme necessário
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
      });

      if (!response.ok) {
        throw new Error('Failed to submit car details');
      }

      setSuccess(true);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { car, handleChange, handleSubmit, loading, error, success };
};
