import {Component, OnInit} from '@angular/core';

import {UserService} from '../../services/user/user.service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule} from '@angular/forms';
import {User} from '../../model/order/user';
import {Order} from '../../model/order/order';
import {OrderService} from '../../services/orders/order.service';
import {OrderDTO} from '../../model/order/OrderDTO';
import {TokenService} from "../../services/token/token.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterLink, CommonModule, FormsModule
  ],
  templateUrl:'./profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  orders: OrderDTO[] = [];



  userId: number = 0;



  constructor(private userService: UserService,
              private orderService: OrderService,
              private tokenService: TokenService,
              private route: ActivatedRoute,


  ) { }

  ngOnInit(): void {
    // this.loadUserProfile(2);  // Gọi hàm tải thông tin hồ sơ người dùng
    // const userId = 2
    // this.loadOrderHistory(this.userId);
    // console.log()
    this.userId = this.tokenService.getUserId();
    this.orderService.getOrdersByUserId(this.userId).subscribe(
        (data) => {
          this.orders = data;
          console.log(this.orders);
        },
        (error) => {
          console.error('Lỗi khi tải đơn hàng:', error);
        }
    );
  }


  loadUserProfile(userId: 1): void {
    this.userService.getUserProfile().subscribe(
        (data: User) => {
          this.userId = 1;  // Lưu thông tin người dùng
        },
        error => {
          console.error('Error loading user profile', error);
        }
    );
  }



  loadOrderHistory(userId: number): void {
    this.orderService. getOrdersByUserId(userId).subscribe({
      next: (data: OrderDTO[]) => {
        this.orders = data;
      },
      error: (err) => {
        console.error('Error fetching order:', err);
      }
    });


  }
}
