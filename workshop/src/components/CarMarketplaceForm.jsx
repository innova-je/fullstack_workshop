import { useState, useEffect } from "react";
import { getDictionary, addEntry } from "./LocalStorageHelper";

const CarMarketplaceForm = () => {
    const [carName, setCarName] = useState("");
    const [price, setPrice] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [longDescription, setLongDescription] = useState("");
    const [dictionary, setDictionary] = useState(getDictionary());

    // Sync dictionary state with localStorage on mount
    useEffect(() => {
        setDictionary(getDictionary());
    }, []);

    // Add form data to the dictionary using carName as the key
    const handleAdd = () => {
        if (!carName.trim()) {
            console.log("Car name is required!");
            return;
        }

        const carData = {
            price,
            shortDescription,
            longDescription
        };

        addEntry(carName, carData);
        setDictionary(getDictionary()); // Update state
    };


    // Redirect after submission
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd();
        window.location.href = "/marketplace";
    };

    return (
        <div className="flex flex-col justify-center w-[300px] md:w-[450px] p-8 rounded-lg h-fit items-center bg-gray-900">
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
                <div>
                    <label className="mb-1 block text-sm font-medium text-white">
                        Car Name
                    </label>
                    <input
                        type="text"
                        className="w-full text-center p-2 border rounded-md bg-gray-500 text-white"
                        value={carName}
                        onChange={(e) => setCarName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-white">
                        Price in USD
                    </label>
                    <input
                        type="number"
                        className="w-full text-center p-2 border rounded-md bg-gray-500 text-white"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-white">
                        Short Description
                    </label>
                    <input
                        type="text"
                        className="w-full text-center p-2 border rounded-md bg-gray-500 text-white"
                        value={shortDescription}
                        onChange={(e) => setShortDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-white">
                        Long Description
                    </label>
                    <textarea
                        className="w-full text-center p-2 border rounded-md bg-gray-500 text-white"
                        rows="5"
                        value={longDescription}
                        onChange={(e) => setLongDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="button" onClick={handleAdd} className="w-full text-gray-900 py-2 rounded-md">Add to Marketplace</button>
            </form>

            {/* Display Dictionary */}
            <div className="mt-4 p-4 bg-gray-700 text-white w-full rounded-md">
                <h3 className="text-lg font-semibold">Stored Cars</h3>
                <pre className="text-sm text-start text-wrap">{JSON.stringify(dictionary, null, 2)}</pre>
            </div>
        </div>
    );
};

export default CarMarketplaceForm;
