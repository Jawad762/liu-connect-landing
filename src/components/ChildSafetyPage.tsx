import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Our commitment',
    body: [
      'LIU Connect is committed to keeping our community safe. We prohibit child sexual abuse and exploitation (CSAE) in any form on our service.',
      'This page describes our published standards. It applies to the LIU Connect mobile app as listed on Google Play and the App Store under the name LIU Connect.',
    ],
  },
  {
    title: 'Definitions',
    body: [
      'Child sexual abuse and exploitation (CSAE) means content or behavior that sexually exploits, abuses, or endangers children. Examples include grooming a minor for sexual purposes, sextortion involving a minor, trafficking of a child for sex, or other sexual exploitation of a child.',
      'Child sexual abuse material (CSAM) means any visual depiction, including photos, videos, or computer-generated imagery, of a minor engaged in sexually explicit conduct. CSAM is illegal. We prohibit storing or sharing CSAM on LIU Connect and take it seriously when reported or detected.',
    ],
  },
  {
    title: 'Prohibited conduct and content',
    body: [
      'Users may not use LIU Connect to create, solicit, distribute, or facilitate CSAE or CSAM.',
      'We prohibit sexualization of minors, attempts to contact minors for sexual purposes, and any other conduct that puts children at risk, whether in posts, comments, profiles, messages, or media.',
    ],
  },
  {
    title: 'Reporting in the app',
    body: [
      'LIU Connect includes in-app reporting for posts and comments. You can choose a reason for your report so we can review it in context.',
      'Reports are reviewed by our team. We may remove content, restrict accounts, or take other action consistent with these standards and applicable law. You may not receive a personal reply to every report, but each report is considered.',
    ],
  },
  {
    title: 'How we address CSAM and serious harm',
    body: [
      'When we obtain actual knowledge of CSAM or similarly serious violations, we act in line with these standards and applicable law. That may include removing content, disabling accounts, and preserving records where required.',
      'We comply with child safety and reporting obligations that apply to us in the jurisdictions where we operate.',
    ],
  },
  {
    title: 'Child safety contact',
    body: [
      'For questions about these standards, child safety concerns related to LIU Connect, or cooperation requests from trusted partners and authorities acting within their remit, contact:',
    ],
  },
]

export function ChildSafetyPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="mb-8">
          <Link to="/" className="text-accent hover:text-[#5fbdf5] text-sm font-medium transition-colors">
            Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">Child safety standards</h1>
          <p className="text-white/60 mt-3">Standards against child sexual abuse and exploitation (CSAE)</p>
          <p className="text-white/60 mt-1">Effective date: March 28, 2026</p>
        </div>

        <div className="space-y-8 text-white/80 leading-relaxed">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
              <div className="space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.title === 'Child safety contact' && (
                  <p>
                    <a
                      href="mailto:liuconnect.app@gmail.com?subject=Child%20safety%20%28LIU%20Connect%29"
                      className="text-accent hover:text-[#5fbdf5] transition-colors"
                    >
                      liuconnect.app@gmail.com
                    </a>
                  </p>
                )}
              </div>
            </section>
          ))}

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Updates</h2>
            <p>
              We may update this page to reflect changes in our practices or legal requirements. The effective date at the top will change when we do. For other policies, see our{' '}
              <Link to="/privacy" className="text-accent hover:text-[#5fbdf5] transition-colors">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
