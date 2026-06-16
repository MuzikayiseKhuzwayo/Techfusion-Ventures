import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | TechFusion Automata",
  description: "Read the Terms of Service for using TechFusion Automata's website and services.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl min-h-[70vh]">
      <h1 className="text-4xl font-bold mb-8 text-gradient">Terms of Service</h1>
      <p className="text-foreground/50 text-sm mb-8">Last Updated: June 15, 2026</p>
      
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">1. Agreement to Terms</h2>
          <p>
            By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, then you are prohibited from using the site and must discontinue use immediately.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the site and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">3. User Representations</h2>
          <p>
            By using the site, you represent and warrant that:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>All registration or contact information you submit will be true, accurate, current, and complete.</li>
            <li>You will maintain the accuracy of such information and promptly update it as necessary.</li>
            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
            <li>You will not use the site for any illegal or unauthorized purpose.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">4. Prohibited Activities</h2>
          <p>
            You may not access or use the site for any purpose other than that for which we make the site available. The site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">5. Limitation of Liability</h2>
          <p>
            In no event will TechFusion Automata or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">6. Governing Law</h2>
          <p>
            These Terms of Service and your use of the site are governed by and construed in accordance with the laws of South Africa, without regard to its conflict of law principles.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">7. Contact Us</h2>
          <p>
            In order to resolve a complaint regarding the site or to receive further information regarding use of the site, please contact us at:
          </p>
          <p className="font-semibold text-accent-light">
            <a href="mailto:muzikhuzwayo@techfusion-ventures.xyz">muzikhuzwayo@techfusion-ventures.xyz</a>
          </p>
        </section>
      </div>
    </div>
  );
}
