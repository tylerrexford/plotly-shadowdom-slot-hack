/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,
// so no need to change the symbol. 
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

// A web component that doesn't work
//import './broken-plotly.js';
// A web component that DOES work
//import './shallow-plotly.js';
// A demonstration that the <slot> approach can work with arbitrarily deep shadow doms
import './nested-plotly.js';

class StartPolymer3 extends PolymerElement {
	constructor() {
		super();
		
		// Give other elements access to the highest level element in the DOM
		// so that they can slot the div that they'll call newPlot on
		document.hackyRootElement = this;
	}
  static get template () {
    return html`
		<broken-plotly></broken-plotly>
		<shallow-plotly></shallow-plotly>
		<nested-plotly><slot></slot></nested-plotly>
    `;
  }
}

// Register the element with the browser.
customElements.define('start-polymer3', StartPolymer3);
