export default function Footer() {
    return (
        <footer className="bg-white text-gray-700">
            {/* Main Footer Content */}
            <div className="container mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-4 gap-8 items-start ">
                {/* Logo and Address */}
                <div className="space-y-4">
                    <h2 className="font-bold text-3xl">Funiro.</h2>
                    <p className="text-gray-500">
                        400 University Drive Suite 200 Coral Gables,
                        <br />
                        FL 33134 USA
                    </p>
                </div>

                {/* Links Section */}
                <div >
                    <h4 className="font-bold text-lg text-gray-400 mb-4">Links</h4>
                    <ul className="space-y-2">
                        <li className="text-black hover:underline cursor-pointer">Home</li>
                        <li className="text-black hover:underline cursor-pointer ">Shop</li>
                        <li className="text-black hover:underline cursor-pointer">About</li>
                        <li className="text-black hover:underline cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Help Section */}
                <div>
                    <h4 className="font-bold text-lg text-gray-400 mb-4">Help</h4>
                    <ul className="space-y-2">
                        <li className="text-black hover:underline cursor-pointer">Payment Options</li>
                        <li className="text-black hover:underline cursor-pointer">Returns</li>
                        <li className="text-black hover:underline cursor-pointer">Privacy Policies</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-bold text-lg text-gray-400 mb-4">Newsletter</h4>
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Enter Your Email Address"
                            className="border-b-2 border-gray-400 focus:outline-none focus:border-black w-full pb-1"
                        />
                        <button
                            type="submit"
                            className="text-black font-bold hover:underline"
                        >
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-300 mt-8">
                <div className="container mx-auto py-4 text-center text-gray-500">
                    <p>2023 Funiro. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}
