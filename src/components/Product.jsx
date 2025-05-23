import { Outlet, useNavigate } from "react-router-dom";

const Product = () => {
    const navigator = useNavigate();
    const Navigatehandler = (name) => {
        navigator(`/product/details/${name}`);
    };

    return (
        <div className="bg-gray-900 min-h-screen w-screen flex flex-col items-center justify-center px-2 py-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 text-center">Product Page</h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6 text-center max-w-xl">
                Welcome to the product page. Here you can find details about our products.
            </p>
            <button
                className="px-6 sm:px-8 py-2 sm:py-3 mb-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-all duration-200 font-semibold tracking-wide w-full max-w-xs"
                onClick={() => Navigatehandler("productivity")}
            >
                See more
            </button>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6 sm:gap-8 mt-4 w-full">
                <div className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center w-full sm:w-64 max-w-[90%] mx-auto">
                    <img
                        src="https://i.pinimg.com/originals/cc/06/9d/cc069dc3f18892150fe98b46bc2c83de.jpg"
                        alt="Product 1"
                        className="mb-4 rounded object-cover w-full h-80 object-top"
                    />
                    <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 text-center">Product 1</h2>
                    <p className="text-gray-400 text-sm text-center">This is a short description of Product 1.</p>
                    <button
                        onClick={() => Navigatehandler("product 1")}
                        className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 active:scale-95 transition-all duration-150 font-semibold mt-5 w-full"
                    >
                        More Details
                    </button>
                </div>

                <div className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center w-full sm:w-64 max-w-[90%] mx-auto">
                    <img
                        src="https://1.bp.blogspot.com/-alb1V3sExX0/XeJtZzw2UJI/AAAAAAAAKWY/T59MRjrz94IpXCsdYWENknicUtC00YPUgCLcBGAsYHQ/s1600/Beautiful-Model-mobile-wallpaper.jpg"
                        alt="Product 2"
                        className="mb-4 rounded object-cover w-full h-80 object-center"
                    />
                    <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 text-center">Product 2</h2>
                    <p className="text-gray-400 text-sm text-center">This is a short description of Product 2.</p>
                    <button
                        onClick={() => Navigatehandler("product 2")}
                        className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 active:scale-95 transition-all duration-150 font-semibold mt-5 w-full"
                    >
                        More Details
                    </button>
                </div>

                <div className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center w-full sm:w-64 max-w-[90%] mx-auto">
                    <img
                        src="https://64.media.tumblr.com/9a13ecc88b5104893246f683c60a812e/b8f018caf5076b2e-46/s540x810/ad676ef880cc888256ea3bec66bd32879a8448f6.jpg"
                        alt="Product 3"
                        className="mb-4 rounded object-cover w-full h-80 object-top"
                    />
                    <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 text-center">Product 3</h2>
                    <p className="text-gray-400 text-sm text-center">This is a short description of Product 3.</p>
                    <button
                        onClick={() => Navigatehandler("product 3")}
                        className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 active:scale-95 transition-all duration-150 font-semibold mt-5 w-full"
                    >
                        More Details
                    </button>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Product;
