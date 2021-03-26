import {Component, OnInit} from '@angular/core';
import {CarService} from '../core/service/car.service';
import {Car, Comment} from '../core/generatedResource';
import {environment} from '../../environments/environment';
import {CommentService} from '../core/service/comment.service';
import {AuthService} from '../core/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: Car[] = [];
  comments: Comment[] = [];
  selectedCar: Car = {} as Car;
  baseUrl = environment.baseUrl;
  displayModal = false;
  commentText = '';

  constructor(private carService: CarService, private commentService: CommentService, public authService: AuthService) {
  }

  ngOnInit(): void {
    this.getAllCars();
  }


  private getAllCars() {
    this.carService.getAllCars().subscribe(response => {
      this.cars = response;
    });
  }

  getComments(car: Car) {
    this.displayModal = true;
    this.selectedCar = car;
    this.commentService.getCommentByCar(car).subscribe(response => {
      this.comments = response;
    });
  }

  addComment() {
    if (this.commentText !== '') {
      let comment: Comment = {} as Comment;
      comment.date = new Date();
      comment.user = this.authService.authUser;
      comment.comment = this.commentText;
      comment.car = this.selectedCar;
      this.commentService.addComment(comment).subscribe(response => {
        if (response) {
          this.comments.push(response);
        }
      });
    }
  }
}
