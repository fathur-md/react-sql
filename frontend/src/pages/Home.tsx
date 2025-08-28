import { MhsList } from "../components/MhsList";

export const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col">
      <section className="min-h-[200px] bg-gradient-to-b from-transparent to-gray-100 p-4">
        <div>
          <h1 className="text-xl font-bold">Home page</h1>
        </div>
      </section>
      <section className="flex-1 bg-white p-4">
        {/* <MhsList /> */}
      </section>
    </div>
  );
};
