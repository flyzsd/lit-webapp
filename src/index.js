var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html, css } from 'https://unpkg.com/lit@2.0.2/index.js?module';
import { customElement, property } from 'https://unpkg.com/@lit/reactive-element@1.0.2/decorators.js?module';
let AppRoot = class AppRoot extends LitElement {
    constructor() {
        super(...arguments);
        this.message = 'Learn LitElement';
    }
    static get styles() {
        return css `
      h1 {
        font-size: 4rem;
      }
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        background-color: #2196f3;
        background: linear-gradient(315deg, #b4d2ea 0%, #2196f3 100%);
        font-size: 24px;
      }
      .link {
        color: white;
      }
    `;
    }
    render() {
        return html `
            <div class="wrapper">
                <h1>LitElement + Snowpack</h1>
                <p>Edit <code>src/app-root.ts</code> and save to reload.</p>
                <a
                        class="link"
                        href="https://lit-element.polymer-project.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                >
                    ${this.message}
                </a>
            </div>
        `;
    }
};
__decorate([
    property(),
    __metadata("design:type", Object)
], AppRoot.prototype, "message", void 0);
AppRoot = __decorate([
    customElement('app-root')
], AppRoot);
export { AppRoot };
