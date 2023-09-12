import { Component, OnInit } from '@angular/core';
import { NoticiaTemplate } from 'src/app/models/noticia-template';

@Component({
  selector: 'app-small-news-holder',
  templateUrl: './small-news-holder.component.html',
  styleUrls: ['./small-news-holder.component.css']
})
export class SmallNewsHolderComponent {

  noticiasToExibir: NoticiaTemplate[];

  constructor() {
    this.noticiasToExibir = this.createNoticias();
  }

  createNoticias(): NoticiaTemplate[] {

    let imagesN2: string[] = ["assets/news_asset_2.jpeg"];
    let n2: NoticiaTemplate = new NoticiaTemplate("Autor Desconhecido", "Mais uma vitória", "O time comemora mais uma vitória consecutiva na Premier League, agora totalizando 10.", imagesN2);

    let imagesN3: string[] = ["assets/news_asset_3.jpeg"];
    let n3: NoticiaTemplate = new NoticiaTemplate("Autor Desconhecido", "Conversa Importante", "Haaland tem uma conversa séria com o técnico Guardiola após empate.",imagesN3);

    let imagesN4: string[] = ["assets/news_asset_4.jpeg"];
    let n4: NoticiaTemplate = new NoticiaTemplate("Autor Desconhecido", "Rumores de venda", "Existem rumores fortes de uma possível venda do jogador Phil Foden para time árabe.", imagesN4);

    let imagesN5: string[] = ["assets/news_asset_5.jpeg"];
    let n5: NoticiaTemplate = new NoticiaTemplate("Autor Desconhecido", "Kevin de Bruyne é melhor do mundo", "Jogador do Manchester City é eleito o melhor jogador do mundo", imagesN5);

    let noticias: NoticiaTemplate[] = [n2, n3, n4, n5];
    return noticias;
  }



}
