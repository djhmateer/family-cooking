export const dynamic = "force-dynamic";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const HomePage = async () => {
  await delay(2000);
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

export default HomePage;
