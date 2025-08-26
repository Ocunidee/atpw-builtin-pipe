import { Component, computed, signal } from '@angular/core'
import { CurrencyPipe, DatePipe } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [DatePipe, CurrencyPipe],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  price = signal(9.9)
  today = signal(Date.now())
  expirationDate = computed(() => {
    const date = new Date(this.today())
    date.setDate(date.getDate() + 3)

    return date
  })
}
