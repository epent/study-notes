# React refs

Refs are used to access children outside of the typical dataflow (focus, text selection)




# React context API

Helps to manage state across the app without having need to pass props through multiple children that do not need these props.

in class-based component:

const authContext = React.createContext('here comes what should be passed'):

<AuthContext.Provider> - wraps the components that need this context
<AuthContext.Consumer> - allows to access this context


in functional component:

useContext(AuthContext);