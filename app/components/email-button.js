import Component from '@glimmer/component';

export default class EmailButtonComponent extends Component {
  get isCopied(){
    if (this.args.link && this.args.copiedLink) {
      return this.args.link === this.args.copiedLink;
    }
    return false
  }
}
