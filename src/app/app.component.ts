import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  price = 9.9
  expirationDate = new Date()

  ngOnInit() {
    this.expirationDate.setDate(this.expirationDate.getDate() + 3)
  }
}
