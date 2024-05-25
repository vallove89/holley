const template = `
    <template id="responsive-navigation-template">
        <style>
            /* Styles for the navigation */
            #navbar {
                background-color: #333;
                color: #fff;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 20px;
            }

            #nav-links {
                list-style-type: none;
                margin: 0;
                padding: 0;
                display: flex;
            }

            #nav-links li {
                margin-right: 15px;
            }

            #nav-links li:last-child {
                margin-right: 0;
            }

            #nav-links a {
                color: #fff;
                text-decoration: none;
            }

            /* Styles for the navigation toggle */
            .nav-toggle {
                display: none;
                flex-direction: column;
                cursor: pointer;
            }

            .bar {
                width: 25px;
                height: 3px;
                background-color: #fff;
                margin: 3px 0;
            }
        </style>

        <nav id="navbar">
            <div class="nav-toggle" id="nav-toggle">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <slot name="nav-links"></slot>
        </nav>
    </template>
`;

class ResponsiveNavigation extends HTMLElement {
    constructor() {
        super();

        const templateElement = document.createElement('div');
        templateElement.innerHTML = template;
        const templateContent = templateElement.querySelector('#responsive-navigation-template').content;

        this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));
    }

    connectedCallback() {
        const navToggle = this.shadowRoot.getElementById('nav-toggle');
        const navLinks = this.shadowRoot.querySelector('#nav-links');

        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        this.handleResize();

        window.addEventListener('resize', this.handleResize.bind(this));
    }

    handleResize() {
        const navToggle = this.shadowRoot.getElementById('nav-toggle');
        const navLinks = this.shadowRoot.querySelector('#nav-links');

        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            navToggle.style.display = 'flex';
        } else {
            navToggle.style.display = 'none';
            navLinks.classList.remove('active');
        }
    }
}

customElements.define('responsive-navigation', ResponsiveNavigation);
