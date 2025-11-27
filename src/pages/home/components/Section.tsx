import { PropsWithChildren } from "react";

export default function Section({ title, children }: PropsTypes) {
  return (
    <section className="w-full px-4 md:px-20 my-10">
      {title && <h1 className="font-bold text-2xl mb-5">{title}</h1>}
      {children}
    </section>
  );
}

type PropsTypes = PropsWithChildren & {
  title?: string;
};
