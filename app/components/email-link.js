import Component from '@glimmer/component';

export default class EmailLinkComponent extends Component {
  get isCopied(){
    if (this.args.link && this.args.copiedLink) {
      return this.args.link === this.args.copiedLink;
    }
    return false
  }
}
