import React from "react";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";

const terms = () => {
  return (
    <div className="h-full bg-gray-900">
        <Header />
      <section className="text-gray-400 body-font bg-gray-900 py-16">
        <div className="container px-5 py-24 mx-auto border-solid border-white border-2 rounded-3xl">
          <div className="flex flex-col text-center w-full">
            <h2 className="text-4xl font-bold text-white tracking-widest title-font">
              Terms and Conditions
            </h2>
          </div>
          <ul
            role="list"
            className="marker:text-sky-400 list-decimal pl-5 text-slate-400 pt-8"
          >
            <li>
              Acceptance of Terms By using this educational website (the
              "Site"), a service of OROM Corp ("we", "us"), you agree to be
              bound by these Terms and Conditions ("Terms"), all applicable laws
              and regulations, and agree that you are responsible for compliance
              with any applicable local laws.
            </li>
            <li>
              Use License Permission is granted to temporarily download one copy
              of any downloadable materials on the Site for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license, you may
              not: modify or copy the materials; use the materials for any
              commercial purpose, or for any public display (commercial or
              non-commercial); attempt to decompile or reverse engineer any
              software contained on the Site; remove any copyright or other
              proprietary notations from the materials; or transfer the
              materials to another person or "mirror" the materials on any other
              server.
            </li>
            <li>
              Accounts When you create an account with us, you guarantee that
              the information you provide us is accurate, complete, and current.
              Inaccurate, incomplete, or obsolete information may result in the
              immediate termination of your account on the Site.
            </li>
            <li>
              Content All content provided on the Site is for educational and
              informational purposes only. We make no representations or
              warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, suitability, or availability
              with respect to the Site or the information, products, services,
              or related graphics contained on the Site for any purpose.
            </li>
            <li>
              Intellectual Property Rights The Site and its original content,
              features, and functionality are and will remain the exclusive
              property of OROM Corp and its licensors. The Site is protected by
              copyright, trademark, and other laws of both the United States and
              foreign countries. Our trademarks and trade dress may not be used
              in connection with any product or service without the prior
              written consent of OROM Corp.
            </li>
            <li>
              Privacy Policy We respect your privacy and are committed to
              protecting it. Our Privacy Policy, which explains how we collect,
              use, and protect the personal information you provide to us, is
              incorporated into these Terms. By using the Site, you agree to the
              collection and use of information in accordance with our Privacy
              Policy.
            </li>
            <li>
              Termination We may terminate or suspend your access to the Site
              immediately, without prior notice or liability, under our sole
              discretion, for any reason whatsoever and without limitation,
              including but not limited to a breach of the Terms.
            </li>
            <li>
              Governing Law These Terms shall be governed and construed in
              accordance with the laws of our country, without regard to its
              conflict of law provisions.
            </li>
            <li>
              Changes We reserve the right, at our sole discretion, to modify or
              replace these Terms at any time.
            </li>
            <li>
              Contact Us If you have any questions about these Terms, please
              contact us.
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default terms;
