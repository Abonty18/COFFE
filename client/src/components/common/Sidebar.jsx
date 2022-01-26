import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="bg-gray-200 text-gray-700 flex-grow-1 w-1/5">
    <ul className="ml-5">
      <li className="mt-10">
        <Link className="text-dark-500 hover:text-blue-600" to="/">Home</Link>
      </li>
      <li className="mt-10">
        <Link className="text-dark-500 hover:text-blue-600" to="/frontend-resource">Frontend frameworks</Link>
      </li>
      <li className="mt-10">
        <Link className="text-dark-500 hover:text-blue-600" to="/backend-resource">Backend frameworks</Link>
      </li>
      <li className="mt-10">
        <Link className="text-dark-500 hover:text-blue-600" to="/infrastructure-resource">Infrastructure</Link>
      </li>
      <li className="mt-10">
        <Link className="text-dark-500 hover:text-blue-600" to="/frontend-video">Frontend frameworks (video tutorials)</Link>
      </li>
      <li className="mt-10">
        <Link className="text-dark-500 hover:text-blue-600" to="/backend-video">Backend frameworks (video tutorials)</Link>
      </li>
      <li className="mt-10">
        <Link className="text-dark-500 hover:text-blue-600" to="/infrastructure-video">Infrastructure (video tutorials)</Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
