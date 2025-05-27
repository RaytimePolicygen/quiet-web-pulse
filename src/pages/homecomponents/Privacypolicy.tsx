import React from 'react';
import { Mail } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-sm rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">Last Updated: May 21, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-700">
            At Pliyt, privacy is not a feature—it's a foundation. This Privacy Policy explains how we collect,
            use, and protect your information when you use our website and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 mb-4">We may collect:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Contact information (e.g., email, name)</li>
            <li>Usage data (e.g., pages visited, device/browser info)</li>
            <li>Communication preferences</li>
          </ul>
          <p className="text-gray-700 mt-4">
            We do not share your behavioral data to third party until unless communicated.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Respond to inquiries or partnership requests</li>
            <li>Improve site functionality</li>
            <li>Provide updates, if opted-in</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
          <p className="text-gray-700">
            We do not sell or share your personal data with third-party advertisers. We may share
            information with trusted service providers who help us operate the platform, under strict
            confidentiality agreements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p className="text-gray-700 mb-4">You may:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Request access to or deletion of your data</li>
            <li>Opt out of communications</li>
            <li>
              Contact us for privacy concerns at{' '}
              <a 
                href="mailto:privacy@pliyt.com"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center"
              >
                privacy@pliyt.com
                <Mail className="ml-1 h-4 w-4" />
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
          <p className="text-gray-700">
            We employ industry-standard encryption, secure servers, and strict access control.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this policy. All changes will be posted here with a revised effective date.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;