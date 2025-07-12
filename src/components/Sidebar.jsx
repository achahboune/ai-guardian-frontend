import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow h-full p-4">
      <nav className="flex flex-col gap-2">
        <Link to="/" className="hover:bg-gray-200 p-2 rounded">Dashboard</Link>
        <Link to="/documents" className="hover:bg-gray-200 p-2 rounded">Documents</Link>
        <Link to="/clients" className="hover:bg-gray-200 p-2 rounded">Clients</Link>
        <Link to="/reports" className="hover:bg-gray-200 p-2 rounded">Reports</Link>
        <Link to="/settings" className="hover:bg-gray-200 p-2 rounded">Settings</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
