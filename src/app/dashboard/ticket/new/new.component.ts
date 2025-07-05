import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})
export class NewTicketComponent {
  onSubmit(
    form: HTMLFormElement,
    titleInput: HTMLInputElement,
    requestInput: HTMLTextAreaElement
  ) {
    const value = {
      title: titleInput,
      request: requestInput,
    };

    form.reset();
  }
}
