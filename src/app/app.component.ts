import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextBoxComponent } from "./components/text-box/text-box.component";
import { InfoBoxComponent } from "./components/info-box/info-box.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextBoxComponent, InfoBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'file-test';
}
