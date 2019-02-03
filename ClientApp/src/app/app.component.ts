import { GalleryComponent } from './gallery/gallery.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private route:Router){}
  gallary(){
    this.route.navigate(['/gallery']);
  }
}
