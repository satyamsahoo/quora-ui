import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // bannerSliderOptions
  bannerSliderOptions = {
    items: 3,
    margin: 40,
    nav: true,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: true,
        loop: true
      },
      600: {
        items: 3,
        nav: true,
        loop: true
      },
      1000: {
        items: 4,
        nav: true,
        loop: true
      }
    },
  };

  constructor() { }

  ngOnInit() {
  this.draw();
  }
  public draw() {
        
    // var canvas = document.getElementById('myCanvas');
    // var ctx = canvas.getContext('2d');
    // ctx.fillStyle = 'red';
    // ctx.fillRect(10, 10, 60, 60);
    
    // var c = document.getElementById("myCanvas");
    // var ctx = c.getContext("2d");
    //  ctx.fillStyle = 'red';
    //    ctx.fillRect(10, 10, 40, 50);
    // ctx.beginPath();
    // ctx.moveTo(10, 59);
    // ctx.lineTo(20, 80);
    // ctx.lineTo(59, 30);
    // ctx.stroke();
    // ctx.beginPath();
    // ctx.moveTo(100, 100);
    // // ctx.lineTo(100, 100);
    //  ctx.lineTo(150, 200);
    //  ctx.lineTo(200, 100);

    //  ctx.lineTo(250, 230);
    // //  ctx.lineTo(150, 100);
    // //  ctx.lineTo(200, 100);
    //  ctx.stroke();
    // ctx.beginPath();
    // ctx.moveTo(10, 100);
    // ctx.lineTo(10, 20);
    //  ctx.lineTo(40, 20);
    // ctx.fillStyle = 'green';
    // ctx.fill();


}

}
