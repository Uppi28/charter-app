import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  @Input() data: Array<{}>
  @Output() url = new EventEmitter<string>();
  @Output() desc = new EventEmitter<string>();
  Assets: Array<string> = [];
  Metrics: Array<string> = [];
  Cadences: Array<string> = [];
  selectedAsset: string;
  selectedMetric: string;
  selectedCadence: any;
  selectedMail: string = '';
  
  email = new FormControl('', [Validators.required, Validators.email]);
  multipleMetrics = new FormControl('', [Validators.required]);
  assetValidator = new FormControl('', [Validators.required]);
  cadenceValidator = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getDropdownError() {
    return 'You must select a value'
  }

  constructor(private _snackBar: MatSnackBar) {}

  assetClicked() {
    this.Metrics.length = 0
    this.Cadences.length = 0
    this.Metrics = this.data[this.selectedAsset]['metrics'].map((d)=> d);
    this.Cadences = this.data[this.selectedAsset]['cadences'].map((d)=> d);
  }

  onSubmit(){
    if(this.selectedAsset && this.selectedCadence && this.selectedMetric && this.email.value){
      this.url.emit(this.data[this.selectedAsset]['url']);
      this.desc.emit(this.data[this.selectedAsset]['desc']);
      this._snackBar.open(this.selectedAsset+' is submitted for review and you will be notified soon', 'Close', {
        duration: 5000,
      });
    }
    else{
      this.url.emit('');
      this.desc.emit('');
    }
  }

  ngOnInit() {
    this.Assets = Object.keys(this.data);
  }

}
