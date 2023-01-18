import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Results from "@/components/Results";
import Head from "next/head";
import React from "react";

export default function index() {
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
      <Results />
      {/* Results - Close*/}
    </div>
  );
}
