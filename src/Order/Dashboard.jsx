import React from 'react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div>
      <div>Dashboard</div>
      <ul className="list-reset">
        <li>
          <Link to="/order/new">New Order</Link>
        </li>
        <li>
          <Link to="/order/receive/">Recieve Order</Link>
        </li>
        <li>
          <Link to="/order/history/">Order History</Link>
        </li>
        <li>
          <Link to="/order/test/">Test</Link>
        </li>
        <li>
          <Link to="/order/test2/">Test2</Link>
        </li>
        <li>
          <Link to="/order/test3/">Test3</Link>
        </li>
        <li>
          <Link to="/order/vivian/">Vivian</Link>
        </li>
        <li>
          <Link to="/order/todo/">Todo</Link>
        </li>
      </ul>
    </div>
  );
};
