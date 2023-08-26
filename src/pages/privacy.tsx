import React from "react";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";

const privacy = () => {
  return (
    <div>
      <div className="h-full bg-gray-900">
        <Header />
        <section className="text-gray-400 body-font bg-gray-900 py-20">
          <div className="container px-5 py-24 mx-auto border-solid border-white border-2 rounded-3xl">
            <div className="flex flex-col text-center w-full">
              <h2 className="text-4xl font-bold text-white tracking-widest title-font">
                Privacy Policy
              </h2>
            </div>
            <ul
              role="list"
              className="marker:text-sky-400 list-decimal pl-5 text-slate-400 pt-8"
            >
              <li>
                Introduction We at OROM Corp, the provider of OROM, are
                committed to protecting and respecting your privacy. This
                Privacy Policy describes the types of personal data we collect
                from and about you when you visit our website, or when you use
                our services.
              </li>
              <li>
                The Data We Collect We may collect and process the following
                data: - Personal information such as names, addresses, email
                addresses, telephone numbers, etc. when voluntarily provided by
                you. - If you are a student, your academic and institutional
                details. - Technical data including your internet protocol (IP)
                address, login data, etc.
              </li>
              <li>
                How We Use Your Data We use your personal data to: - Provide and
                improve our services. - Personalize and enhance your online
                experience. - Process your registration and manage your account.
                - Communicate with you.
              </li>
              <li>
                Sharing of Your Information We will not share your personal data
                with any third parties for marketing purposes without your
                express consent.
              </li>
              <li>
                Security We have implemented reasonable physical, technical, and
                administrative security standards to protect personal data from
                loss, misuse, alteration, or destruction.
              </li>
              <li>
                Children's Privacy Our services are not designed for, and do not
                target, children under the age of 13. We do not knowingly
                collect personal information from children under the age of 13.
              </li>
              <li>
                Changes to This Privacy Policy We may update this Privacy Policy
                from time to time. We encourage you to periodically review this
                page.
              </li>
              <li>
                Contact Us If you have any questions, comments, or concerns
                about our privacy practices, please contact us at
                hariomshandilya@oromcorp.com
              </li>
            </ul>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default privacy;
