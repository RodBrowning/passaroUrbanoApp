export class OfertaModel {
    public id: number;
    public categoria: string;
    public titulo: string;
    public descricao_oferta: string;
    public anunciante: string;
    public valor: number;
    public destaque: true;
    public imagens: Array<object>;
}