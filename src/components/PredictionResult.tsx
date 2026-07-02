import { TrendingUp, CheckCircle, RefreshCw } from 'lucide-react';

interface PredictionResultProps {
  minPrice: number;
  modalPrice: number;
  maxPrice: number;
  onReset: () => void;
}

export default function PredictionResult({ minPrice, modalPrice, maxPrice, onReset }: PredictionResultProps) {
  return (
    <div className="mt-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200 animate-fadeIn">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-emerald-500 rounded-full p-2">
          <CheckCircle className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800">Your Model Will Predict These Outputs</h3>
      </div>

      <div className="space-y-4 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">1</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600 font-medium mb-1">Minimum Price (₹)</p>
              <p className="text-3xl font-bold text-blue-600">₹{minPrice.toFixed(2)}</p>
              <p className="text-xs text-gray-500 mt-2">Lowest price recorded for that commodity in that market/day.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-emerald-500">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-emerald-600 font-bold text-lg">3</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600 font-medium mb-1">Modal Price (₹)</p>
              <p className="text-4xl font-bold text-emerald-600">₹{modalPrice.toFixed(2)}</p>
              <p className="text-xs text-gray-500 mt-2">Most common or average market price. The true selling price used by farmers, traders, and markets.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-orange-100 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-orange-600 font-bold text-lg">2</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600 font-medium mb-1">Maximum Price (₹)</p>
              <p className="text-3xl font-bold text-orange-600">₹{maxPrice.toFixed(2)}</p>
              <p className="text-xs text-gray-500 mt-2">Highest price recorded for that commodity in that market/day.</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onReset}
        className="w-full bg-white hover:bg-gray-50 text-emerald-600 font-semibold py-3 px-6 rounded-xl border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-200 flex items-center justify-center gap-2"
      >
        <RefreshCw className="w-5 h-5" />
        Make Another Prediction
      </button>
    </div>
  );
}
