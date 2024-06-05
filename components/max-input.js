const template = document.createElement("template");
template.innerHTML = `
    <style>
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      .word-count{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        p{
            margin: 0;
        }
      }

      .progress{
        background-color: lightgrey;
        -webkit-appearance: none;
        accent-color: var(--color-progress);
        height: 0.5rem;
        border-radius: 2rem;
        overflow: hidden;
      }
      progress::-webkit-progress-bar{
        background-color: lightgrey;
        border-radius: 2rem;
      }
      progress::-webkit-progress-value{
        background-color: var(--color-progress);
        transition: width 0.2s 0.05s ease-in;
      }
      progress::-moz-progress-bar{
        background-color: var(--color-progress);
        transition: width 0.2s 0.05s ease-in;
      }
    }
    </style>
    <input type="text" />
    <div class="word-count">
        <p>character count: <span class="counter">0</span></p>
        <progress class="progress" max="" value=""></progress>
    </div>
`;

class MaxInput extends HTMLElement {
  #characterCount;
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });

    const clone = template.content.cloneNode(true);
    this.root.append(clone);

    this.maxInput = this.root.querySelector("input");
    this.maxInput.style.width = "200px";

    this.counter = this.root.querySelector(".counter");
    this.progress = this.root.querySelector(".progress");

    this.maxInput.addEventListener("input", (ev) => {
      this.#characterCount = ev.target.value.length;

      const limit = parseInt(document.querySelector("max-input").limit);

      this.counter.textContent = `${this.#characterCount}`;
      this.progress.max = `${limit}`;
      this.progress.value = `${this.#characterCount}`;

      if (this.#characterCount >= 0 && this.#characterCount < limit * 0.8) {
        this.maxInput.style.outlineColor = "";
        this.counter.style.color = "black";
        this.progress.style.setProperty("--color-progress", "");
      } else if (
        this.#characterCount >= Math.ceil(limit * 0.8) &&
        this.#characterCount < limit
      ) {
        this.maxInput.style.outlineColor = "orange";
        this.counter.style.color = "orange";
        this.progress.style.setProperty("--color-progress", "orange");
      } else {
        this.maxInput.style.outlineColor = "red";
        this.counter.style.color = "red";
        this.progress.style.setProperty("--color-progress", "red");
      }
    });
  }

  static get observedAttributes() {
    return ["limit", "placeholder"];
  }

  get limit() {
    return this.getAttribute("limit");
  }
  set limit(value) {
    this.setAttribute("limit", value);
  }

  get placeholder() {
    return this.getAttribute("placeholder");
  }
  set placeholder(value) {
    this.setAttribute("placeholder", value);
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName.toLowerCase() === "limit") {
      this.maxInput.maxLength = newVal;
    } else if (attrName.toLowerCase() === "placeholder") {
      this.maxInput.placeholder = newVal;
    }
  }
}

customElements.define("max-input", MaxInput);
