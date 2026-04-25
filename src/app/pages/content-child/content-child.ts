import { Component, contentChildren, effect } from '@angular/core';
import { ViewQueries } from '../view-queries/view-queries';
import { Tab } from '../tab/tab';

@Component({
  selector: 'app-content-child',
  imports: [],
  templateUrl: './content-child.html',
  styleUrl: './content-child.css',
})
export class ContentChild {
  tabs = contentChildren<Tab>("tag");

  constructor() {
    effect(() => {
      const allTabs = this.tabs();

      if (allTabs.length > 0 && !allTabs.some((t) => t.active())) {
        allTabs[0].active.set(true);
      }
    });
  }

  selectTab(selectedTab: Tab) {
    this.tabs().forEach((tab) => tab.active.set(false));

    selectedTab.active.set(true);
  }
}
