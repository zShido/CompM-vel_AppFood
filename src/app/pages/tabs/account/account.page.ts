import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  orders = [];
  isLoading: boolean = false;
  model: any = {
    icon: 'fast-food-outline',
    title: "Nenhum pedido encontrado!"
  }

  constructor() { }

  ngOnInit() {
    this.onLoadingAccount();
    this.orders = [
      {
        name: 'Dom Henrique',
          location: 'Guarapuava, Paraná',
          price: 60.00,
          status: 'Entregue',
          items: ['Pizza x2', 'Burguer x2'],
          date: 'Fevereiro 28, 2024'
        },
        {
          name: 'Dom Henrique',
          location: 'São Paulo, São Paulo',
          price: 35.00,
          status: 'Entregue',
          items: ['Pizza x1'],
          date: 'Fevereiro 28, 2024'
        },
        {
          name: 'Dom Henrique 2',
          location: 'Guarapuava, Paraná',
          price: 20.00,
          status: 'Entregue',
          items: ['Salada Especial'],
          date: 'Fevereiro 28, 2024'
        },
        {
          name: 'Dom Henrique 3',
          location: 'Londrina, Paraná',
          price: 300.00,
          status: 'Entregue',
          items: ['Pizza x8'],
          date: 'Fevereiro 28, 2024'
        },
        {
          name: 'Dom Henrique',
          location: 'Guarapuava, Paraná',
          price: 60.00,
          status: 'Entregue',
          items: ['Pizza x2', 'Burguer x2'],
          date: 'Fevereiro 28, 2024'
        }
    ];
  }

  async onLoadingAccount(){
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

}
