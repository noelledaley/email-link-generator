import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class ContainerComponent extends Component {
  @tracked email = "";
  @tracked subject = "";
  @tracked
  body = `paste the body of your email here`;
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
    this.buildEmailLink();
  }

  @action
  buildEmailLink() {
    const { email, subject, body } = this;
    return (this.emailLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`);
  }
}
