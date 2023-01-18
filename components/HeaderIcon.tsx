import { JSXElementConstructor, SVGProps } from "react";

export default function HeaderIcon({
  Icon,
  title,
}: {
  Icon: JSXElementConstructor<JSX.Element>;
  title: string;
}) {
  return (
    <div>
      <Icon className="h-8" />
      <p>{title}</p>
    </div>
  );
}
