function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">AI Guardian</h1>
      <button className="text-sm text-gray-600 hover:text-black">Logout</button>
    </header>
  );
}

export default Header;
