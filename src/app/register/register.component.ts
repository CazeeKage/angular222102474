import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'register-page');
  }
  name = 'Muhammad Fadhilah Ramadhan (222102474)';
}
