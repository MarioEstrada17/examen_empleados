import { NgModule } from "@angular/core";
import { AtomicButtonModule } from "./atomic-button/atomic-button.module";
import { AtomicSubtitleModule } from "./atomic-subtitle/atomic-subtitle.module";
import { AtomicBackSectionModule } from "./atomic-back-section/atomic-back-section.module";
import { AtomicTableModule } from "./atomic-table/atomic-table.module";

@NgModule({
    exports: [
      AtomicButtonModule,
      AtomicSubtitleModule,
      AtomicBackSectionModule,
      AtomicTableModule
    ]
})
export class AtomicDesignModule {}