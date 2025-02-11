import { useState } from "react";

export default function Model() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Open Modal Button */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        Open Bottom Modal
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-white w-full max-w-md p-5 rounded-t-2xl shadow-lg transform translate-y-0 transition-all duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h2 className="text-xl font-bold mb-4">Bottom Modal</h2>
            <p className="text-gray-600">This is a simple bottom modal.</p>

            {/* Close Button */}
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
