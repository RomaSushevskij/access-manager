export enum UserRole {
  ANALYST = "Аналитик",
  OPERATOR = "Оператор",
  ADMIN = "Администратор",
}

export type TUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  accessLevel: 1 | 2 | 3 | 4 | 5;
};

import { v4 as uuidv4 } from "uuid";

export const mockUsers: TUser[] = [
  {
    id: uuidv4(),
    name: "Иван Петров",
    email: "ivan.petrov@example.com",
    role: UserRole.ADMIN,
    accessLevel: 5,
  },
  {
    id: uuidv4(),
    name: "Мария Иванова",
    email: "maria.ivanova@example.com",
    role: UserRole.OPERATOR,
    accessLevel: 2,
  },
  {
    id: uuidv4(),
    name: "Сергей Смирнов",
    email: "sergey.smirnov@example.com",
    role: UserRole.ANALYST,
    accessLevel: 3,
  },
  {
    id: uuidv4(),
    name: "Анна Кузнецова",
    email: "anna.kuznetsova@example.com",
    role: UserRole.OPERATOR,
    accessLevel: 1,
  },
  {
    id: uuidv4(),
    name: "Дмитрий Волков",
    email: "dmitry.volkov@example.com",
    role: UserRole.ADMIN,
    accessLevel: 4,
  },
  {
    id: uuidv4(),
    name: "Елена Соколова",
    email: "elena.sokolova@example.com",
    role: UserRole.ANALYST,
    accessLevel: 2,
  },
  {
    id: uuidv4(),
    name: "Алексей Попов",
    email: "alexey.popov@example.com",
    role: UserRole.OPERATOR,
    accessLevel: 3,
  },
  {
    id: uuidv4(),
    name: "Татьяна Васильева",
    email: "tatyana.vasileva@example.com",
    role: UserRole.ANALYST,
    accessLevel: 4,
  },
  {
    id: uuidv4(),
    name: "Николай Морозов",
    email: "nikolay.morozov@example.com",
    role: UserRole.ADMIN,
    accessLevel: 5,
  },
  {
    id: uuidv4(),
    name: "Ольга Федорова",
    email: "olga.fedorova@example.com",
    role: UserRole.OPERATOR,
    accessLevel: 1,
  },
];
