import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streamer-dashboard-page',
  templateUrl: './streamer-dashboard-page.component.html',
  styleUrls: ['./streamer-dashboard-page.component.css']
})
export class StreamerDashboardPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageSrc = 'assets/images/back-dashboard.png'  
  imageAlt = 'background'
  rodapeDireito = 'assets/images/rodape-direito.png'
  rodapeEsquerdo = 'assets/images/rodape-esquerdo.png'
  rodapeAlt = "Imagem de rodape"
}
