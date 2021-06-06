import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentFull } from 'src/app/models/AppointmentFull';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-show',
  templateUrl: './appointment-show.component.html'
})

export class AppointmentShowComponent implements OnInit {
  public appointment: AppointmentFull;
  public total_value: number;
  public total_value_commission: number;
  public render: boolean = false;

  constructor(private appointmentService: AppointmentService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.appointment = new AppointmentFull();
    this.total_value = 0;
    this.total_value_commission = 0;
  }

  ngOnInit(): void {
    this.appointment = new AppointmentFull();
    this.activatedRoute.params.subscribe(params => {
      this.appointment.id = params['id'];
    });

    this.show(this.appointment);
  }

  public show(appointment: AppointmentFull) :void{
    this.appointmentService.show(appointment).subscribe(data => {
      this.appointment = data;
      this.appointment.procedures?.forEach((value) => {
        this.total_value += value.value;
        this.total_value_commission += value.value * value.percent;
      });
      this.render = true;
    },
    error => {
      alert(error.errors.join('<br/>'));
      this.router.navigate(['appointments']);
    });
  }

}

