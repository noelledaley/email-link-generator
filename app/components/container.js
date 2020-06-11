import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { assign } from "@ember/polyfills";

export default class ContainerComponent extends Component {
  @tracked email = "";
  @tracked subject = "";
  @tracked body = `Dear [TITLE],\n\nYour email will preview here.\n\nSincerely,\n[FULL NAME]`;

  @action
  updateData(evt) {
    evt.preventDefault();
    const data = $("form").serializeArray();
    this.buildEmailPreview(data);
  }

  @action
  buildEmailPreview(formData) {
    return formData.forEach((formField) => {
      const item = formField.name;
      return this[item] = formField.value;
    });
  }

  @action
  buildGmailLink(email, body, subject) {
    return `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  buildEmailLink(email, body, subject) {
    return `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }
}
