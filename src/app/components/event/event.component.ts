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
  public mode: 'create' | 'edit' = 'create';

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
      imageUrl: [''],
      description: ['', Validators.required],
      location: ['', Validators.required],
      category: [''],
      id: [null]
    });
  }

  private setFormData():void {
    if (this.data.date) this.eventForm.patchValue({'date': this.data.date})
    else if (this.data.event) {
      this.eventForm.patchValue(this.data.event);
      this.mode = 'edit';
    }
    this.event = this.eventForm.getRawValue();
  }

  public onSubmit():void {
    this.event = {...this.event, ...this.eventForm.getRawValue()};
    if (this.mode == 'edit') this.updateEvent();
    else this.createEvent();
  }

  public onDelete():void {
    if(this.event.id) this._evntsCrudService.deleteEvent(this.event.id)
      .subscribe();
  }

  private createEvent():void {
    this._evntsCrudService.createEvent(this.event)
      .subscribe(res => console.log(res))
  }

  private updateEvent():void {
    console.log(this.event)
    this._evntsCrudService.updateEvent(this.event)
      .subscribe(res => console.log(res))
  }

}
