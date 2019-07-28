import { Component, OnInit, Input } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {
  @Input() data: Array<{}>
  Assets: Array<string> = [];
  selectedAsset: string;

  email = new FormControl('', [Validators.required, Validators.email]);
  
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  assetClicked(){

  }

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.Assets = Object.keys(this.data);
  }

  onSubmit(){
    if(this.selectedAsset && this.email.value){
      this._snackBar.open('You have been unsubscribed from ' + this.selectedAsset, 'Close', {
        duration: 5000,
      });
    }
    this.selectedAsset = undefined;
    this.email = new FormControl('', [Validators.required, Validators.email]);
  }
}
