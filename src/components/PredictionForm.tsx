import { useState, useEffect } from 'react';
import { Calendar, MapPin, ShoppingBag, Package, Award } from 'lucide-react';
import { states, getDistrictsByState, markets, commodities, varieties, grades } from '../data/formOptions';

interface PredictionFormProps {
  onPredict: (data: any) => void;
  loading: boolean;
}

export default function PredictionForm({ onPredict, loading }: PredictionFormProps) {
  const [formData, setFormData] = useState({
    state: '',
    district: '',
    market: '',
    commodity: '',
    variety: '',
    grade: '',
    day: '',
    month: '',
    year: '',
  });

  const [districts, setDistricts] = useState<string[]>([]);

  useEffect(() => {
    if (formData.state) {
      setDistricts(getDistrictsByState(formData.state));
      setFormData(prev => ({ ...prev, district: '' }));
    }
  }, [formData.state]);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/predict-vegetable-price`;

      const payload = {
        state: formData.state,
        district: formData.district,
        market: formData.market,
        commodity: formData.commodity,
        variety: formData.variety,
        grade: formData.grade,
        day: parseInt(formData.day),
        month: parseInt(formData.month),
        year: parseInt(formData.year),
      };

      onPredict(payload);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const isFormValid = Object.values(formData).every(value => value !== '');

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <MapPin className="w-4 h-4 text-emerald-600" />
            State <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.state}
            onChange={(e) => handleChange('state', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
            required
          >
            <option value="">-- Select State --</option>
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <MapPin className="w-4 h-4 text-emerald-600" />
            District <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.district}
            onChange={(e) => handleChange('district', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
            disabled={!formData.state}
            required
          >
            <option value="">-- Select District --</option>
            {districts.map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <ShoppingBag className="w-4 h-4 text-emerald-600" />
            Market <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.market}
            onChange={(e) => handleChange('market', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
            required
          >
            <option value="">-- Select Market --</option>
            {markets.map(market => (
              <option key={market} value={market}>{market}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Package className="w-4 h-4 text-emerald-600" />
            Commodity <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.commodity}
            onChange={(e) => handleChange('commodity', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
            required
          >
            <option value="">-- Select Commodity --</option>
            {commodities.map(commodity => (
              <option key={commodity} value={commodity}>{commodity}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Package className="w-4 h-4 text-emerald-600" />
            Variety <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.variety}
            onChange={(e) => handleChange('variety', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
            required
          >
            <option value="">-- Select Variety --</option>
            {varieties.map(variety => (
              <option key={variety} value={variety}>{variety}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Award className="w-4 h-4 text-emerald-600" />
            Grade <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.grade}
            onChange={(e) => handleChange('grade', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
            required
          >
            <option value="">-- Select Grade --</option>
            {grades.map(grade => (
              <option key={grade} value={grade}>{grade}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Calendar className="w-4 h-4 text-emerald-600" />
            Day <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.day}
            onChange={(e) => handleChange('day', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
            required
          >
            <option value="">-- Select Day --</option>
            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Calendar className="w-4 h-4 text-emerald-600" />
            Month <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.month}
            onChange={(e) => handleChange('month', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
            required
          >
            <option value="">-- Select Month --</option>
            {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, idx) => (
              <option key={month} value={idx + 1}>{month}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Calendar className="w-4 h-4 text-emerald-600" />
            Year <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.year}
            onChange={(e) => handleChange('year', e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
            required
          >
            <option value="">-- Select Year --</option>
            {Array.from({ length: 10 }, (_, i) => 2020 + i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={!isFormValid || loading}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
              Predicting Price...
            </>
          ) : (
            <>
              <Package className="w-5 h-5" />
              Predict Modal Price
            </>
          )}
        </button>
      </div>
    </form>
  );
}
