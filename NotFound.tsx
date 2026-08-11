import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center">
        <AlertCircle className="w-16 h-16 mx-auto mb-6" />

        <h1 className="text-4xl font-bold mb-4">404</h1>

        <p className="text-lg mb-6">
          The page you are looking for could not be found.
        </p>

        <button
          onClick={() => setLocation("/")}
          className="inline-flex items-center gap-2 px-6 py-3 border rounded-lg cursor-pointer"
        >
          <Home className="w-5 h-5" />
          Go Home
        </button>
      </div>
    </div>
  );
}
