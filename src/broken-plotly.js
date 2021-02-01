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

class ShallowPlotly extends PolymerElement {
	static get template () {
	// Template getter must return an instance of HTMLTemplateElement.
	// The html helper function makes this easy.
	return html`
		<style>
			#plotly-div {
				height: 400px;
				width: 400px;
			}
		</style>
		<button id="button" on-click="loadGraph">Load Graph</button>
		<div id="plotly-div"></div>
	`;
	}
  
	constructor() {
		super();
		var script = document.createElement("script");
		script.setAttribute("src", "https://cdn.plot.ly/plotly-latest.min.js");
		document.children[0].prepend(script);
	}
  
	loadGraph() {
		var data = [
			{
				z: [[1, null, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],
				x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				y: ['Morning', 'Afternoon', 'Evening'],
				type: 'heatmap',
				hoverongaps: true
			}
		];
		
		var self = this;
		Plotly.newPlot(this.$["plotly-div"], data).then(function(plotDiv) {
			plotDiv.on('plotly_click', test);
			
			return self;
		});
	}
}

// Register the element with the browser.
customElements.define('shallow-plotly', ShallowPlotly);
