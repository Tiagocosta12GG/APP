import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  public news = [
    {title:"Inédito!, Gilberto jogador das águias acaba de ganhar a bola de ouro.", description:"Gilberto jogador do Benfica acaba de ganhar o prémio entregue pela France Football com mais de 80% dos votos em segundo lugar ficou o jogador do Manchester United, Harry Maguire e o pódio foi fechado pelo português Gonçalo Ramos", image:"https://th.bing.com/th/id/R.7ce760158a22b48616f7e077081ce8b5?rik=hWsZ61cgGtNuSg&pid=ImgRaw&r=0"},
    {title:"O major de CSGO chegou ao fim, e temos vencedor!", description:"O PGL Major Antwerp 2022 finalmente chegou ao fim, numa final emocionante entre Imperial e Navi, a equipa brasileira acabou por vencer por 2-1 tendo ganho o primeiro e o terceiro mapa pelos resultados de 29-26 e 16-13, e perdido o segundo mapa por 16-14, o MVP do torneio foi Fallen tendo o ganho o seu terceiro Major da carreira", image:"https://th.bing.com/th/id/R.64f19d788cdf70fed2e9d5b18e2a56d3?rik=ICSHkYxDCnQwpA&pid=ImgRaw&r=0"},
    {title:"O jogo do ano é anunciado!", description:"O jogo do ano finalmente foi decidido, e o escolhido, com 63% dos votos foi CSGO!, no segundo lugar ficou fortnite com 4% e em terceiro fico o LOL com apenas 2% dos votos", image:"https://th.bing.com/th/id/R.a889353253545684802a7fe85a3759c0?rik=fYwo9EvgYWjymw&riu=http%3a%2f%2fgamehag.com%2fimg%2fnews%2f232900_csgo-review23.jpg&ehk=YKM1xaauefuI5t1CYAugkoia7MgimqvsCqwaanTFLyE%3d&risl=&pid=ImgRaw&r=0"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
