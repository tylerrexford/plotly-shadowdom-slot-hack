# Slot hack for overcoming incompatibilities with shadow dom
This project is a demonstration of how slots can be used to emulate light DOM behavior even
inside arbitrarily deep shadow DOMs. Plotly is used inside of polymer3 custom elements for this demo,
although I suspect the approach could be used with any library that is incompatible with shadow DOM.

Note that a script tag is appended to the DOM to import Plotly in this demo, but in a project that I have that
uses npm to import Plotly, the slot approach still works.

[Demoing a plot being rendered inside of 4 shadow DOMs](functional-plotly-in-nested)
[Demoing the DOM tree with nested slots](nested-slot-dom-tree)
[Second half of Dom tree](nested-slot-dom-tree2)


This project is forked from the [polymer3-starter project ](https://github.com/PolymerLabs/start-polymer3)

.
.
.

#Instructions from original repo for using this project on the command line:
If you have done all this before:

```
npm install -g polymer-cli
git clone https://github.com/PolymerLabs/start-polymer3.git
cd start-polymer3
npm install
polymer serve
```

Otherwise: 

  1.  [Set up a development environment for Polymer projects](#setup):
        * [Install Polymer CLI prerequisites](#installprerequisites).
        * [Install Polymer CLI](#installcli).
  2.  [Clone, install and serve the `start-polymer3` project locally](#clone).
  3.  (Optional) [Build the `start-polymer3` project for production](#build).
  4.  (Optional) [Deploy the `start-polymer3` project](#deploy).

<a name="setup"></a>

## Set up a development environment for Polymer projects

Before you can serve this project, you will need to install Polymer CLI
and its prerequisites.

<a name="installprerequisites"></a>

### Install Polymer CLI Prerequisites

* [Git](https://git-scm.com/download/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)

<a name="installcli"></a>

### Install Polymer CLI

When you've installed the prerequisites, run the following command to install the Polymer CLI globally:

```
npm install -g polymer-cli
```

<a name="clone"></a>

## Clone, install and serve the start-polymer3 project locally

To clone the project, install its dependencies, and serve locally:

```
git clone https://github.com/PolymerLabs/start-polymer3.git
cd start-polymer3
npm install
polymer serve
```

To view the app, open the `applications` link in the latest version of Chrome or Safari. For example:

```
~/start-polymer3 > polymer serve
info:    Files in this directory are available under the following URLs
      applications: http://127.0.0.1:8081
      reusable components: http://127.0.0.1:8081/components/start-polymer3/
```

In the example above, you'd open http://127.0.0.1:8081.