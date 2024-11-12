// pages/blog/[id].js
export async function getStaticPaths() {
    const res = await fetch('https://api.example.com/posts');
    const posts = await res.json();
  
    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }));
  
    return { paths, fallback: 'blocking' };
  }
  
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://api.example.com/posts/${params.id}`);
    const post = await res.json();
  
    return {
      props: { post },
      revalidate: 10, // Regenerate page after 10 seconds
    };
  }
  
  export default function Post({ post }) {
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }