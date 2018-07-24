import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
//SUBSCRIPTION, OBSERVABLE, MAP
import { Subscription } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
//SweetAlert
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
//JQUERY
import * as $ from 'jquery';
//COMPONENTS


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //SWEET ALERT
  public swal: SweetAlert = _swal as any;
  

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController

  ) {
  }

}
