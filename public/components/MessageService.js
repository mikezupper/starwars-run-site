import { fromEvent, Subject } from "https://cdn.skypack.dev/rxjs";
import {
  tap,
  map,
  debounceTime,
  scan,
  filter,
  distinctUntilChanged,
} from "https://cdn.skypack.dev/rxjs/operators";

export default class MessageService {
  MessageService(worker) {
    super();
    this.worker = worker;
  }
}
