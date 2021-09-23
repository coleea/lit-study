import { LitElement, html, css } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number }
    }
  }

  constructor() {
    super()
    this.name = `나는 lit 2.0 프로젝트입니다`
    this.count = 0
  }

  render() {
    return html`
      <h1>${this.name}</h1>
      <h2>나는 리액트와 비슷합니다</h2>
      <h2>lit는 클래스 기반 컴포넌트 입니다
      <br/>
      나를 쓰기전 script type="module"로 임포트하라
      <br/>
      lit는 기본적으로 CSR이지만 SSR도 가능하다
      <br/>
      쉐도우돔 기반이므로 css in js는 기본이다
      <br/>
      프로퍼티 선언은 constructor에서 하시오
      <br/>
      </h2>    

      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `
  }

  _onClick() {
    this.count++
  }
}

window.customElements.define('my-element', MyElement)
