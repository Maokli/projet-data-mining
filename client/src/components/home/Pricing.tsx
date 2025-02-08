import React from 'react';
import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core AI prediction technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <div className="text-4xl font-bold mb-2">$9.99<span className="text-lg text-gray-400">/mo</span></div>
              <p className="text-gray-400">Perfect for independent filmmakers</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-500 mr-2" />
                <span>10 predictions per month</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-500 mr-2" />
                <span>Basic audience insights</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-500 mr-2" />
                <span>Revenue predictions</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-500 mr-2" />
                <span>Email support</span>
              </li>
            </ul>
            <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg transition-colors">
              Start Free Trial
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-gray-800 rounded-2xl p-8 border-2 border-purple-500 transform scale-105">
            <div className="text-center mb-8">
              <div className="bg-purple-500 text-white text-sm font-semibold py-1 px-4 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <div className="text-4xl font-bold mb-2">$10.99<span className="text-lg text-gray-400">/mo</span></div>
              <p className="text-gray-400">For production companies</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-500 mr-2" />
                <span>Unlimited predictions</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-500 mr-2" />
                <span>Advanced audience insights</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-500 mr-2" />
                <span>Market trend analysis</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-500 mr-2" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-500 mr-2" />
                <span>API access</span>
              </li>
            </ul>
            <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg transition-colors">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold mb-2">Custom</div>
              <p className="text-gray-400">For major studios</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-500 mr-2" />
                <span>Custom prediction models</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-500 mr-2" />
                <span>Advanced analytics dashboard</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-500 mr-2" />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-500 mr-2" />
                <span>24/7 premium support</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-purple-500 mr-2" />
                <span>Custom integrations</span>
              </li>
            </ul>
            <button className="w-full bg-gray-700 hover:bg-gray-600 py-3 rounded-lg transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}