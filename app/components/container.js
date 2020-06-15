import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class ContainerComponent extends Component {
  @tracked email = "";
  @tracked subject = "";
  @tracked
  body = `Dear [TITLE],\n\nEnter the body of your email template here. \n\nSincerely,\n[FULL NAME]\n[CITY, STATE]`;

  @tracked gmailLink = "";
  @tracked emailLink = "";

  @tracked copiedLink = '';

  @action
  updateData(evt) {
    evt.preventDefault();
    const data = $("form").serializeArray();
    this.buildEmailPreview(data);
  }

  @action
  buildEmailPreview(formData) {
    formData.forEach((formField) => {
      const item = formField.name;
      return (this[item] = formField.value);
    });
    this.buildGmailLink();
    this.buildEmailLink();
  }

  @action
  buildGmailLink() {
    const { email, subject, body } = this;
    return (this.gmailLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`);
  }

  @action
  buildEmailLink() {
    const { email, subject, body } = this;
    return (this.emailLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`);
  }

  @action
  copyAndClear(link){
    return (this.copiedLink = link);
  }
}
