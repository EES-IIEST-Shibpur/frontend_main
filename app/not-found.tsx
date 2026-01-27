import Link from 'next/link';
import { Home, AlertTriangle } from 'lucide-react'; // Assuming you have lucide-react installed

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-lg w-full border border-slate-100">
        <div className="flex justify-center mb-6">
          <div className="bg-red-50 p-4 rounded-full">
            <AlertTriangle className="w-16 h-16 text-ees-700" />
          </div>
        </div>
        
        <h1 className="text-6xl font-extrabold text-slate-900 mb-2">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Page Not Found</h2>
        
        <p className="text-slate-600 mb-8 leading-relaxed">
          Oops! It seems you've wandered off the circuit. The page you are looking for might have been moved or doesn't exist.
        </p>

        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-ees-700 hover:bg-ees-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-900/20"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>

      <div className="mt-8 text-slate-400 text-sm">
        Electrical Engineers' Society | IIEST Shibpur
      </div>
    </div>
  );
}
