import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// import { unsafeHTML } from 'lit/directives/unsafe-html.js';

interface TimelinePointDefinition {
  time: string;
  content: string;
}

interface TimelineSlideDefinition {
  title: string;
  background: string;
  points: Array<TimelinePointDefinition>;
}

@customElement('slide-timeline')
export class SlideTimeline extends LitElement {
  static override styles = css`
    .slide--wrapper {
      --foreground-color: #69f0ae;
      --overlay-height: 50vh;
      --content-wrapper-width: 80vw;

      line-height: 1.15;
      color: var(--foreground-color);
      font-family: Arial, sans-serif;
      box-sizing: border-box;

      display: block;
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      background-image: var(--background-image);
      background-repeat: no-repeat;
      background-size: cover;
    }
    .slide--panel {
      z-index: 1;
      display: block;
      position: fixed;
      left: 0;
      top: var(--overlay-height);
      width: 100vw;
      height: calc(100vh - var(--overlay-height));
      background: rgba(100, 100, 100, 0.25);
      border-top: 3px solid var(--foreground-color);
      box-sizing: border-box;
    }
    .slide--content-wrapper {
      --selected-color: black;
      position: fixed;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      width: var(--content-wrapper-width);
      left: calc(calc(100vw - var(--content-wrapper-width)) / 2);
      top: 10vh;
      height: 80vh;
    }
    .slide--content {
      --circle-size: 1.5em;
      width: calc(100% / var(--number-of-columns));
      display: inline-block;
      font-size: 1.25em;
      position: relative;
    }

    .circle--content {
      height: var(--circle-size);
      width: var(--circle-size);
      background-color: var(--selected-color);
      border-radius: 50%;
      border: 0.15em solid var(--foreground-color);
      display: inline-block;
      position: relative;
      top: calc(50% - 0.8em);
      left: calc(50% - 0.8em);
    }

    .slide--item {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .slide--content-top {
      position: absolute;
      bottom: calc(50% + 2em);
    }
    .slide--content-bottom {
      position: absolute;
      top: calc(50% + 2em);
    }

    .bold {
      font-weight: bold;
    }
    .smaller {
      font-size: 0.5em;
    }
    .align-right {
      margin-left: 8em;
    }
  `;

  private _content: TimelineSlideDefinition = {
    title: '',
    background: '',
    points: [],
  };

  @property({ type: String })
  content = '';

  override attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
    super.attributeChangedCallback(name, _old, value);

    switch(name) {
      case 'content':
        if (value !== null) {
          this._content = { ...JSON.parse(value) };
        }
    }
  }

  override render() {
    const body = document.querySelector('body')
    body?.style.setProperty('--background-image', `url(${this._content.background}`);

    return html`
      <div class="slide--wrapper">
        <div class="slide--panel">
          <div class="slide--content-wrapper" style="--number-of-columns: 5;">
            <div class="slide--content" style="--selected-color: yellow;">
              <div class="slide--item slide--content-top">One</div>
              <div class="circle--content"></div>
            </div>
            <div class="slide--content">
              <div class="slide--item slide--content-bottom">Two</div>
              <div class="circle--content"></div>
            </div>
            <div class="slide--content">
              <div class="slide--item slide--content-top">Three</div>
              <div class="circle--content"></div>
            </div>
            <div class="slide--content">
              <div class="slide--item slide--content-bottom">Four</div>
              <div class="circle--content"></div>
            </div>
            <div class="slide--content">
              <div class="slide--item slide--content-top">Five</div>
              <div class="circle--content"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'slide-timeline': SlideTimeline;
  }
}
