import { PropsWithChildren } from "react";

export default function Section({ children }: PropsWithChildren) {
  return <section className="w-full px-20 my-10">{children}</section>;
}
