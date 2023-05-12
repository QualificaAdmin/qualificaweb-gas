import { Permissao } from "./Permissao";

export class GrupoUsuario {
  nome: string;
  permissoes: Permissao[];
  ativo: boolean;
  acesso: any;
  constructor(nome: string, permissoes: Permissao[], ativo: boolean,acesso:any=null) {
    this.nome = nome;
    this.permissoes = permissoes;
    this.ativo = ativo;
    this.acesso=acesso;
  }
  temPermissao(nomePermissao: string) {
    return this.permissoes.some((permissao) => permissao.nome == nomePermissao);
  }
  temAcesso(parametro:string,valor:string){
    return this.acesso.some((a:any)=>a[parametro]==valor);
  }
}
