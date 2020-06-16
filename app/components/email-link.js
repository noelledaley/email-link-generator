import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";

export default class EmailLinkComponent extends Component {
  @tracked isCopied = false;
}
