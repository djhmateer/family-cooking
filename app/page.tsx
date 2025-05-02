export const dynamic = "force-dynamic";

import sampleData from "@/db/traversy-sample-data";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const HomePage = () => {
  // await delay(2000);
  console.log("log data is ", sampleData);

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

export default HomePage;
