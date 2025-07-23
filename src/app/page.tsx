import { gql, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import MainNavigation from "@/components/MainNavigation";
import Hero from "@/components/Hero";
import MobileShowcase from "@/components/MobileShowCase";
import Features from "@/components/Features";
import CoreHighlights from "@/components/CoreHighlights";
import Testimonials from "@/components/Testimonial";
import DownloadSection from "@/components/DownloadSection";

export const dynamic = "force-dynamic";

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

const GET_BLOGS_QUERY = gql`
  query LatestBlogs {
    blogPostCollection(limit: 3, order: sys_publishedAt_DESC) {
      items {
        blogTitle
        slug
        metaTitle
        metaDescription
        body {
          json
        }
        thumbnailImage {
          url
          title
        }
      }
    }
  }
`;

const richTextOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        className="text-blue-400 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFULL_SPACE_ID}/environments/master`,
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFULL_API_KEY}`,
    },
    fetch,
  }),
  cache: new InMemoryCache(),
});

export default async function Home() {
  const { data: faqData } = await client.query({ query: GET_LATEST_FAQ_QUERY });
  const { data: blogData } = await client.query({ query: GET_BLOGS_QUERY });

  return (
    <div className="bg-black text-white">
      <MainNavigation />
      <Hero />
      <MobileShowcase />
      <Features />
      <CoreHighlights />
      <Testimonials />

     <section id="faq" className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto text-center mb-12">
    <h2 className="text-3xl sm:text-4xl font-bold mb-2">
      FAQ <span className="text-green-400">?</span>
    </h2>
    <p className="text-gray-400 text-sm sm:text-base">
      Everything you need to know about <span className="text-green-300 font-semibold">Amanat</span>.
    </p>
    <div className="w-20 h-1 bg-green-500 mt-4 mx-auto rounded-full" />
  </div>

  <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
    {faqData?.faqCollection?.items.map((faq, index) => (
      <article
        key={faq.title}
        className="bg-[#111827] border border-[#1f2937] rounded-2xl p-6 hover:shadow-lg hover:shadow-green-500/20 transition-all"
      >
        <h3 className="flex items-start text-base sm:text-lg font-semibold text-green-300 mb-2">
          <span className="mr-2 text-xl">
            {["🛡️", "🔐", "🕵️‍♀️", "❓"][index % 4]}
          </span>
          {faq.title}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {faq.body}
        </p>
      </article>
    ))}
  </div>
</section>

<section id="blogs" className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto text-center mb-12">
    <h2 className="text-3xl sm:text-4xl font-bold mb-2">
      Latest <span className="text-green-400">Blogs</span>
    </h2>
    <p className="text-gray-400 text-sm sm:text-base">
      Weekly insights, success stories & helpful tips for lost & found heroes.
    </p>
    <div className="w-20 h-1 bg-green-500 mt-4 mx-auto rounded-full" />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {blogData?.blogPostCollection?.items.map((blog) => (
      <article
        key={blog.slug}
        className="bg-[#111827] border border-[#1f2937] rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-green-400/30 transition-all"
      >
        <a href={`/blogs/${blog.slug}`} className="block p-5">
          {blog.thumbnailImage?.url && (
            <img
              src={blog.thumbnailImage.url}
              alt={blog.thumbnailImage.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
              loading="lazy"
            />
          )}
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
            {blog.blogTitle}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base line-clamp-3 mb-2">
            {blog.metaDescription}
          </p>
        </a>

        {blog.body?.json && (
          <div className="px-5 pb-4 text-gray-300 text-sm line-clamp-3">
            {documentToReactComponents(blog.body.json, richTextOptions)}
          </div>
        )}
      </article>
    ))}
  </div>
</section>
      <DownloadSection />
    </div>
  );
}
