import { ContextoBase } from "../contexto/ContextoBase";
import { IContexto } from "../contexto/IContexto";
import { IRepositorio } from "./IRepositorio";

export abstract class RepositorioBase<T> implements IRepositorio<T> {
  contexto: ContextoBase;
  constructor(contexto: IContexto) {
    this.contexto = contexto;
  }
  abstract get(): T[];
  abstract getById(id: any): T;
}
