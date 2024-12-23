import { ExampleComponent } from "@/app/components/ExampleComponent";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl">Car Game Thing</h1>
      <ExampleComponent className="text-red-800" />
    </div>
  );
}
