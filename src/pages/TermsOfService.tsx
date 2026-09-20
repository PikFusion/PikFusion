import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
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
              PikFusion Website & Service Terms
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed mb-4">
              These Terms of Service govern your use of the PikFusion website
              and the professional digital services offered by PikFusion,
              including web development, SEO, software development, mobile
              applications, CRM solutions, SaaS development, eCommerce
              development, UI/UX design, digital marketing, and business
              automation services.
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
                1. Agreement to These Terms
              </h2>

              <p>
                These Terms of Service ("Terms") apply to your access to and
                use of the PikFusion website and related services provided by
                PikFusion Private Limited ("PikFusion", "we", "our", or "us").
              </p>

              <p className="mt-4">
                By accessing our website, submitting an enquiry, requesting
                a proposal, or engaging PikFusion for professional services,
                you acknowledge that you have read and understood these Terms.
              </p>

              <p className="mt-4">
                If you do not agree with these Terms, you should discontinue
                use of the website.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                2. PikFusion Services
              </h2>

              <p className="mb-4">
                PikFusion provides technology, development, design, marketing,
                and digital transformation services that may include:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Custom website development</li>
                <li>Web application development</li>
                <li>Custom software development</li>
                <li>Mobile app development</li>
                <li>Search engine optimization (SEO)</li>
                <li>Technical SEO and on-page SEO</li>
                <li>Digital marketing services</li>
                <li>CRM development and business systems</li>
                <li>SaaS application development</li>
                <li>eCommerce website development</li>
                <li>UI/UX design</li>
                <li>Business automation solutions</li>
                <li>API and third-party system integrations</li>
                <li>Website maintenance and technical support</li>
              </ul>

              <p className="mt-4">
                The exact scope of services for a client project will be
                determined by the applicable quotation, proposal, statement
                of work, contract, invoice, project specification, or other
                written agreement between PikFusion and the client.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                3. Project Proposals and Scope of Work
              </h2>

              <p>
                Project requirements, deliverables, timelines, pricing,
                technical specifications, and included services may be
                documented in a proposal, quotation, statement of work,
                project brief, invoice, or other written agreement.
              </p>

              <p className="mt-4">
                Work requested outside the agreed project scope may require
                additional time, resources, and fees. PikFusion may provide
                a revised quotation or written approval request before
                completing additional work.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                4. Client Responsibilities
              </h2>

              <p className="mb-4">
                Clients are responsible for providing the information,
                materials, approvals, and access reasonably required to
                complete their project.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Providing accurate project requirements and business
                  information
                </li>

                <li>
                  Providing required content, images, logos, brand assets,
                  credentials, and other project materials
                </li>

                <li>
                  Reviewing project work and providing feedback within
                  reasonable timelines
                </li>

                <li>
                  Ensuring that materials provided to PikFusion do not
                  violate third-party intellectual property rights
                </li>

                <li>
                  Maintaining appropriate access and credentials for
                  third-party platforms used in the project
                </li>

                <li>
                  Making agreed payments according to applicable project
                  terms
                </li>
              </ul>

              <p className="mt-4">
                Delays in providing required materials, approvals, access,
                or feedback may affect project timelines.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                5. Fees and Payment
              </h2>

              <p>
                Pricing for PikFusion services is determined by the project
                scope, complexity, requirements, technologies, resources,
                and agreed commercial terms.
              </p>

              <p className="mt-4">
                Payment schedules, deposits, milestone payments, recurring
                service charges, or final payments will be specified in the
                relevant quotation, invoice, proposal, or project agreement.
              </p>

              <p className="mt-4">
                Third-party charges such as domain registration, website
                hosting, cloud infrastructure, premium software,
                subscription services, payment gateways, advertising
                platforms, plugins, APIs, email services, and other external
                services are not included unless specifically stated.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                6. Project Timelines
              </h2>

              <p>
                Any estimated delivery date or project timeline is based on
                the information available when the estimate is provided.
                Timelines may change due to modifications in project scope,
                delays in client feedback, third-party dependencies,
                technical issues, or circumstances outside PikFusion's
                reasonable control.
              </p>

              <p className="mt-4">
                PikFusion will make reasonable efforts to communicate
                significant changes affecting an agreed project schedule.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                7. Revisions and Change Requests
              </h2>

              <p>
                The number and type of revisions included in a project may
                depend on the applicable proposal or scope of work.
              </p>

              <p className="mt-4">
                Major changes to approved designs, functionality, business
                requirements, workflows, integrations, or technical
                architecture may be treated as additional work and may
                require revised pricing and delivery timelines.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                8. Intellectual Property
              </h2>

              <p>
                Ownership of custom project deliverables will be governed by
                the applicable proposal, contract, statement of work, or
                other written agreement between PikFusion and the client.
              </p>

              <p className="mt-4">
                Unless otherwise agreed in writing, PikFusion retains
                ownership of its pre-existing tools, frameworks, reusable
                components, development methods, internal processes,
                templates, libraries, know-how, and other intellectual
                property developed independently of a specific client
                project.
              </p>

              <p className="mt-4">
                Open-source software, third-party libraries, plugins,
                frameworks, APIs, fonts, images, and other external
                materials remain subject to their respective licences and
                terms.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                9. Client-Provided Content
              </h2>

              <p>
                Clients remain responsible for text, photographs, videos,
                logos, product information, trademarks, copyrighted
                materials, customer data, and other content supplied to
                PikFusion.
              </p>

              <p className="mt-4">
                By providing such materials, the client represents that it
                has the necessary rights and permissions to use those
                materials for the project.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                10. Third-Party Services and Integrations
              </h2>

              <p>
                PikFusion projects may integrate with third-party platforms
                such as hosting providers, payment gateways, analytics
                services, email systems, APIs, advertising platforms,
                cloud services, social networks, content management systems,
                and other software providers.
              </p>

              <p className="mt-4">
                Third-party services operate under their own terms,
                pricing, availability, security practices, and privacy
                policies. PikFusion does not control and cannot guarantee
                the uninterrupted operation of services provided by
                independent third parties.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                11. Search Engine Optimization and Digital Marketing
              </h2>

              <p>
                PikFusion may provide SEO services, technical SEO,
                on-page optimization, keyword research, content strategy,
                website optimization, analytics, and digital marketing
                services.
              </p>

              <p className="mt-4">
                Search engine rankings, organic traffic, advertising
                performance, leads, conversions, and business outcomes
                depend on numerous external factors and cannot be guaranteed.
              </p>

              <p className="mt-4">
                Search engines and advertising platforms may modify their
                algorithms, policies, ranking systems, advertising systems,
                or technical requirements at any time.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                12. Website and Software Performance
              </h2>

              <p>
                PikFusion aims to build reliable, secure, responsive, and
                performance-focused digital solutions. However, website
                speed, availability, software performance, and compatibility
                may be affected by hosting infrastructure, network
                conditions, third-party software, browser behaviour,
                integrations, external APIs, content, and other factors.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                13. Confidentiality
              </h2>

              <p>
                Where PikFusion and a client exchange confidential business
                or technical information, both parties should take
                reasonable steps to protect that information and use it
                only for legitimate project-related purposes.
              </p>

              <p className="mt-4">
                More specific confidentiality obligations may be established
                through a separate non-disclosure agreement or project
                contract.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                14. Portfolio and Project References
              </h2>

              <p>
                Subject to client agreements, confidentiality obligations,
                and applicable permissions, PikFusion may display completed
                projects, publicly available websites, screenshots, project
                descriptions, or client branding in its portfolio or
                marketing materials.
              </p>

              <p className="mt-4">
                Where a project is confidential or subject to specific
                restrictions, those agreed restrictions will apply.
              </p>
            </section>

            {/* 15 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                15. Website Usage
              </h2>

              <p className="mb-4">
                You may use the PikFusion website for legitimate
                informational and business purposes. You must not:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Attempt to gain unauthorized access to the website,
                  systems, servers, or accounts
                </li>

                <li>
                  Introduce malicious software or harmful code
                </li>

                <li>
                  Interfere with website security or availability
                </li>

                <li>
                  Copy or distribute protected PikFusion content without
                  authorization
                </li>

                <li>
                  Use the website for unlawful, fraudulent, or abusive
                  activity
                </li>
              </ul>
            </section>

            {/* 16 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                16. Disclaimer of Warranties
              </h2>

              <p>
                The PikFusion website and publicly available website
                information are provided on an "as available" basis to the
                extent permitted by applicable law.
              </p>

              <p className="mt-4">
                Specific warranties or service commitments relating to
                client projects, if any, will be governed by the applicable
                written agreement between PikFusion and the client.
              </p>
            </section>

            {/* 17 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                17. Limitation of Liability
              </h2>

              <p>
                To the extent permitted by applicable law, PikFusion will
                not be responsible for indirect, incidental, consequential,
                or special losses arising solely from the use of the public
                website or from circumstances outside PikFusion's reasonable
                control.
              </p>

              <p className="mt-4">
                Liability relating to paid professional services will be
                subject to the applicable project agreement and applicable
                law.
              </p>
            </section>

            {/* 18 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                18. Suspension or Termination of Services
              </h2>

              <p>
                PikFusion may suspend or terminate services where reasonably
                necessary, including in cases involving non-payment,
                unlawful activity, material breach of agreed terms, security
                risks, or misuse of PikFusion systems or services.
              </p>

              <p className="mt-4">
                Client project termination, refunds, deliverables, data
                transfer, and outstanding payments will be handled according
                to the applicable project agreement.
              </p>
            </section>

            {/* 19 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                19. External Links
              </h2>

              <p>
                The PikFusion website may contain links to client websites,
                portfolio projects, partners, social networks, or other
                third-party websites.
              </p>

              <p className="mt-4">
                PikFusion is not responsible for the content, security,
                availability, privacy practices, or terms of websites that
                we do not control.
              </p>
            </section>

            {/* 20 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                20. Privacy
              </h2>

              <p>
                Information collected through the PikFusion website is
                handled in accordance with our Privacy Policy. Users should
                review the Privacy Policy to understand how personal
                information may be collected, processed, and protected.
              </p>
            </section>

            {/* 21 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                21. Governing Law and Disputes
              </h2>

              <p>
                These Terms and any dispute relating to the PikFusion
                website or services will be governed by applicable law and
                by any governing-law or jurisdiction provisions specified
                in the relevant client contract, proposal, statement of
                work, or other written agreement.
              </p>

              <p className="mt-4">
                Where no separate written agreement applies, the appropriate
                governing law and jurisdiction will be determined according
                to applicable legal requirements.
              </p>
            </section>

            {/* 22 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                22. Changes to These Terms
              </h2>

              <p>
                PikFusion may update these Terms periodically to reflect
                changes in our website, technology, services, business
                operations, or applicable requirements.
              </p>

              <p className="mt-4">
                When material changes are made, the Effective Date displayed
                at the top of this page will be updated.
              </p>
            </section>

            {/* 23 */}
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                23. Contact PikFusion
              </h2>

              <p className="mb-4">
                If you have questions about these Terms of Service, a
                project agreement, or PikFusion's digital services, you
                may contact us at:
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

export default TermsOfService;