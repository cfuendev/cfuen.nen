import {LitElement, css, html} from "lit";

export class ImageLoad extends LitElement {
  static properties = {
    name: {},
    src: "",
    loaded: false,
    width: 0,
    height: 0
  };

  #_load(){
    this.loaded = true;
  };

  static styles = css`
    #img-load {
      height: auto;
    }
    #img-load > .Slot {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .MynaLinner {
      animation: spin 0.3s ease-in-out infinite;
      -o-animation: spin 0.3s ease-in-out infinite;
      -moz-animation: spin 0.3s ease-in-out infinite;
      -webkit-animation: spin 0.3s ease-in-out infinite;
    }
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(45deg);
      }
    }
    .Hide {
      display: none;
    }
    .Show {
      display: block;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    this.name = 'World';
  }

  render() {
    return html`
      <div id="img-load" style="max-width: ${this.width}px">
        <img
          src="${this.src}"
          class="${this.loaded ? "Show" : "Hide"}"
          style="max-width: ${this.width}px"
          @load="${this.#_load}"
        />
        <div class="${this.loaded ? "Hide" : "Slot"}"
          style="
            width: ${this.width}px;
            height: ${this.height ? this.height+"px" : ""};
          "
        >
          <svg class="MynaLinner" stroke="white" viewBox="0 0 256 256"
          style="width: ${this.width/4}px;">
            <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
            <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
            <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
            <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
            <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
            <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
            <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
            <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
          </svg>
        </div>
      </div>
    `
  }
}
customElements.define('img-load', ImageLoad);
