const Home = () => {
    return (
        <div className="h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center px-4">
            <div className="bg-gray-800 shadow-2xl rounded-2xl p-6 sm:p-10 w-[90%] max-w-md text-center border border-gray-700">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-4 drop-shadow-lg">Welcome to Todo App</h1>
                <p className="text-gray-300 mb-8 text-base sm:text-lg">
                    Organize your tasks efficiently and boost your productivity.
                </p>
                <a
                    href="/todos"
                    className="inline-block px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-200 font-semibold tracking-wide"
                >
                    Get Started
                </a>
            </div>
            <div className="w-full mt-10">
                {/* <Mainroutes /> */}
            </div>
        </div>
    );
};

export default Home;
