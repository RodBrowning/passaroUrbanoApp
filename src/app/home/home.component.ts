import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { OfertaModel } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  public ofertas: OfertaModel[];

  ngOnInit() {
    this.ofertas = this.ofertasService.getOfertas();
  }

}
