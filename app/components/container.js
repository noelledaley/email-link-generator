import Component from "@glimmer/component";
import { action } from "@ember/object"
import { tracked } from "@glimmer/tracking";


export default class ContainerComponent extends Component {
  @tracked data = {};

  @action
  updateData(evt) {
    evt.preventDefault();
    const data = $("form").serializeArray();

    this.data = data;
  }
}
