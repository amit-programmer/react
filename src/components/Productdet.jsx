import { useNavigate, useParams } from "react-router-dom";

const Productdet = () => {
    const params = useParams();
    const navigator = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 px-2 w-full">
            <div className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-8 max-w-xs sm:max-w-md md:max-w-lg w-full">
                <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-indigo-400">Product Details</h1>
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 break-words">{params.name}</h2>
                <img
                    src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                    alt="Product"
                    className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg mb-6 border border-gray-700"
                />
                <p className="mb-4 text-gray-300 text-base sm:text-lg">
                    Discover our latest tech gadget, designed for efficiency and style. With a long-lasting battery, sleek design, and advanced features, this product is perfect for modern lifestyles.
                </p>
                <ul className="mb-6 space-y-2 text-gray-400 text-sm sm:text-base">
                    <li>• 12-hour battery life</li>
                    <li>• Fast charging support</li>
                    <li>• Lightweight & portable</li>
                    <li>• 1-year warranty</li>
                </ul>
                <button
                    className="w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold transition-colors"
                    onClick={() => navigator(-1)}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default Productdet;