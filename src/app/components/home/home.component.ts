import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'learning-angular-project';
  faStar = faStar;

  prevScrollBarPosition: number;

  constructor() { }

  ngOnInit(): void {
    const rightSideContainer = document.getElementById("right-side-container");
    const getAmountScrolled = this.getAmountScrolled();

    window.addEventListener("scroll", () => {
      this.scrollSideBar(rightSideContainer, getAmountScrolled);
    })
  }

  scrollSideBar(rightSideContainer: HTMLElement, getAmountScrolled: Function): void {
    const scrollBarPosition = window.scrollY;
    const amountScrolled = getAmountScrolled();

    if (scrollBarPosition >= 0) {
      if (scrollBarPosition > this.prevScrollBarPosition) {
        rightSideContainer.scrollBy(0, amountScrolled);
      }
      else if (scrollBarPosition < this.prevScrollBarPosition) {
        rightSideContainer.scrollBy(0, amountScrolled);
      }
    }
    this.prevScrollBarPosition = scrollBarPosition;
  }
  getAmountScrolled(): Function {
    var lastPos, newPos, timer, delta,
      delay = 50;
    function clear() {
      lastPos = null;
      delta = 0;
    }

    clear();

    return function getAmountScrolled() {
      newPos = window.scrollY;
      if (lastPos != null) {
        delta = newPos - lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };
  };
}
