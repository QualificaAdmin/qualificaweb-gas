import * as functions from './functions';
import * as aplication from './aplication';

(global as any).getPermissoes = aplication.getPermissoes;
(global as any).getAcessos = aplication.getAcessos;

(global as any).abrePlanilhaFrequencia = functions.abrePlanilhaFrequencia;
(global as any).copiaAlunosParaFrequencia = functions.copiaAlunosParaFrequencia;

//(global as any).todosDiretoriosEmJSON = functions.todosDiretoriosEmJSON;

(global as any).Diretorio = functions.Diretorio;
//(global as any).getAnos = functions.getAnos;
//(global as any).getProgramas = functions.getProgramas;
//(global as any).getTurmas = functions.getTurmas;
//(global as any).getFrequencia = functions.getFrequencia;

//(global as any).setFrequencia = functions.setFrequencia;

//(global as any).getUserInfo = functions.getUserInfo;
//(global as any).getInfoCurso= functions.getInfoCurso;
//(global as any).getInfoTurma = functions.getInfoTurma;

//(global as any).getToken = functions.getToken;
//(global as any).getUserAndToken= functions.getUserAndToken;

//(global as any).getCertificado = functions.getCertificado;

(global as any).getOrCreatePlanilha = functions.getOrCreatePlanilha;
(global as any).convertePlanilhaEmJSON = functions.convertePlanilhaEmJSON;
