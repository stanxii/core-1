import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Order } from './Order/Order';

const Home = () => {
  return (
    <>
      <ul className="mb-2 list-reset">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/order/">Orders</Link>
        </li>
        <li>
          <Link to="/test/">Test</Link>
        </li>
      </ul>
    </>
  );
};

const App = () => (
  <Router>
    <div className="text-base text-black container mx-auto">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/order/" component={Order} />
        <Route path="/test/" component={Test} />
      </Switch>
    </div>
  </Router>
);

export const Test = () => {
  const [clicks, setClicks] = useState(0);
  const [enters, setEnters] = useState(0);

  const handleOnClick = () => {
    return setClicks(p => p + 1);
  };

  const handleOnMouseEnter = () => {
    console.log(Math.random());
    return setEnters(p => p + 1);
  };

  return (
    <>
      <div>onClicks: {clicks}</div>
      <div>onEnters: {enters}</div>
      <div
        onClick={handleOnClick}
        onMouseEnter={handleOnMouseEnter}
        style={{
          background: 'red',
          marginTop: '10px',
          width: '100px',
          padding: '30px',
        }}
      >
        CLICK ME
      </div>
    </>
  );
};

export default App;

// import React, { Component } from 'react';
// import { Todo } from './Todo/Todo';

// class App extends Component {
//   render() {
//     return (
//       <div className="container mx-auto px-2">
//         <Todo />
//       </div>
//     );
//   }
// }
// export default App;
