import React from 'react';
import { Mail } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-sm rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>
        <p className="text-gray-600 mb-6">Last Updated: May 21, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing or using Pliyt, you agree to these Terms. If you do not agree, please do not
            use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use of the Platform</h2>
          <p className="text-gray-700 mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Use our platform for unlawful purposes</li>
            <li>Attempt unauthorized access to our systems</li>
            <li>Misuse or impersonate another user</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
          <p className="text-gray-700">
            All content and trademarks on this site belong to Pliyt, Inc. You may not use our brand
            assets without prior written consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Disclaimers</h2>
          <p className="text-gray-700">
            The platform is provided "as-is." We do not guarantee uninterrupted service or absolute
            accuracy, although we strive for both.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-700">
            Pliyt is not liable for any indirect, incidental, or consequential damages arising from
            the use of our platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
          <p className="text-gray-700">
            These terms are governed by the laws of Delaware, United States.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
          <p className="text-gray-700">
            If you have questions, email us at{' '}
            <a 
              href="mailto:legal@pliyt.com"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center"
            >
              legal@pliyt.com
              <Mail className="ml-1 h-4 w-4" />
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
