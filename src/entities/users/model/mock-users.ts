import { v4 as uuidv4 } from "uuid";

import { TUser } from "./types.ts";

export const mockUsers: TUser[] = [
  {
    id: uuidv4(),
    name: "Иван Петров",
    email: "ivan.petrov@example.com",
    role: "admin",
    accessLevel: "5",
  },
  {
    id: uuidv4(),
    name: "Мария Иванова",
    email: "maria.ivanova@example.com",
    role: "operator",
    accessLevel: "2",
  },
  {
    id: uuidv4(),
    name: "Сергей Смирнов",
    email: "sergey.smirnov@example.com",
    role: "analyst",
    accessLevel: "3",
  },
  {
    id: uuidv4(),
    name: "Анна Кузнецова",
    email: "anna.kuznetsova@example.com",
    role: "operator",
    accessLevel: "1",
  },
  {
    id: uuidv4(),
    name: "Дмитрий Волков",
    email: "dmitry.volkov@example.com",
    role: "admin",
    accessLevel: "4",
  },
  {
    id: uuidv4(),
    name: "Елена Соколова",
    email: "elena.sokolova@example.com",
    role: "analyst",
    accessLevel: "2",
  },
  {
    id: uuidv4(),
    name: "Алексей Попов",
    email: "alexey.popov@example.com",
    role: "operator",
    accessLevel: "3",
  },
  {
    id: uuidv4(),
    name: "Татьяна Васильева",
    email: "tatyana.vasileva@example.com",
    role: "analyst",
    accessLevel: "4",
  },
  {
    id: uuidv4(),
    name: "Николай Морозов",
    email: "nikolay.morozov@example.com",
    role: "admin",
    accessLevel: "5",
  },
  {
    id: uuidv4(),
    name: "Ольга Федорова",
    email: "olga.fedorova@example.com",
    role: "operator",
    accessLevel: "1",
  },
];
