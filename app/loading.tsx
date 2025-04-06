import React from 'react';

export default function Loading() {
    return (
        <div className="flex items-center justify-center w-full h-[70vh]">
            <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
                <h2 className="mt-4 text-xl font-semibold text-gray-700">Cargando...</h2>
            </div>
        </div>
    );
} 