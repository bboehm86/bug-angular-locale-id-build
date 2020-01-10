import { Component, Inject, LOCALE_ID } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
        {{ locale }}`,
  styles: []
})
export class AppComponent {
  constructor(@Inject(LOCALE_ID) public locale: string) {}
}
