import Image from "next/image";

export default function Categories() {
    const categories = [
        { title: "Dining", image: "/browse-images/bed.png" },
        { title: "Living", image: "/browse-images/browse.png" },
        { title: "Bedroom", image: "/browse-images/guldasta.png" },
    ];

    return (
        <section className="p-6 mt-24 max-w-[80vw] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center space-y-4"
                    >
                        {/* Image Container */}
                        <div className="w-full h-[480px] flex items-center justify-center rounded-lg overflow-hidden shadow-md bg-gray-100">
                            <Image
                                src={category.image}
                                alt={`${category.title} category`}
                                width={381}
                                height={480}
                                className="rounded-lg"
                            />
                        </div>
                        {/* Title */}
                        <h3 className="text-lg font-semibold">{category.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
