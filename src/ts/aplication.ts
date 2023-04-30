import { UsuarioServico } from "./services/UsuarioServico";

export function getPermissoes() {
  return new UsuarioServico().getPermissoes(Session.getActiveUser().getEmail());
}
