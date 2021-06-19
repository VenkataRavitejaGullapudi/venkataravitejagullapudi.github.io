# My Portifolio

### Basic Designing
Sketching -> UserFlows -> WireFrames -> Prototypes -> Final Design.

### Pages
1. Home Page
2. About Page
3. Projects Page
4. Skills Page
5. Contact Page

### Components
1. NavBar
2. Home
3. Header
4. Footer
5. About
6. Project Card
8. Skill Card

## Some Concepts
### Server Side Routing:
- It makes the whole page to refresh.
- We can get only the data for the current page at the time.
- For every Request, it will contact server to get the next/subsequent route.
### Client Side Routing:
- When a user clicks on particular link, the URL seems like changed in browser doesnot mean like its requesting server, instead what happens is that the request to the server is prevented and the adjustment of the URL will result in a **changed state of the application.**
- It helps to make a single page web application with navigation.
- This client side routing is done with help of the **JS History Object** which keeps track of the address in the browser.
- This resolves the content to be server on the browser tab.
- So, this _Client Side JS History object_ is sent by the server along with the index.html.
- It helps to stop reloading redudant components again.
- Some times if the application becoming larger, inital loading may take more and more time as most of the time the entire client side content is loaded on the first request.

### withRouter
-  withRouter is a higher order component that wraps a component and pass closest route's match, current page/url location & history object props to that wrapped component whenever it renders. Simply it connects component to the router. Only if it is placed in the Router component. 

### useLocation,useHistory,useParams,useRoutematch
- These are the hooks for the react functional components.
- We can directly get all those that are returned in the component wrapped in withrouter by using these hooks.
- It makes more simpler, just by calling those hooks in the react functional components we can get access to all those.
- But make sure it is in invoked in the component that is wrapped with the Router Component

## Router Types
1. Browser Router
    - localhost:3000/about.
    - Everything after the top-level domain is seen as the route.
2. Hash Router
    - localhost:3000/#/about.
    - Everything after the '#' is seen as the route.
3. Memory Router
    - localhost:3000/.
    - Doesnt use the url to track the routes.


### Check these for reference
- https://github.com/negomi/react-burger-menu/wiki/FAQ#i-want-to-control-the-open-state-programmatically-but-i-dont-understand-how-to-use-the-isopen-prop

## React Portals
- Portals provide a first-class way to render children into a DOM Node that exists outside the DOM hierarchy of the parent component.
- Even though a portal can be anywhere in the DOM tree, it behaves like a normal React child in every other way. Features like context work exactly the same regardless of whether the child is a portal, as the portal still exists in the React tree regardless of position in the DOM tree.

- This includes event bubbling. An event fired from inside a portal will propagate to ancestors in the containing React tree, even if those elements are not ancestors in the DOM tree. 

- Till now, we have seen that a root component is present in the index.html and all the react components are rendered to that div using React DOM.
- But now we are breaking this and adding another modal div which is sibbling to the root div.

### Event Bubbling:
- This will occur especially in the case of react portals.
- Whenever an event occured on the child component and if there is no handler/not defined any handler then it will be bubbled up to the parent component(it may bubble up further) and if any parent component event exists then it will be called. 
- We can fix this by calling the event.stopPropagation() in the particular event handler function of child which handled in the parent.
Eg: 
- If the parent overlay has some onclick method to close the modal then event bubbling happens if we click on the modal and therefore even you click on the modal it will close.
- So to stop that specify the onclick event for the modal container and handle it by calling event.propagation() in the event handler.

<!-- Using Https/ seperate login for a git repositry -->
git config  --global credential.useHttpPath true