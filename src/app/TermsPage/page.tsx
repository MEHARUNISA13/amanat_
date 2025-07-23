"use client";

export const dynamic = "force-dynamic";

export default function TermsPage() {
  return (
    <main className="min-h-screen p-6 sm:p-12 bg-gradient-to-b from-white via-green-50 to-green-100 text-gray-900">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Privacy Policy Section */}
        <section>
          <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-2">
            Privacy Policy for Amanat
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Effective Date:</strong> 10/07/2025
          </p>

          <div className="space-y-4 text-base sm:text-lg">
            <p>
              Amanat is designed to help users post, search, and manage listings
              for lost or found items. This policy explains what information we
              collect, how it is used, and your choices regarding your data.
            </p>

            <h2 className="font-semibold text-green-600">Permissions Required:</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Location access</li>
              <li>Camera access (optional)</li>
              <li>Storage access (optional)</li>
            </ul>

            <h2 className="font-semibold text-green-600">Third-Party Services:</h2>
            <p>
              We use Google AdMob to display ads. View their{' '}
              <a
                href="https://policies.google.com/privacy"
                className="text-green-600 underline"
                target="_blank"
              >
                privacy policy
              </a>
              .
            </p>

            <h2 className="font-semibold text-green-600">Children's Privacy:</h2>
            <p>This app is not intended for users under 13.</p>

            <h2 className="font-semibold text-green-600">Changes to this Policy:</h2>
            <p>
              We may update this policy. Effective date will always be posted above.
            </p>

            <p>
              <strong>Contact Us:</strong>{' '}
              <a
                href="mailto:info@amanat.dev"
                className="text-green-600 underline"
              >
                info@amanat.dev
              </a>
            </p>
          </div>
        </section>

        {/* Terms of Use Section */}
        <section>
          <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-2">
            Terms of Use for Amanat
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Effective Date:</strong> 10/07/2025
          </p>

          <div className="space-y-4 text-base sm:text-lg">
            <p>
              By accessing or using the app, you agree to these Terms and our
              Privacy Policy.
            </p>

            <h2 className="font-semibold text-green-600">Acceptance of Terms:</h2>
            <p>If you do not agree, do not use the app.</p>

            <h2 className="font-semibold text-green-600">Content and Responsibility:</h2>
            <p>
              You must provide accurate info and use the platform legally. We are not
              liable for user-submitted content.
            </p>

            <h2 className="font-semibold text-green-600">Intellectual Property:</h2>
            <p>
              All app content and design belongs to Amanat or its licensors. Limited
              personal use is granted.
            </p>

            <h2 className="font-semibold text-green-600">Modifications:</h2>
            <p>
              We reserve the right to modify terms at any time. Continued use means
              acceptance.
            </p>

            <p>
              <strong>Contact Us:</strong>{' '}
              <a
                href="mailto:info@amanat.dev"
                className="text-green-600 underline"
              >
                info@amanat.dev
              </a>
            </p>
          </div>
        </section>

        {/* Download PDF Button */}
        <div className="flex justify-center pt-6">
          <button
            onClick={() => window.print()}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded shadow-md transition"
          >
            Download PDF
          </button>
        </div>
      </div>
    </main>
  );
}
