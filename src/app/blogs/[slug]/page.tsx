
import { gql, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { notFound } from "next/navigation";
import SecondNavBar from "@/components/SecondNavBar";

// Apollo Client setup
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

// GraphQL query
const GET_BLOG_BY_SLUG = gql`
  query BlogBySlug($slug: String!) {
    blogPostCollection(where: { slug: $slug }, limit: 1) {
      items {
        blogTitle
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

// Rich text styling
const richTextOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        className="text-teal-400 underline hover:text-teal-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-gray-300 text-base leading-relaxed mb-4">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-lg font-bold text-white mt-6 mb-2">{children}</h2>
    ),
  },
};

// Page Component
export default async function BlogDetail({ params }) {
  const slug = params.slug;

  const { data } = await client.query({
    query: GET_BLOG_BY_SLUG,
    variables: { slug },
  });

  const blog = data?.blogPostCollection?.items?.[0];

  if (!blog) return notFound();

  return (
    <>
    <div className="bg-black text-white min-h-screen">
      <SecondNavBar />

      {/* Blog Page Content */}
      <div className="bg-black min-h-screen py-20 px-4 flex justify-center items-start">
        <div className="bg-[#0f172a] rounded-2xl shadow-xl border border-teal-900 max-w-2xl w-full p-6 sm:p-10 text-white relative">
          
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-teal-300">
            {blog.blogTitle}
          </h1>

          {blog.thumbnailImage?.url && (
            <img
              src={blog.thumbnailImage.url}
              alt={blog.thumbnailImage.title}
              className="rounded-lg w-full h-auto object-cover mb-6"
            />
          )}

          {blog.body?.json && (
            <div className="prose prose-invert max-w-none">
              {documentToReactComponents(blog.body.json, richTextOptions)}
            </div>
          )}

          <div className="text-center mt-10">
            <a
              href="/blogsection"
              className="text-sm text-teal-400 hover:underline transition duration-200"
            >
              ← Back to Blog
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
