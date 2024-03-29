interface IFilm {
  url: string;
}

interface IPilot {
  url: string;
}

interface IVehicle {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: IPilot[];
  films: IFilm[];
  created: string;
  edited: string;
  url: string;
}

export default IVehicle;
