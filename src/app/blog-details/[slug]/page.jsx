import BlogDetails from "../../../components/pages/Blog/BlogDetails";

const page =  ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <BlogDetails slug={slug} />
    </div>
  );
};

export default page;
