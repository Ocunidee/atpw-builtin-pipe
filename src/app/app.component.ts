import { Component, computed, signal } from '@angular/core'
import { CurrencyPipe, DatePipe } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [DatePipe, CurrencyPipe],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly price = signal(9.9)
  protected readonly today = signal(Date.now())
  protected readonly expirationDate = computed(() => {
    const date = new Date(this.today())
    date.setDate(date.getDate() + 3)

    return date
  })
}
