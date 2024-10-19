import type { MetaFunction } from "@remix-run/node";
import { Test } from "~/lib/components/test";

export const meta: MetaFunction = () => {
  return [
    { title: "My App" },
    { name: "description", content: "Welcome to my app!" },
  ];
};

export default function Index() {
  return (
    <main>
      <h1>Hello World.</h1>
      <Test foo="World"></Test>
    </main>
  );
}