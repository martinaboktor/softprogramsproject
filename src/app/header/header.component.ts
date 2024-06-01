import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSpecialPage!: boolean;
 
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const specialPaths = ['about', 'service', 'product', 'contact'];
        this.isSpecialPage = specialPaths.some(path => this.router.url.includes(path));
      }
    });
  }
}