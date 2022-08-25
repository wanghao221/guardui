import GuardElement from "./element.js";

export default class Toast extends GuardElement {

    constructor() {
        super();

        this.container.id = 'toast';

        let svg = `<svg t="1661415519631" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4575" width="16" height="16"><path d="M512 938.672C276.352 938.672 85.328 747.648 85.328 512 85.328 276.352 276.352 85.328 512 85.328c235.648 0 426.672 191.024 426.672 426.672 0 235.648-191.024 426.672-426.672 426.672z m-42.544-256L771.12 380.96l-60.336-60.336-241.328 241.36-120.704-120.704-60.32 60.336L469.44 682.672z" fill="#1EB76D" p-id="4576"></path></svg>`;
        let blob = new Blob([svg], {type: 'image/svg+xml'});
        let url = URL.createObjectURL(blob);
        let image = document.createElement('img');
        image.src = url;
        image.addEventListener('load', () => URL.revokeObjectURL(url), {once: false});
        this.image = image;
        this.container.append(this.image);

        this.label = document.createElement('label');
        this.label.style.fontVariant = 'tabular-nums'
        this.label.style.fontSize = '14px'
        this.label.style.lineHeight = '1.5715'
        this.label.style.fontFeatureSettings = 'tnum'
        this.label.style.textAlign = 'center'
        this.label.style.fontFamily = 'sans-serif'
        this.label.style.marginLeft = '8px'
        this.label.textContent = this.innerHTML;
        this.container.append(this.label);

        let styleEle = document.createElement("style");
        styleEle.textContent = `
            #toast {
                display: flex;
                align-items: center;
                visibility: hidden;
                min-width: 200px;
                margin-left: -100px;
                background-color: #FFF;
                color: #202020;
                border-radius: 2px;
                padding: 8px 16px;
                position: fixed;
                z-index: 1;
                left: 50%;
                top: 10px;
                box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
                pointer-events: all;
            }

            #toast.show {
                visibility: visible;
                However, delay the fade out process for 2.5 seconds */
                -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
                animation: fadein 0.5s, fadeout 0.5s 2.5s;
            }
            
            @-webkit-keyframes fadein {
                from {top: -20px; opacity: 0;}
                to {top: 10px; opacity: 1;}
            }
            
            @keyframes fadein {
                from {top: -20px; opacity: 0;}
                to {top: 10px; opacity: 1;}
            }
            
            @-webkit-keyframes fadeout {
                from {top: 10px; opacity: 1;}
                to {top: -20px; opacity: 0;}
            }
            
            @keyframes fadeout {
                from {top: 10px; opacity: 1;}
                to {top: -20px; opacity: 0;}
            }
        `;
        this.shadow.appendChild(styleEle);

    }

    setImage(svg) {
        let blob = new Blob([svg], {type: 'image/svg+xml'});
        let url = URL.createObjectURL(blob);
        this.image.src = url;
    }

    success(text) {
        let svg = `<svg t="1661415519631" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4575" width="16" height="16"><path d="M512 938.672C276.352 938.672 85.328 747.648 85.328 512 85.328 276.352 276.352 85.328 512 85.328c235.648 0 426.672 191.024 426.672 426.672 0 235.648-191.024 426.672-426.672 426.672z m-42.544-256L771.12 380.96l-60.336-60.336-241.328 241.36-120.704-120.704-60.32 60.336L469.44 682.672z" fill="#1EB76D" p-id="4576"></path></svg>`;
        this.setImage(svg);
        this.show(text);
    }

    error(text) {
        let svg = `<svg t="1661417943729" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4863" width="16" height="16"><path d="M512 451.67l211.2-211.2 60.33 60.33L572.33 512l211.2 211.2-60.33 60.33L512 572.33l-211.2 211.2-60.33-60.33L451.67 512l-211.2-211.2 60.33-60.33L512 451.67z" p-id="4864"></path></svg>`;
        this.setImage(svg);
        this.show(text);
    }

    show(text) {
        this.label.textContent = text;
        this.container.className = "show";

        // After 3 seconds, remove the show class from DIV
        const that = this;
        setTimeout(function(){ 
            that.container.className = that.container.className.replace("show", ""); 
        }, 2800);
    }
}

window.customElements.define('g-toast', Toast);