class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <div class="p-4 bg-gray-200 rounded-lg text-center">
                <h2 class="p-6">Hello, Web Component!</h2>
            </div>
        `;
  }
}

customElements.define("my-component", MyComponent);
