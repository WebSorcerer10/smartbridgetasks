const UserCard = ({ name, email }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xl font-bold">
                {name.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            <p className="text-gray-500 hover:text-blue-500 transition-colors duration-200">
              {email}
            </p>
          </div>
        </div>
        <div className="mt-4 flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
            Message
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard; 