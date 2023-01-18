import { JSXElementConstructor, SVGProps } from "react";

export default function HeaderIcon({
  Icon,
  title,
}: {
  Icon: JSXElementConstructor<JSX.Element>;
  title: string;
}) {
  return (
    <div className="mx-4 flex flex-col cursor-pointer hover:text-white lg:mx-6">
      <Icon className="h-8" />
      <p className="my-2 select-none">{title}</p>
    </div>
  );
}
