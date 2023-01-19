import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Results from "@/components/Results";
import { ConstartVar } from "@/utils/constant_var";
import requests from "@/utils/requests";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function index({ results }: { results: Array<any> }) {
  // console.log({ results });

  return (
    <div>
      <Head>
        <title>Wuiih - Movie Review</title>
        <meta
          name="description"
          content="Wuiih adalah platform untuk melihat review moview"
        />
      </Head>
      {/* Header */}
      <Header />
      {/* Header - Close */}

      {/* Navbar */}
      <Navbar />
      {/* Navbar - Close*/}

      {/* Results */}
      <Results results={results} />
      {/* Results - Close*/}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre || "fetchTrending";
  // const genrss = requests[genre as keyof typeof requests];
  const request = await fetch(
    `${ConstartVar.api}/3${requests[genre as keyof typeof requests].url}`
    // `${ConstartVar.api}/3${requests[genre as keyof typeof requests].url}`
  ).then((response) => response.json());

  return {
    props: {
      results: request.results,
    },
  };
};
