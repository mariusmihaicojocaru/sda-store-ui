import { Component, OnInit } from '@angular/core';
import {OrderResponseDto} from '../model/order-model';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  orders: OrderResponseDto[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.findAllOrdersForUser().subscribe(data => {
      this.orders = data;
    });
  }

}
