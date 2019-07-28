import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'charter-app';
  data = {
    Asset1: {
      metrics: ['metric1a', 'metric1b', 'metric1c', 'metric1d','metric1e'],
      cadences: ['cadence1a', 'cadence1b', 'cadence1c', 'cadence1d', 'cadence1e'],
      url: 'assets/images/captain.jpg',
      desc: 'This is the description of Asset 1'
    }, 
    Asset2: {
      metrics: ['metric2a', 'metric2b', 'metric2c', 'metric2d','metric2e'],
      cadences: ['cadence2a', 'cadence2b', 'cadence2c', 'cadence2d', 'cadence2e'],
      url: 'assets/images/ironman.jpg',
      desc: 'This is the description of Asset 2'
    },  
    Asset3: {
      metrics: ['metric3a', 'metric3b', 'metric3c', 'metric3d','metric3e'],
      cadences: ['cadence3a', 'cadence3b', 'cadence3c', 'cadence3d', 'cadence3e'],
      url: 'assets/images/hulk.jpg',
      desc: 'This is the description of Asset 3'
    }, 
    Asset4: {
      metrics: ['metric4a', 'metric4b', 'metric4c', 'metric4d','metric4e'],
      cadences: ['cadence4a', 'cadence4b', 'cadence4c', 'cadence4d', 'cadence4e'],
      url: 'assets/images/blackwidow.jpeg',
      desc: 'This is the description of Asset 4'
    }, 
    Asset5: {
      metrics: ['metric5a', 'metric5b', 'metric5c', 'metric5d','metric5e'],
      cadences: ['cadence5a', 'cadence5b', 'cadence5c', 'cadence5d', 'cadence5e'],
      url: 'assets/images/hawkeye.jpg',
      desc: 'This is the description of Asset 5'
    }, 
  }

  url: string;
  desc: string;

  getUrl(url: string) {
    this.url = url;
  }

  getDesc(desc: string){
    this.desc = desc
  }
}
