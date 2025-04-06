import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <h2 className="mt-4 text-2xl font-semibold text-gray-700">Página no encontrada</h2>
            <p className="mt-2 text-gray-600">Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
            <Link
                href="/"
                className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
            >
                Volver al inicio
            </Link>
        </div>
    );
} 