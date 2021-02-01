/**
 * A Demonstration of arbitrarily deep shadow dom nesting while still allowing
 * plotly to be slotted
 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class NestedPlotly4 extends PolymerElement {
	static get template () {
	// Template getter must return an instance of HTMLTemplateElement.
	// The html helper function makes this easy.
	return html`
		<style>
		</style>
		<button id="button" on-click="loadGraph">Load Graph</button>
		<div style="border: 4px solid green;">
			<div id="plotly-div-container4">
				<slot></slot>
			</div>
		</div>
	`;
	}
  
	constructor() {
		super();
		
		// Hacky way of adding plotly library
		var script = document.createElement("script");
		script.setAttribute("src", "https://cdn.plot.ly/plotly-latest.min.js");
		document.children[0].prepend(script);
		
		this.plotlyDiv = document.createElement("div");
		document.hackyRootElement.appendChild(this.plotlyDiv);
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
		
		var clickCallback = function(data) {
			console.log("data: " + data);
		}
		
		var self = this;
		Plotly.newPlot(this.plotlyDiv, data).then(function(plotDiv) {
			plotDiv.on('plotly_click', clickCallback);
			
			return self;
		});
	}
}


class NestedPlotly3 extends PolymerElement {
	static get template () {
		return html`
		<div style="border: 4px solid blue;">
			<nested-plotly4>
				<slot></slot>
			</nested-plotly4>
		</div>
		`;
	}
}

class NestedPlotly2 extends PolymerElement {
	static get template () {
		return html`
		<div style="border: 4px solid black;">
			<nested-plotly3>
				<slot></slot>
			</nested-plotly3>
		</div>
		`;
	}
}

class NestedPlotly1 extends PolymerElement {
	static get template () {
		return html`
		<div style="border: 4px solid red;">
			<nested-plotly2>
				<slot></slot>
			</nested-plotly2>
		</div>
		`;
	}
}

customElements.define('nested-plotly', NestedPlotly1);
customElements.define('nested-plotly2', NestedPlotly2);
customElements.define('nested-plotly3', NestedPlotly3);
customElements.define('nested-plotly4', NestedPlotly4);