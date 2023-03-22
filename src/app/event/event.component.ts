import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  event = {
    name: String,
    date: String,
    location: String,
    comment: String
  }
  saveEvents(){
    axios.post("http://localhost:9999/saveEvent", this.event).then(re => {
      console.log("save Battery", this.event)
    }).catch(er => {
      console.log('alles schlecht')
      console.log(this.event)
    });
  }
}
