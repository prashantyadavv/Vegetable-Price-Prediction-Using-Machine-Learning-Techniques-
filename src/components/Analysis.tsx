import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Package, BarChart3, Gauge } from 'lucide-react';

const priceData = [
	{ month: 'Jan', tomato: 1200, onion: 1500, potato: 900, cabbage: 1100 },
	{ month: 'Feb', tomato: 1400, onion: 1400, potato: 950, cabbage: 1200 },
	{ month: 'Mar', tomato: 1600, onion: 1300, potato: 1000, cabbage: 1300 },
	{ month: 'Apr', tomato: 1800, onion: 1200, potato: 1050, cabbage: 1400 },
	{ month: 'May', tomato: 2000, onion: 1400, potato: 1100, cabbage: 1500 },
	{ month: 'Jun', tomato: 1900, onion: 1600, potato: 1150, cabbage: 1600 },
];

const commodityData = [
	{ name: 'Tomato', value: 2500 },
	{ name: 'Onion', value: 2100 },
	{ name: 'Potato', value: 1900 },
	{ name: 'Cabbage', value: 1600 },
	{ name: 'Carrot', value: 1400 },
	{ name: 'Capsicum', value: 1200 },
];

const marketData = [
	{ name: 'APMC Market', value: 3200 },
	{ name: 'Mandi Samiti', value: 2800 },
	{ name: 'Rythu Bazaar', value: 2100 },
	{ name: 'Agricultural Market', value: 1900 },
];

const gradeData = [
	{ grade: 'A Grade', count: 3500 },
	{ grade: 'B Grade', count: 2800 },
	{ grade: 'Premium', count: 2400 },
	{ grade: 'Standard', count: 1900 },
	{ grade: 'Fair Avg Quality', count: 1200 },
];

const COLORS = ['#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#8b5cf6'];

export default function Analysis() {
	return (
		<div className="space-y-8">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				<div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl border border-emerald-200">
					<div className="flex items-center gap-3 mb-2">
						<TrendingUp className="w-5 h-5 text-emerald-600" />
						<p className="text-gray-600 font-medium">Avg Price</p>
					</div>
					<p className="text-3xl font-bold text-emerald-700">₹1,450</p>
					<p className="text-sm text-emerald-600 mt-2">+12% from last month</p>
				</div>

				<div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200">
					<div className="flex items-center gap-3 mb-2">
						<Package className="w-5 h-5 text-teal-600" />
						<p className="text-gray-600 font-medium">Commodities</p>
					</div>
					<p className="text-3xl font-bold text-teal-700">23</p>
					<p className="text-sm text-teal-600 mt-2">Tracked in system</p>
				</div>

				<div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl border border-cyan-200">
					<div className="flex items-center gap-3 mb-2">
						<BarChart3 className="w-5 h-5 text-cyan-600" />
						<p className="text-gray-600 font-medium">Markets</p>
					</div>
					<p className="text-3xl font-bold text-cyan-700">45</p>
					<p className="text-sm text-cyan-600 mt-2">Active markets</p>
				</div>

				<div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
					<div className="flex items-center gap-3 mb-2">
						<Gauge className="w-5 h-5 text-blue-600" />
						<p className="text-gray-600 font-medium">Accuracy</p>
					</div>
					<p className="text-3xl font-bold text-blue-700">94.5%</p>
					<p className="text-sm text-blue-600 mt-2">Model accuracy</p>
				</div>
			</div>

			<div className="bg-white rounded-xl shadow-lg p-8">
				<h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
					<TrendingUp className="w-5 h-5 text-emerald-600" />
					Price Trends (6 Months)
				</h3>
				<ResponsiveContainer width="100%" height={400}>
					<LineChart data={priceData}>
						<CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
						<XAxis dataKey="month" stroke="#6b7280" />
						<YAxis stroke="#6b7280" />
						<Tooltip
							contentStyle={{ backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: '8px' }}
							formatter={(value) => `₹${value}`}
						/>
						<Legend />
						<Line type="monotone" dataKey="tomato" stroke="#ef4444" strokeWidth={2} dot={{ fill: '#ef4444' }} />
						<Line type="monotone" dataKey="onion" stroke="#f59e0b" strokeWidth={2} dot={{ fill: '#f59e0b' }} />
						<Line type="monotone" dataKey="potato" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6' }} />
						<Line type="monotone" dataKey="cabbage" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981' }} />
					</LineChart>
				</ResponsiveContainer>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<div className="bg-white rounded-xl shadow-lg p-8">
					<h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
						<Package className="w-5 h-5 text-emerald-600" />
						Top Commodities by Volume
					</h3>
					<ResponsiveContainer width="100%" height={300}>
						<BarChart data={commodityData}>
							<CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
							<XAxis dataKey="name" stroke="#6b7280" angle={-45} textAnchor="end" height={80} />
							<YAxis stroke="#6b7280" />
							<Tooltip
								contentStyle={{ backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: '8px' }}
							/>
							<Bar dataKey="value" fill="#10b981" radius={[8, 8, 0, 0]} />
						</BarChart>
					</ResponsiveContainer>
				</div>

				<div className="bg-white rounded-xl shadow-lg p-8">
					<h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
						<Gauge className="w-5 h-5 text-emerald-600" />
						Market Distribution
					</h3>
					<ResponsiveContainer width="100%" height={300}>
						<PieChart>
							<Pie
								data={marketData}
								cx="50%"
								cy="50%"
								labelLine={false}
								label={({ name, value }) => `${name}: ${value}`}
								outerRadius={100}
								fill="#8884d8"
								dataKey="value"
							>
								{marketData.map((entry, index) => (
									<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
								))}
							</Pie>
							<Tooltip formatter={(value) => `₹${value}`} />
						</PieChart>
					</ResponsiveContainer>
				</div>
			</div>

			<div className="bg-white rounded-xl shadow-lg p-8">
				<h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
					<BarChart3 className="w-5 h-5 text-emerald-600" />
					Grade Distribution
				</h3>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={gradeData} layout="vertical">
						<CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
						<XAxis type="number" stroke="#6b7280" />
						<YAxis type="category" dataKey="grade" stroke="#6b7280" width={160} />
						<Tooltip
							contentStyle={{ backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: '8px' }}
						/>
						<Bar dataKey="count" fill="#14b8a6" radius={[0, 8, 8, 0]} />
					</BarChart>
				</ResponsiveContainer>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
					<p className="text-gray-600 text-sm font-medium mb-1">Highest Price</p>
					<p className="text-2xl font-bold text-emerald-700">₹2,500</p>
					<p className="text-xs text-emerald-600 mt-2">Tomato in May 2024</p>
				</div>

				<div className="bg-teal-50 p-6 rounded-xl border border-teal-200">
					<p className="text-gray-600 text-sm font-medium mb-1">Lowest Price</p>
					<p className="text-2xl font-bold text-teal-700">₹850</p>
					<p className="text-xs text-teal-600 mt-2">Potato in January</p>
				</div>

				<div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200">
					<p className="text-gray-600 text-sm font-medium mb-1">Avg Price Range</p>
					<p className="text-2xl font-bold text-cyan-700">₹900-₹2,000</p>
					<p className="text-xs text-cyan-600 mt-2">All commodities</p>
				</div>
			</div>
		</div>
	);
}
