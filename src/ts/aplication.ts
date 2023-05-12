import { UsuarioServico } from "./services/UsuarioServico";

export function getPermissoes() {
  return new UsuarioServico().getPermissoes(Session.getActiveUser().getEmail());
}
export function getAcessos(parametro:string,valor:string) {
  return new UsuarioServico().getAcesso(Session.getActiveUser().getEmail());
}

