// app/blogs/page.tsx

import { gql, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";

import SecondNavBar from "@/components/SecondNavBar";

export const dynamic = "force-dynamic";

const GET_BLOGS_QUERY = gql`
  query LatestBlogs {
    blogPostCollection(limit: 10, order: sys_publishedAt_DESC) {
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

export default async function BlogMainPage() {
  const { data: blogData } = await client.query({ query: GET_BLOGS_QUERY });

  return (
    <div className="bg-black text-white min-h-screen">
      <SecondNavBar />

      <section className="py-20 px-4 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
          Explore All <span className="text-green-500">Blogs</span>
        </h1>
        <p className="text-gray-400 mb-10 text-center text-sm sm:text-base max-w-md">
          Curated insights to help you grow smarter, weekly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {blogData?.blogPostCollection?.items.map((blog) => (
            <div
              key={blog.slug}
              className="bg-[#111827] border border-[#1f2937] p-5 rounded-2xl shadow hover:shadow-xl transition-all duration-300"
            >
              <a href={`/blogs/${blog.slug}`}>
                {blog.thumbnailImage?.url && (
                  <img
                    src={blog.thumbnailImage.url}
                    alt={blog.thumbnailImage.title}
                    className="rounded-xl h-48 w-full object-cover mb-4"
                  />
                )}
                <h2 className="text-xl font-semibold mb-2">
                  {blog.blogTitle}
                </h2>
                <p className="text-sm text-gray-400 line-clamp-3">
                  {blog.metaDescription}
                </p>
              </a>

              {blog.body?.json && (
                <div className="text-gray-300 text-sm mt-2 line-clamp-3">
                  {documentToReactComponents(blog.body.json, richTextOptions)}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Footer only */}
     <footer className="text-center text-xs mt-12 text-gray-400 pb-12 px-4">
  <p className="mb-2">© 2025 Amanat. All rights reserved.</p>
  <div className="flex flex-wrap justify-center gap-2 text-emerald-300 text-xs sm:text-sm">
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=support@amanat.app"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:underline transition"
>
  support@amanat.app
</a>

    <span>•</span>
    <a
      href="/TermsPage"
      className="hover:underline transition"
    >
      Privacy Policy
    </a>
    <span>•</span>
    <a
      href="https://lancers.dev/team"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline transition"
    >
      Team
    </a>
  </div>
</footer>

    </div>
  );
}
