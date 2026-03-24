import { Link } from 'react-router-dom'

const sections = [
  {
    title: '1. Information We Collect',
    body: [
      'We collect information you provide directly, including account details (such as email), profile information (such as name, bio, school, and major), and content you create (such as posts, comments, media uploads, bookmarks, and community activity).',
      'If you enable push notifications, we collect and store your device push token so we can deliver notifications.',
      'If you choose to use schedule upload during onboarding, we process the uploaded schedule image to extract course and profile information.',
      'We also collect limited technical information needed to operate the app, such as app version, device/OS context, and basic request metadata.',
    ],
  },
  {
    title: '2. How We Use Information',
    body: [
      'We use your information to provide and secure LIU Connect, authenticate accounts, personalize feeds, power communities and social features (including follows, likes, comments, and bookmarks), and keep the app functioning reliably.',
      'We use push tokens to send notification events you have opted in to receive.',
      'We use uploaded schedule data only to provide onboarding assistance and related in-app setup features.',
    ],
  },
  {
    title: '3. Sharing of Information',
    body: [
      'Some profile and content information is shared in-app with other users as part of LIU Connect features (for example, profile pages, posts, comments, and community participation).',
      'We may share information with service providers that help us operate the app (for example, infrastructure, media upload/storage, and notification delivery providers).',
      'We may disclose information when required by law, to protect users and platform integrity, or in connection with a business transaction.',
    ],
  },
  {
    title: '4. Data Retention',
    body: [
      'We retain personal information for as long as necessary to provide the service, maintain security, resolve disputes, and comply with legal obligations.',
      'You can request account deletion from account settings. When your account is deleted, we remove your account data in accordance with applicable law and operational requirements.',
    ],
  },
  {
    title: '5. Your Choices and Rights',
    body: [
      'You can update profile information inside the app and manage notification permissions from your device settings.',
      'Depending on your location, you may have rights to access, correct, or delete your data, and to object to or restrict certain processing.',
      'To exercise privacy rights, contact us at liuconnect.app@gmail.com.',
    ],
  },
  {
    title: '6. Children and Age Requirements',
    body: [
      'LIU Connect is intended for university communities and is not directed to children under 13 (or higher age thresholds where required by local law).',
      'If we learn we collected personal information from a child in violation of applicable law, we will take appropriate deletion and remediation steps.',
    ],
  },
  {
    title: '7. Security',
    body: [
      'We use reasonable technical and organizational measures to protect personal information. No method of transmission or storage is fully secure, but we continuously work to improve safeguards.',
    ],
  },
  {
    title: '8. International Data Transfers',
    body: [
      'Your information may be processed in countries other than your own. Where required, we apply safeguards consistent with applicable privacy laws.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. If material changes are made, we will update the effective date and may provide additional in-app notice.',
    ],
  },
]

export function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="mb-8">
          <Link to="/" className="text-accent hover:text-[#5fbdf5] text-sm font-medium transition-colors">
            Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">Privacy Policy</h1>
          <p className="text-white/60 mt-3">Effective date: March 24, 2026</p>
        </div>

        <div className="space-y-8 text-white/80 leading-relaxed">
          <p>
            LIU Connect (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. This policy explains
            what information we collect, how we use it, and your rights when using the LIU Connect mobile app and
            website.
          </p>

          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
              <div className="space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
            <p>
              For privacy questions, data requests, or account deletion requests, contact us at{' '}
              <a href="mailto:liuconnect.app@gmail.com" className="text-accent hover:text-[#5fbdf5] transition-colors">
                liuconnect.app@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
