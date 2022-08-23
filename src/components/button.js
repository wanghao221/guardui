import GuardElement from "./element.js";

export default class Button extends GuardElement {

    button;

    constructor() {
        super();

        this.button = document.createElement('button');

        this.button.style.width = this.container.style.width;
        this.button.style.height = this.container.style.height;

        const type = this.getAttribute('type') || this.getType();

        var backgroundColor = '#FFF';
        var textColor = '#606266';
        if (type === 'primary') {
            backgroundColor = '#396AFF';
            textColor = '#FFF';
        }
        this.button.style.backgroundColor = this.container.style.backgroundColor || backgroundColor;

        this.button.style.paddingTop = this.getAttribute('paddingTop') || '12px';
        this.button.style.paddingRight = this.getAttribute('paddingRight') || '20px';
        this.button.style.paddingBottom = this.getAttribute('paddingBottom') || '12px';
        this.button.style.paddingLeft = this.getAttribute('paddingLeft') || '20px';
        this.button.style.fontSize = this.getAttribute('fontSize') || '14px';
        this.button.style.borderRadius = this.getAttribute('borderRadius') || '4px';
        this.button.style.border = this.getAttribute('border') || '1px solid #dcdfe6';
        this.button.style.color = this.getAttribute('color') || textColor;

        this.button.innerText = this.innerHTML;
        this.button.style.cursor = 'pointer';

        this.container.append(this.button);
    }

    getType() {
        return 'default';
    }
}

window.customElements.define('g-button', Button);