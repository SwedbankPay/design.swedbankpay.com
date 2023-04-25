# Contributing

## TL;DR

- clone/fork project.
- follow the setup guidelines found in readme.md.
- start on your feature/fix/etc.
- follow the linting rules set for eslint and stylelint.
- make sure it runs properly.
- create tests for your contribution.
- run all tests.
- run build scripts.
- add changes to changelog.
- if everything works, create a pull request.

## Creating a new component

### Create your component

Create a new file under `./src/App/components/[MyExampleComponent]/` for your component, name it `index.js`:

```javascript
//example component

import React from "react";
import PropTypes from "prop-types";

const MyExampleComponent = ({ type, title, separator }) => (
	<div className={`slab slab-${type}`}>
		<h3>{title}</h3>
		{separator ? <hr /> : null}
		This is my example component on a slab.
	</div>
);

MyExampleComponent.propTypes = {
	type: PropTypes.oneOf(["sm", "lg"]).isRequired,
	title: PropTypes.string.isRequired,
	separator: PropTypes.bool,
};

export default MyExampleComponent;
```

### Create a documentation page for your component

Create a new file under `./src/App/Documentation/Components/[MyExampleDocumentationComponent]/` for your component, call it `index.js`:

```javascript
//example documentation component

import React from "react";

//Read more about the import shortcuts in the readme (#, @, $ etc.)
import { ComponentPreview, DocContainer } from "@docutils";
import MyExampleComponent from "@components/MyExampleComponent";

const MyExampleDocumentationComponent = () => (
	<DocContainer>
		<p className="lead">This is the documentation for My Example Component.</p>
		<h2 id="example-usage">Example usage</h2>
		<ComponentPreview language="html" showCasePanel codeFigure>
			<MyExampleComponent type="lg" title="My Example Component" separator />
		</ComponentPreview>
	</DocContainer>
);

export default MyExampleDocumentationComponent;
```

Use the custom `ComponentPreview` component to preview your component. It has several props, for this example we are going to be using `language`, `showCasePanel` and `codeFigure`.

We are also using the `DocContainer` component to sentralize the layout of the documentation. This component scans the provided component for `<h2>`-tags and creates anchors for easier navigation. Just remember to add an id to the `<h2>`-tag.

### Add MyExampleDocumentationComponent to the routes

In `./src/App/routes/components.js` under the components object add the following:

```javascript
    /**
     * Components
     */
    {
        title: "Components",
        path: "/components",
        redirect: "/components/introduction",
        routes: [
            ...
            ...
            // ADD THIS
            {
                title: "My Example Documentation Component",
                path: "/docs/components/my-example-documentation-component",
                componentPath: "components/My-example-documentation-component"
            },
            ...
            ...
        ]
    },
```

You will now be able to go to the route you provided to preview your component. Run `npm start` if you haven't already done so, and navigate to `localhost:3000/docs/components/my-example-documentation-component` to see your component in action.

### Adding styles

#### Creating your stylesheet

To add styling for your component create a new file in `./src/less/components/`, name it `my-example-component.less`.

#### Importing the styles

Import it in the appropriate root-file (`swedbankpay.less` for the core styles, under `/themes` if the component is going to be part of a specific theme).

Assuming you are creating a core component the import would look like this:

```scss
// swedbankpay.less
...
...

// Components
...
...
@import "components/my-example-component";
...

```

#### Creating variables

To add custom variables to your component modify `./src/less/_variables.less`, and add a section for your component. Add it alphabetically and update the table of contents.

Adding a section should look like this:

```less
// _variables.less

// [number]. My Example Component
// ==========================================================================

@my-example-component-color: @gray-3;
@my-example-component-background: @gray-8;
@my-example-component-padding: 1rem;
@my-example-component-font-family: "Arial";
```

Your the styles for `MyExampleComponent` should now be included properly, and you should see changes immediatly while running dev.

When writing styles for your component, try to use `rem` (`1rem` = ~`16px`) and the predefined variables (only if it makes sense of course) as much as possible. And follow the linting rules set by `./.stylelintrc`.

### Adding JavaScript

If your component needs javascript to run, you will need to add the javascript to the `scripts`.

#### Create a script file for your component

Create a new file under `./src/scripts/main/[MyExampleComponent]/` for your component, name it `index.js`:

```javascript
const init = () => {
	alert("MyExampleComponent was initialized");
};

const MyExampleComponent = {
	init,
};

export default MyExampleComponent;
```

Note: All essential functionality for your component needs to be called within the `init` method.

#### Add your components script to scripts

Open `./src/scripts/index.js` and add your component:

```javascript
//index.js

//...
import MyExampleComponent from "./MyExampleComponent";
//...

const dg = {
    //...
    MyExampleComponent,
    //...
};

//...
export { ... MyExampleComponent, ... }
```

#### Initializing the script in the documentation

Considering the documentation is built in react your documentation component will load after `scripts` runs it's `initAll` method, you will need to run your component's init method when the component actually renders. You can do this by slightly modifying the `MyExampleDocumentationComponent`:

```javascript
//example documentation component

// change this line
import React, { Component } from "react";
...
// import your components script
import { MyExampleComponent } from "$/scripts";

...
...
// modify MyExampleDocumentationComponent
class MyExampleDocumentationComponent extends Component {
    componentDidMount () {
        MyExampleComponent.init();
    }

    render() {
        return (
            <DocContainer>
                <p className="lead">This is the documentation for My Example Component.</p>
                <h2 id="example-usage">Example usage</h2>
                <ComponentPreview language="html" showCasePanel codeFigure>
                    <MyExampleComponent type="lg" title="My Example Component" separator />
                </ComponentPreview>
            </DocContainer>
        )
    }
}
```
