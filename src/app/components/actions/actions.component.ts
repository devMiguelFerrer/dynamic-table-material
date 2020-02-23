import { Component, EventEmitter, Output } from '@angular/core';

export enum ActionState { init = 'init', stop = 'stop', remove = 'remove', }

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {

  @Output() emitActionState = new EventEmitter<ActionState>();
  actionState = ActionState;

  onHandlerState(state: ActionState): void {
    this.emitActionState.emit(state);
  }

}
