import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { TeamMemberComponent } from './team-member/team-member.component';
import { CalendarModule } from "primeng/calendar";
import { DatepickerModule } from 'ng2-datepicker';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EditTeamMemberComponent } from './edit-team-member/edit-team-member.component';
import { ViewTeamMemberComponent } from './view-team-member/view-team-member.component';
import { TeamMemberDetailsComponent } from './team-member-details/team-member-details/team-member-details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddTeamDetailsComponent } from './add-team-details/add-team-details.component';
import { EditTeamDetailsComponent } from './edit-team-details/edit-team-details.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ViewTeamDetailsComponent } from './view-team-details/view-team-details.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { NgPrimeComponent } from './ngPrime/ngPrime.component';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart'
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavMenuSideBarComponent } from './devops-matrix/navmenu-sidebar/navmenu-sidebar.component';
import { WorkStatusService } from './devops-matrix/services/work-status.service';
import { ConfirmationService, MessageService } from 'primeng/api';
// import { weeklyReportsComponent } from './weekly-reports/weekly-reports.component';
import { WeeklyReportModule } from './weekly-report/weekly-report.module';
import { LoaderComponent } from './common/loader/loader.component';
import { DevopsMatrixModule } from './devops-matrix/devops-matrix.module';
import { TeamMemberRemarksComponent } from './team-member-remarks/team-member-remarks.component';
import { TeamMemberSkillsComponent } from './team-member-skills/team-member-skills.component';
// import { HomePageComponent } from './home-page/home-page.component';
import { TabViewModule } from 'primeng/tabview';
import { FieldsetModule } from 'primeng/fieldset';








@NgModule({
  declarations: [
    AppComponent,
    TeamDetailsComponent,
    TeamMemberComponent,
    EmployeeViewComponent,
    EmployeeAddComponent,
    UpdateEmployeeComponent,
    EditTeamMemberComponent,
    ViewTeamMemberComponent,
    TeamMemberDetailsComponent,
    SidebarComponent,
    AddTeamDetailsComponent,
    EditTeamDetailsComponent,
    ViewTeamDetailsComponent,
    NgPrimeComponent,
    DashboardComponent,
    LoaderComponent,
    TeamMemberRemarksComponent,
    TeamMemberSkillsComponent,
    // HomePageComponent
    // weeklyReportsComponent,
    // NavMenuSideBarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DialogModule,
    AppRoutingModule,
    TableModule,
    RadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    DatepickerModule,
    HttpClientModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    ToastModule,
    ChartModule
    , DevopsMatrixModule,
    WeeklyReportModule,
    FieldsetModule,
    TabViewModule






  ],
  providers: [MessageService, WorkStatusService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
