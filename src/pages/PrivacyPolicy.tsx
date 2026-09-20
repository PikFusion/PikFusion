import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  const effectiveDate = 'September 20, 2026';

  return (
    <div className="pt-32 pb-20 bg-gray-900 text-gray-300 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* Header */}
          <div className="mb-12">

            <p className="text-purple-400 font-medium mb-3">
              PikFusion Privacy & Data Protection
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed mb-4">
              This Privacy Policy explains how PikFusion Private Limited
              ("PikFusion", "we", "our", or "us") collects, uses, processes,
              and protects personal information when you visit our website,
              contact our team, or enquire about our web development,
              SEO, software development, digital marketing, mobile app,
              CRM, SaaS, eCommerce, and other digital solutions.
            </p>

            <p>
              <strong className="text-white">
                Effective Date:
              </strong>{' '}
              {effectiveDate}
            </p>

          </div>

          <div className="space-y-10 text-lg leading-relaxed">

            {/* 1 */}
            <section>

              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                1. Introduction
              </h2>

              <p>
                PikFusion respects your privacy and is committed to
                handling personal information responsibly. This Privacy
                Policy describes the types of information we may collect
                when you visit our website, communicate with us, submit
                project enquiries, or interact with our digital services.
              </p>

              <p className="mt-4">
                By using our website, you acknowledge the practices
                described in this Privacy Policy. If you do not agree
                with this policy, you should discontinue use of the
                website.
              </p>

            </section>

            {/* 2 */}
            <section>

              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                2. Information We Collect
              </h2>

              <p className="mb-4">
                We may collect information that you voluntarily provide
                and certain technical information generated when you
                interact with our website.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">
                Information You Provide
              </h3>

              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number, when provided</li>
                <li>Company or organization name</li>
                <li>Project requirements</li>
                <li>Estimated project budget</li>
                <li>Messages submitted through our contact forms</li>
                <li>
                  Information you provide when requesting web development,
                  SEO, software development, digital marketing, or other
                  PikFusion services
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">
                Information Collected Automatically
              </h3>

              <p className="mb-3">
                When you access our website, certain technical information
                may be collected automatically depending on your browser,
                device, cookie settings, and analytics configuration.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device type</li>
                <li>Operating system</li>
                <li>Approximate geographic information</li>
                <li>Pages visited</li>
                <li>Referral source</li>
                <li>Time spent on pages</li>
                <li>Website interaction and navigation data</li>
              </ul>

            </section>

            {/* 3 */}
            <section>

              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                3. How We Use Your Information
              </h2>

              <p className="mb-4">
                We may use collected information for legitimate business
                purposes including:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Responding to project enquiries and consultation requests
                </li>

                <li>
                  Providing information about PikFusion services
                </li>

                <li>
                  Preparing proposals, estimates, and project discussions
                </li>

                <li>
                  Communicating regarding active or prospective projects
                </li>

                <li>
                  Delivering web development, SEO, software development,
                  mobile application, CRM, SaaS, eCommerce, UI/UX, digital
                  marketing, and related technology services
                </li>

                <li>
                  Improving our website, content, user experience, and
                  digital services
                </li>

                <li>
                  Understanding how visitors interact with our website
                </li>

                <li>
                  Measuring website and marketing performance
                </li>

                <li>
                  Detecting technical issues, abuse, fraud, or security
                  threats
                </li>

                <li>
                  Maintaining business records where reasonably necessary
                </li>

                <li>
                  Complying with applicable legal obligations
                </li>
              </ul>

            </section>

            {/* 4 */}
            <section>

              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                4. Google Analytics and Google Tag Manager
              </h2>

              <p>
                We use Google Analytics 4 (GA4) and Google Tag Manager
                (GTM) to help us understand website traffic, visitor
                behaviour, page performance, and how users interact with
                the PikFusion website.
              </p>

              <p className="mt-4">
                Depending on your browser settings, consent preferences,
                Google configuration, and applicable privacy requirements,
                these technologies may process information such as device
                information, browser information, approximate location,
                referral sources, visited pages, session activity, and
                website interactions.
              </p>

              <p className="mt-4">
                We use this information to improve website performance,
                SEO effectiveness, user experience, marketing strategy,
                and the quality of our digital services.
              </p>

            </section>

            {/* 5 */}
            <section>

              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                5. Cookies and Similar Technologies
              </h2>

              <p>
                Our website and third-party services used on our website
                may use cookies, tags, pixels, or similar technologies to
                remember preferences, measure website performance, analyze
                traffic, and improve the overall browsing experience.
              </p>

              <p className="mt-4">
                You may be able to control or disable cookies through
                your browser settings. Disabling certain cookies may
                affect website functionality or analytics.
              </p>

            </section>

            {/* 6 */}
            <section>

              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                6. Contact Forms and Project Enquiries
              </h2>

              <p>
                When you submit a project enquiry through our website,
                the information you enter may be processed by third-party
                form-processing infrastructure used by PikFusion to
                transmit the message to our team.
              </p>

              <p className="mt-4">
                This information may include your name, email address,
                company name, project budget, requested service, and
                project description.
              </p>

              <p className="mt-4">
                We use this information only for business communication,
                responding to enquiries, understanding project
                requirements, preparing proposals, and providing relevant
                PikFusion services.
              </p>

            </section>

            {/* 7 */}
            <section>

              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                7. Third-Party Service Providers
              </h2>

              <p>
                PikFusion may use trusted third-party service providers
                to support website hosting, analytics, forms, communications,
                infrastructure, security, and other operational functions.
              </p>

              <p className="mt-4">
                These providers may process limited information on our
                behalf according to their own privacy policies, contractual
                obligations, and applicable data protection requirements.
              </p>

              <p className="mt-4">
                We do not authorize third-party service providers to use
                personal information for purposes unrelated to providing
                their services to us, except where permitted or required
                by law.
              </p>

            </section>

            {/* 8 */}
            <section>

              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                8. How We Share Information
              </h2>

              <p className="mb-4">
                We do not sell personal information to advertisers.
                Information may be disclosed in limited circumstances
                including:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  With technology providers that support our website
                  and business operations
                </li>

                <li>
                  With professional advisers where necessary
                </li>

                <li>
                  When required by law, legal process, regulatory
                  authorities, or valid governmental requests
                </li>

                <li>
                  When reasonably necessary to protect PikFusion,
                  our users, clients, property, or legal rights
                </li>

                <li>
                  As part of a merger, acquisition, restructuring,
                  financing, or transfer of business assets, where
                  applicable
                </li>
              </ul>

            </section>

            {/* 9 */}
            <section>

              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                9. Data Retention
              </h2>

              <p>
                We retain personal information only for as long as
                reasonably necessary for the purposes described in this
                Privacy Policy, including responding to enquiries,
                maintaining business records, fulfilling contractual
                obligations, resolving disputes, improving services,
                and complying with applicable legal requirements.
              </p>

              <p className="mt-4">
                Retention periods may vary depending on the nature of
                the information and the reason it was collected.
              </p>

            </section>

            {/* 10 */}
            <section>

              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                10. Data Security
              </h2>

              <p>
                We use reasonable administrative, organizational, and
                technical measures intended to protect information
                against unauthorized access, misuse, alteration, loss,
                or disclosure.
              </p>

              <p className="mt-4">
                However, no website, internet transmission, or electronic
                storage system can be guaranteed to be completely secure.
                Users should therefore exercise appropriate care when
                submitting information online.
              </p>

            </section>

            {/* 11 */}
            <section>

              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                11. International Data Processing
              </h2>

              <p>
                Some third-party technology providers used by PikFusion
                may operate servers or process information in countries
                outside the country in which you live.
              </p>

              <p className="mt-4">
                Where international processing occurs, information may
                be subject to the laws and safeguards applicable in the
                relevant jurisdiction.
              </p>

            </section>

            {/* 12 */}
            <section>

              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                12. Your Privacy Rights
              </h2>

              <p className="mb-4">
                Depending on your location and applicable law, you may
                have rights regarding your personal information, which
                may include the ability to:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of certain personal information</li>
                <li>Request restriction of certain processing</li>
                <li>Object to certain processing activities</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Request information about how your data is used</li>
              </ul>

              <p className="mt-4">
                These rights are subject to applicable law and may not
                apply in every circumstance.
              </p>

            </section>

            {/* 13 */}
            <section>

              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                13. Children's Privacy
              </h2>

              <p>
                Our website and professional digital services are not
                specifically directed toward children. We do not
                intentionally seek to collect personal information from
                children through our website.
              </p>

              <p className="mt-4">
                If you believe that a child has provided personal
                information to us without appropriate authorization,
                please contact us so that we can review the matter.
              </p>

            </section>

            {/* 14 */}
            <section>

              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                14. External Websites
              </h2>

              <p>
                Our website may contain links to third-party websites,
                client projects, business partners, social platforms,
                or other external services.
              </p>

              <p className="mt-4">
                PikFusion is not responsible for the privacy practices,
                security, content, or policies of websites that we do
                not control. We encourage users to review the privacy
                policies of external websites before providing personal
                information.
              </p>

            </section>

            {/* 15 */}
            <section>

              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                15. Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy periodically to reflect
                changes to our website, technology, services, analytics,
                business operations, or applicable requirements.
              </p>

              <p className="mt-4">
                When material changes are made, the Effective Date at
                the top of this page will be updated.
              </p>

            </section>

            {/* 16 */}
            <section>

              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                16. Contact PikFusion
              </h2>

              <p className="mb-4">
                If you have questions regarding this Privacy Policy,
                your personal information, or PikFusion's privacy
                practices, you may contact us at:
              </p>

              <div className="bg-gray-800/50 border border-purple-500/20 rounded-2xl p-6">

                <p className="text-white font-semibold mb-3">
                  PIKFUSION PRIVATE LIMITED
                </p>

                <p>
                  Email:{' '}
                  <a
                    href="mailto:admin@pikfusion.com"
                    className="text-purple-400 hover:text-pink-400 transition-colors"
                  >
                    admin@pikfusion.com
                  </a>
                </p>

                <p className="mt-2">
                  Sy No 135/1, No 4 & 5, 4th Floor,
                  Maruthi Industrial Estate, Rajapalya,
                  Hoody, Bangalore, Karnataka – 560048, India
                </p>

              </div>

            </section>

          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;