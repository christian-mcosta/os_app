import { EquipamentoItemAPI, EquipamentoItemModel } from "./equipamento-item.model";
import { OsServicoAPI, OsServicoModel } from "./os-servico.model";
import { OsProdutoAPI, OsProdutoModel } from "./os-produto.model";

class OsEquipamentoItemModel {
  id: number;
  idOs: number;
  problemaReclamado: string | null;
  problemaConstatado: string | null;
  obs: string | null;
  equipamentoItem: EquipamentoItemModel;
  servicos: OsServicoModel[];
  produtos: OsProdutoModel[];

  constructor(
    id: number,
    idOs: number,
    problemaReclamado: string | null,
    problemaConstatado: string | null,
    obs: string | null,
    equipamentoItem: EquipamentoItemModel,
    servicos: OsServicoModel[],
    produtos: OsProdutoModel[]
  ) {
    this.id = id;
    this.idOs = idOs;
    this.problemaReclamado = problemaReclamado;
    this.problemaConstatado = problemaConstatado;
    this.obs = obs;
    this.equipamentoItem = equipamentoItem;
    this.servicos = servicos;
    this.produtos = produtos;
  }

  public static fromJson(json: OsEquipamentoItemAPI): OsEquipamentoItemModel {
    return new OsEquipamentoItemModel(
      json.id_os_equipamento_item,
      json.id_os,
      json.problema_reclamado,
      json.problema_constatado,
      json.obs,
      EquipamentoItemModel.fromJson(json.equipamento_item),
      json.servicos.map(s => OsServicoModel.fromJson(s)),
      json.produtos.map(p => OsProdutoModel.fromJson(p))
    );
  }
}

interface OsEquipamentoItemAPI {
  id_os_equipamento_item: number;
  id_os: number;
  problema_reclamado: string | null;
  problema_constatado: string | null;
  obs: string | null;
  equipamento_item: EquipamentoItemAPI;
  servicos: OsServicoAPI[];
  produtos: OsProdutoAPI[];
}

export { OsEquipamentoItemModel, OsEquipamentoItemAPI };