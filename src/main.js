import ListPresenter from './presenter/list-presenter';
import { render } from './render';
import { RenderPosition } from './render';
import FiltersView from './view/filters-view';

const siteTripElement = document.querySelector('.trip-events');
const siteControlsElement = document.querySelector('.trip-controls__filters');
const listPresenter = new ListPresenter({container: siteTripElement});

render (new FiltersView(), siteControlsElement, RenderPosition.BEFOREEND);

listPresenter.init();
