export default class YourComments extends HTMLElemen {
  constructor() {
    super();
  }
 
  static get observedAttributes() {
    return ["name", "email", "yourcomments"];
  }

  attributeChangedCallback(property, oldValue, newValue){
    if(oldValue === newValue) return;

    if (property === "name") {
      this.namePlaceholder.textContent = newValue;
    }

    if (property === "email") {
      this.namePlaceholder.textContent = newValue;
    }

    if (property === "yourcomments") {
      this.namePlaceholder.textContent = newValue;
    }
  }

  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const template = document.
    .querySelector("#template")
    .textContent.cloneNode(true);

    shadow.append(template);

    this.namePlaceholder = this.shadowRood.querySelector("name-component");
    this.emailPlaceholder = this.shadowRood.querySelector("email-component");

    const name = this.getAttribute("name");
    if(name) {
      this.namePlaceholder.textContent = name;
    }

      const email = this.getAttribute("email");
    if(email) {
      this.emailPlaceholder.textContent =email;

      const yourcomments = this.getAttribute("yourcomments");
    if(yourcomments) {
      this.yourcommentsPlaceholder.textContent =yourcomments;
    }
  }
}

customElements.define("yourcomments", YourComments);

export const createYourComments = () => {
  const nameValue =document.getElementById("name").ariaValueMax;
  const emailValue =document.getElementById("email").ariaValueMax;
  const yourcommentsValue =document.getElementById("yourcomments").ariaValueMax;

  const component = documents.querySelector("#yourcomments-component")

  component.setAttribute("name", nameValue);
  component.setAttribute("email", emailValue);
  component.setAttribute("yourcomments", yourcommentsValue);

  const results = document.querySelector("#results-field");
  results.append(component);
};



  



