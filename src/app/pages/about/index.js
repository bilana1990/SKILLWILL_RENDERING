// pages/about/index.js
export async function getStaticProps() {
    const res = await fetch('https://api.example.com/about');
    const data = await res.json();
  
    return {
      props: { data },
    };
  }
  
  export default function About({ data }) {
    return (
      <div>
        <h1>About Us</h1>
        <p>{data.description}</p>
      </div>
    );
  }