import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/Appointment';
import { Procedure } from 'src/app/models/Procedure';
import { Professional } from 'src/app/models/Professional';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthService } from 'src/app/services/auth.service';
import { ProcedureService } from 'src/app/services/procedure.service';
import { ProfessionalService } from 'src/app/services/professional.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html'
})
export class AppointmentComponent implements OnInit {
  public appointment: Appointment;
  public procedures: Procedure[];
  public listProcedures: Procedure[];
  public listProfessionals: Professional[];
  public procedure_id: number;
  public total_value: number;
  public total_value_commission: number;

  constructor(private procedureService: ProcedureService, 
              private professionalService: ProfessionalService, 
              private appointmentService: AppointmentService, 
              private authService: AuthService, 
              private router: Router
  ) {
    this.appointment = new Appointment();
    this.appointment.professional_id = 0;
    this.procedures = [];
    this.listProcedures = [];
    this.listProfessionals = [];
    this.procedure_id = 0;
    this.total_value = 0;
    this.total_value_commission = 0;
  }

  ngOnInit(): void {
    this.indexProcedure();
    this.indexProfessionals();
  }

  public indexProcedure(): void {
    this.procedureService.index().subscribe(data => {
      this.listProcedures = data;
    },
      error => {
      });
  }

  public indexProfessionals(): void {
    this.professionalService.index().subscribe(data => {
      this.listProfessionals = data;
    },
      error => {
      });
  }

  public addProcedure() {
    var canAdd = true;
    this.procedures.forEach((value, index) => {
      if (value.id == this.procedure_id) canAdd = false;
    });

    if (canAdd) {
      this.listProcedures.forEach((value, index) => {
        if (value.id == this.procedure_id){
           this.procedures.push(value);
           this.total_value += value.value;
           this.total_value_commission += value.value * value.percent;
        }
      });
    }else{
      alert('Procedimento já adicionado!');
    }
  }

  public removeProcedure(procedure: Procedure) {
    this.procedures.forEach((value, index) => {
      if (value.id == procedure.id){
        this.procedures.splice(index, 1);
        this.total_value -= procedure.value;
        this.total_value_commission -= procedure.value * procedure.percent;
      }
    });
  }

  public store(appointment: Appointment): any {
    appointment.procedures = this.procedures.map((value) => { return value.id; });
    appointment.user_id = this.authService.getUser();

    this.appointmentService.store(appointment).subscribe(data => {
      this.appointment = data;
      this.router.navigate(['appointment/show/', this.appointment.id]);
    },
      error => {
        alert(error.errors.join('<br/>'));
      });
  }
}

