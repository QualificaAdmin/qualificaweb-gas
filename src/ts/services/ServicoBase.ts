import { IRepositorio } from "../repositorio/base/IRepositorio";
import { IServico } from "./IServico";

export abstract class ServicoBase<T> implements IServico<T> {
  repositorio: IRepositorio<T>;
  constructor(repositorio: IRepositorio<T>) {
    this.repositorio = repositorio;
  }
  abstract getAll(): T[];
  abstract getById(id: any): T;
}
