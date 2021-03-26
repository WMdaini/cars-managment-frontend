export interface Car {
  idCar: number;
  registrationNumber: string;
  brand: string;
  picture: string;
  description: string;
  model: string;
}

export interface Comment {
  idComment: number;
  comment: string;
  date: Date;
  car: Car;
  user: User;
}

export interface User {
  idUser: number;
  login: string;
  password: string;
}
