import React from "react";

export default function Results({ results }: { results: Array<any> }) {
  return (
    <div>
      {results.map((result, i: number) => (
        <h1 key={i}>{result.title}</h1>
      ))}
    </div>
  );
}
