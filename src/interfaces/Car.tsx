import { CarModel } from "./CarModel";

export interface Car {
    id?: number;
    model: string;
    year: number;
    color: string;
    plate: string;
    mileage: number;
    security: boolean;
    renavan: string;
    chassis: string;
    yearOfManufacture: number;
    numberOfPorts: number;
    typeFuel: string;
    available: boolean;
    additionalDetails?: string;
    carModel?: CarModel;
}