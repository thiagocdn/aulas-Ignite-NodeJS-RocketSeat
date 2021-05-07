import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
};

interface ISpecificationsRepository {
  create({ description, name }: ICreateSpecificationDTO): void,
  findByName(name: string): Specification,
};

export { ISpecificationsRepository, ICreateSpecificationDTO };