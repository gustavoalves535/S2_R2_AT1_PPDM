export interface Product{
    id?: number | string;
    nome: string;
    descricao: string;
    categoria?: string;
    preco: number;
    quantidade_estoque?: number;
    quantidade?: number;
    categoria_id?: number;
    status?: number;
    destaque?: boolean;
    marca?: string;
    modelo?: string;
    garantia_meses?: number;
}

// ! DTO -> DATA TRASFER OBJECT OU OBJETO DE TRANSFERENCIA DE DADOS

export interface CreateProductDTO {
    nome: string;
    descricao: string;
    categoria?: string;
    preco: number;
    quantidade_estoque?: number;
    quantidade?: number;
    categoria_id?: number;
    status?: number;
    destaque?: boolean;
    marca?: string;
    modelo?: string;
    garantia_meses?: number;  
}

export interface UpdateProductDTO {
    id?: number | string;
    nome: string;
    descricao: string;
    categoria?: string;
    preco: number;
    quantidade_estoque?: number;
    quantidade?: number;
    categoria_id?: number;
    status?: number;
    destaque?: boolean;
    marca?: string;
    modelo?: string;
    garantia_meses?: number;  

}

