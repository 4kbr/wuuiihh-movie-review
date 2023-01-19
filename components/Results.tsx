import Card from "./Card";

export default function Results({ results }: { results: Array<any> }) {
  return (
    <div>
      {results.map((result, i: number) => (
        <Card key={i} result={result} />
      ))}
    </div>
  );
}
