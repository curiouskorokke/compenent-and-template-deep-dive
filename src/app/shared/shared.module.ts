import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ControlComponent } from './control/control.component';

@NgModule({
  declarations: [ButtonComponent, ControlComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, ControlComponent],
})
export class SharedModule {}
