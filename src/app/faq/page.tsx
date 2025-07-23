"use client";

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";
import MainNavigationProps from "@/components/MainNavigation";

const GET_LATEST_FAQ_QUERY = gql`
  query LatestFAQs {
    faqCollection(limit: 10) {
      items {
        title
        body
      }
    }
  }
`;

type  FAQPageProps = {
  children: React.ReactNode,
};

const FAQPage= (props: FAQPageProps) => {
const { data } = useSuspenseQuery(GET_LATEST_FAQ_QUERY);
  const { children } = props;

  return (
    <div>
      {data?.faqCollection?.items.map((faq) => (
        <div key={faq.title} className="text-center max-w-xl">
          <h2 className="text-lg font-semibold">{faq.title}</h2>
          <p className="text-gray-700">{faq.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQPage;