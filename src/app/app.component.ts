import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jsonString = '';
  formattedJson = ''; 

  formatJson() {
    try {
      const jsonObject = JSON.parse(this.jsonString);
      this.formattedJson = JSON.stringify(jsonObject, null, 2);
    } catch (error) {
      console.error('Erro ao formatar JSON:', error);
    }
  }
}
