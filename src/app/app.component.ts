import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fist APP';
  childtitles=["Electronics Iteams", "Statioanries","Sports Items"];
  things:string[][]=[
    ["RAM","Pendrive","Hard Disk","Tablet","Keyboard"],
    ["Pen","Pencil","Paper","Eraser"],
    ["Bat","Ball","Gloves","Pad"]
  ]
  newItem:string;

  subscribedInfo(info,boxnumber)
  {
     this.newItem=info;
     this.things[boxnumber].push(info);
  }
}
