import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | TechFusion Automata",
  description: "Learn how TechFusion Automata collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl min-h-[70vh]">
      <h1 className="text-4xl font-bold mb-8 text-gradient">Privacy Policy</h1>
      <p className="text-foreground/50 text-sm mb-8">Last Updated: June 15, 2026</p>
      
      <div className="space-y-8 text-foreground/80 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">1. Introduction</h2>
          <p>
            TechFusion Automata ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and interact with our services, including our contact forms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">2. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the website includes:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and message details, which you voluntarily provide to us when you fill out our contact form.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, browser type, operating system, access times, and the pages you have viewed.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">3. How We Use Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Respond to your inquiries, questions, and feedback.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the website.</li>
            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">4. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal identification information to others. We may share information we have collected about you in certain situations, such as to comply with legal obligations, protect our rights, or with third-party service providers (like Google Sheets API for contact submission management) who perform services for us.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">5. Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-accent-light">6. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <p className="font-semibold text-accent-light">
            <a href="mailto:muzikhuzwayo@techfusion-ventures.xyz">muzikhuzwayo@techfusion-ventures.xyz</a>
          </p>
        </section>
      </div>
    </div>
  );
}
