const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-md">
      <div className="nav-head flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">Wilkommen</h1>
        <div className="nav-head-right flex items-center gap-4">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            ! Hi Name
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
