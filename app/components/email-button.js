import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";


export default class EmailButtonComponent extends Component {
  @tracked isCopied = false;
}
