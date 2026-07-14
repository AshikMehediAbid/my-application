import { Routes } from '@angular/router';
import { AddEmployee } from './pages/add-employee/add-employee';
import { DataBinding } from './pages/data-binding/data-binding';
import { EmployeeList } from './pages/employee-list/employee-list';
import { Variables } from './pages/variables/variables';
import { NotFound } from './pages/not-found/not-found';
import { Home } from './pages/home/home';
import { Signals } from './pages/signals/signals';
import { ControlFlow } from './pages/control-flow/control-flow';
import { AttributeDirective } from './pages/attribute-directive/attribute-directive';
import { TemplateForm } from './pages/template-form/template-form';
import { ReactiveForm } from './pages/reactive-form/reactive-form';
import { Pipes } from './pages/pipes/pipes';
import { SignalForms } from './pages/signal-forms/signal-forms';
import { LifeCycle } from './pages/life-cycle/life-cycle';
import { GetApi } from './pages/get-api/get-api';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'add-employee',
    component: AddEmployee,
  },
  {
    path: 'data-binding',
    component: DataBinding,
  },
  {
    path: 'employee-list',
    component: EmployeeList,
  },
  {
    path: 'variables',
    component: Variables,
  },
  {
    path: 'signals',
    component: Signals,
  },
  {
    path: 'control-flow',
    component: ControlFlow,
  },
  {
    path: 'attribute-directive',
    component: AttributeDirective,
  },
  {
    path: 'template-form',
    component: TemplateForm,
  },
  {
    path: 'reactive-form',
    component: ReactiveForm,
  },
  {
    path: 'pipes',
    component: Pipes,
  },
  {
    path: 'signal-forms',
    component: SignalForms,
  },
  {
    path: 'life-cycle',
    component: LifeCycle,
  },
  {
    path: 'get-api',
    component: GetApi,
  },
  {
    path: '**',
    component: NotFound,
  },
];
