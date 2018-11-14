import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <fieldset>
      <legend>sui-checkbox</legend>
      <sui-checkbox
        required
        name="hasToBeChecked"
        #hasToBeChecked="ngModel"
        [(ngModel)]="model.hasToBeChecked"
      ></sui-checkbox>
      <pre>valid: {{hasToBeChecked.valid}}</pre>
    </fieldset>

    <fieldset>
      <legend>checkbox</legend>
      <input
        required
        type="checkbox"
        name="hasToBeChecked2"
        #hasToBeChecked2="ngModel"
        [(ngModel)]="model.hasToBeChecked2"
      />
      <pre>valid: {{hasToBeChecked2.valid}}</pre>
    </fieldset>
  `
})
export class AppComponent {
  public model = {
    hasToBeChecked: false,
    hasToBeChecked2: false
  };
}
