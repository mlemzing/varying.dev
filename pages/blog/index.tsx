import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
// @ts-ignore
export default function Blog({ allPostsData }) {
  return (
    <div>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section>
        <h2>Blog (WIP)</h2>
        <ul>
          {/** @ts-ignore */}
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
