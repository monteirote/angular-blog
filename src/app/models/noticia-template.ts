export class NoticiaTemplate {

  autor: string;

  title: string;

  conteudo: string;

  imagesUrl: string[];

  dataDeCriacao: Date;

  constructor(autor: string, title: string, conteudo: string, imagesUrl: string[]) {
    this.autor = autor;
    this.title = title;
    this.conteudo = conteudo;
    this.imagesUrl = imagesUrl;
    this.dataDeCriacao = new Date();
  }


}
