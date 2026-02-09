import { Routes } from '@angular/router';
import { AddEmployee } from './pages/add-employee/add-employee';
import { DataBinding } from './pages/data-binding/data-binding';
import { EmployeeList } from './pages/employee-list/employee-list';
import { Variables } from './pages/variables/variables';
import { NotFound } from './pages/not-found/not-found';
import { Home } from './pages/home/home';
import { Signals } from './pages/signals/signals';

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
        path: '**',
        component: NotFound,
    }

];
