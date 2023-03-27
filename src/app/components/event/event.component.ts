import { Component, Inject } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CityEvent } from 'src/app/model/interfaces/event.interface';
import { EventsCrudService } from 'src/app/services/events-crud.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  private event!: CityEvent;
  public eventForm!: UntypedFormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {date?: Date, event?: CityEvent},
    private _formBuilder: FormBuilder,
    private _evntsCrudService: EventsCrudService,
  ) {
    this.buildForm();
    this.setFormData()
  }

  private buildForm():void {
    this.eventForm = this._formBuilder.group({
      name: ['', Validators.required],
      date: [new Date, Validators.required],
      image: [''],
      description: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  private setFormData():void {
    if (this.data.date) this.eventForm.patchValue({'date': this.data.date})
    else if (this.data.event) this.eventForm.setValue(this.data.event)
    this.event = this.eventForm.getRawValue();
  }


  public onSubmit():void {
    this.event = {...this.event, ...this.eventForm.getRawValue()};
    console.log(this.event)
    if ('id' in this.event) this.updateEvent();
    else this.createEvent();
  }

  private createEvent():void {
    this._evntsCrudService.createEvent(this.event)
    .subscribe(res => console.log(res))  
  }

  private updateEvent():void {
    this._evntsCrudService.updateEvent(this.event)
    .subscribe(res => console.log(res))  //TODO:Check that  this sh*t works when Tuan´s Api is dode :P
  }

}
