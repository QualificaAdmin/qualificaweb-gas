import { GrupoUsuario } from "../../domain/base/GrupoUsuario";
import { ContextoFirestore } from "../contexto/ContextoFirestore";
import { RepositorioBase } from "./RepositorioBase";

export class GrupoUsuarioRepositorio extends RepositorioBase<GrupoUsuario> {
  constructor() {
    super(new ContextoFirestore(null, "grupoUsuario"));
  }
  static map(obj: any) {
    const parse = {
      nome: obj.name.split("/").pop(),
      permissoes:
        obj.fields.permissoes.arrayValue.length > 0
          ? {}
          : obj.fields.permissoes.arrayValue.values.map((value: any) =>
              value.referenceValue.split("/").pop()
            ),
      acesso: obj.fields.acesso
        ? Object.keys(obj.fields.acesso.mapValue.fields).reduce(
            (acc: any, key) => {
              const values =
                obj.fields.acesso.mapValue.fields[key].arrayValue.values;
              acc[key] = values.map((value: any) => value.stringValue);
              return acc;
            },
            {}
          )
        : null,
      ativo: obj.fields.ativo.booleanValue,
    };
    return parse;
  }
  get(): GrupoUsuario[] {
    const data: any[] = this.contexto.get();
    const grupos: GrupoUsuario[] = data.map((grupo: any) => {
      let { nome, permissoes, ativo, acesso } =
        GrupoUsuarioRepositorio.map(grupo);
      return new GrupoUsuario(nome, permissoes, ativo, acesso);
    });
    return grupos;
  }
  getById(id: any): GrupoUsuario {
    let data: any[] = this.contexto.getById(id);
    let { nome, permissoes, ativo, acesso } = GrupoUsuarioRepositorio.map(
      data[0]
    );
    const user = new GrupoUsuario(nome, permissoes, ativo, acesso);
    return user;
  }
}
