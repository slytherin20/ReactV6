const App = () =>(
    React.createElement(
       "div",
       {},
       React.createElement("h1",{id:"logo"},"Adopt Me!")
   )
)
ReactDOM.render(React.createElement(App),
document.getElementById("root")
)
