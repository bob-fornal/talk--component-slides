import { LitElement } from 'lit';
export declare class SlideCover extends LitElement {
    static styles: import("lit").CSSResult;
    private _content;
    content: string;
    attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'slide-cover': SlideCover;
    }
}
//# sourceMappingURL=slide-cover.d.ts.map