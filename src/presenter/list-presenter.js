import { render } from '../render';
import { RenderPosition } from '../render';
import ListView from '../view/list-view';
import SortView from '../view/sort-view';
import EventView from '../view/event';
import NewPointView from '../view/new-point-view';
import EditPointView from '../view/edit-point-view';

export default class ListPresenter {
  component = new ListView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(this.component, this.container);
    render (new SortView(), this.component.getElement(), RenderPosition.BEFOREBEGIN);
    render (new EditPointView(), this.component.getElement(), RenderPosition.AFTERBEGIN);
    render (new NewPointView(), this.component.getElement(), RenderPosition.BEFOREEND);


    for (let i = 0; i < 3; i++) {
      render (new EventView(), this.component.getElement(), RenderPosition.BEFOREEND);
    }
  }
}
