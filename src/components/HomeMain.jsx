const HomeMain = () => {
  return (
    <div className="home-main flex items-end bg-[#fdf4f3] rounded-xl m-20 px-20 py-6 gap-8 shadow-lg">
      {/* Location */}
      <div className="flex-1 min-w-[220px]">
        <label className="block text-[17px] text-gray-700 mb-1" htmlFor="FIRST">
          Select City, Location or Hotel Name
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            id="FIRST"
            placeholder="Goa, Goa"
            className="text-2xl w-65 font-bold text-gray-800 bg-transparent border-none focus:ring-0 p-0"
          />
          <span className="text-xl text-gray-500 ml-19">&#x25BC;</span>
        </div>
        <p className="text-gray-500 text-[15px]">India</p>
        <div className="border-b border-gray-300 mt-2 w-90" />
      </div>
      {/* Check-in */}
      <div className="min-w-[100px]">
        <label
          className="block text-[17px] text-gray-700 mb-1"
          htmlFor="CHECKIN"
        >
          Check-in Date
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            id="CHECKIN"
            placeholder="30"
            className="text-2xl font-bold text-gray-800 bg-transparent border-none focus:ring-0 p-0 w-10"
          />
          <input
            type="text"
            placeholder="Jun' 25"
            className="text-lg text-gray-700 bg-transparent border-none focus:ring-0 p-0 w-16"
          />
          <span className="text-xl text-gray-500">&#x25BC;</span>
        </div>
        <p className="text-gray-500 text-[15px]">Monday</p>
        <div className="border-b border-gray-300 mt-2 w-[150px]" />
      </div>
      {/* Check-out */}
      <div className="min-w-[100px]">
        <label
          className="block text-[17px] text-gray-700 mb-1"
          htmlFor="CHECKOUT"
        >
          Check-out Date
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            id="CHECKOUT"
            placeholder="01"
            className="text-2xl font-bold text-gray-800 bg-transparent border-none focus:ring-0 p-0 w-10"
          />
          <input
            type="text"
            placeholder="Jul' 25"
            className="text-lg text-gray-700 bg-transparent border-none focus:ring-0 p-0 w-16"
          />
          <span className="text-xl text-gray-500">&#x25BC;</span>
        </div>
        <p className="text-gray-500 text-[15px]">Tuesday</p>
        <div className="border-b border-gray-300 mt-2 w-[150px]" />
      </div>
      {/* Rooms & Guests */}
      <div className="min-w-[220px]">
        <label className="block text-[17px] text-gray-700 mb-1" htmlFor="ROOMS">
          Room & Guest
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            id="ROOMS"
            placeholder="1"
            className="text-2xl font-bold text-gray-800 bg-transparent border-none focus:ring-0 p-0 w-8"
          />
          <input
            type="text"
            placeholder="Room,"
            className="text-lg text-gray-700 bg-transparent border-none focus:ring-0 p-0 w-14"
          />
          <input
            type="text"
            placeholder="2"
            className="text-2xl font-bold text-gray-800 bg-transparent border-none focus:ring-0 p-0 w-8"
          />
          <input
            type="text"
            placeholder="Guests"
            className="text-lg text-gray-700 bg-transparent border-none focus:ring-0 p-0 w-14"
          />
          <span className="text-xl text-gray-500">&#x25BC;</span>
        </div>
        <p className="text-gray-500 text-[15px]">2 Adults</p>
        <div className="border-b border-gray-300 mt-2" />
      </div>
      {/* Search Button */}
      <button className="bg-[#e51a1a] text-white font-semibold text-lg px-12 py-4 rounded-lg ml-4 hover:bg-red-700 transition">
        Search
      </button>
    </div>
  );
};

export default HomeMain;
