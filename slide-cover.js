var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
let SlideCover = class SlideCover extends LitElement {
    constructor() {
        super(...arguments);
        this._content = {
            title: '',
            author: '',
            background: '',
            image1: '',
            image2: '',
            text1: '',
            text2: '',
        };
        this.content = '';
    }
    attributeChangedCallback(name, _old, value) {
        super.attributeChangedCallback(name, _old, value);
        switch (name) {
            case 'content':
                if (value !== null) {
                    this._content = { ...JSON.parse(value) };
                }
        }
    }
    render() {
        const body = document.querySelector('body');
        body?.style.setProperty('--background-image', `url(${this._content.background}`);
        return html `
      <div class="slide--wrapper">
        <div class="slide--panel"></div>
        <div class="slide--title-wrapper">
          <div class="slide--title">${this._content.title}</div>
        </div>
        <div class="slide--sections">
          <div class="slide--section section-1">
            <img class="image" src="${this._content.image1}" />
            <div class="text">${unsafeHTML(this._content.text1)}</div>
          </div>
          <div class="slide--section section-2">
            <img class="image" src="${this._content.image2}" />
            <div class="text">${unsafeHTML(this._content.text2)}</div>
          </div>
        </div>
      </div>
    `;
    }
};
SlideCover.styles = css `
    .slide--wrapper {
      --foreground-color: #69f0ae;
      --overlay-width: 25vw;
      display: block;
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      background-image: var(--background-image);
      background-repeat: no-repeat;
      background-size: cover;
      color: var(--foreground-color);
      font-family: Arial, sans-serif;
      box-sizing: border-box;
    }
    .slide--panel {
      z-index: 1;
      display: block;
      position: fixed;
      left: var(--overlay-width);
      top: 0;
      width: calc(100vw - var(--overlay-width));
      height: 100vh;
      background: rgba(100, 100, 100, 0.25);
      border-left: 10px solid var(--foreground-color);
      box-sizing: border-box;
    }
    .slide--title-wrapper {
      position: fixed;
      left: var(--overlay-width);
      bottom: 0;
      display: inline-flex;
      height: 100vh;
      align-items: center;
      box-sizing: border-box;
    }
    .slide--title {
      position: relative;
      transform-origin: left bottom;
      transform: rotate(-90deg) translateX(-50%);
      font-size: 3em;
      font-weight: bold;
      right: 0.25em;
      box-sizing: border-box;
    }
    .slide--sections {
      position: fixed;
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      gap: 3em;
      left: var(--overlay-width);
      top: 0;
      width: calc(100vw - var(--overlay-width));
      height: 100vh;
      padding: 4em 12em 4em 8em;
      box-sizing: border-box;
    }
    .slide--section {
      display: flex;
      flex-direction: row;
      align-items: center;
      box-sizing: border-box;
      gap: 2em;
    }
    .slide--section .text {
      font-size: 1.4em;
    }

    .bold {
      font-weight: bold;
    }
  `;
__decorate([
    property({ type: String })
], SlideCover.prototype, "content", void 0);
SlideCover = __decorate([
    customElement('slide-cover')
], SlideCover);
export { SlideCover };
//# sourceMappingURL=slide-cover.js.map