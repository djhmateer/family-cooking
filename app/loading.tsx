import loader from "@/assets/loader.gif";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="p-6  w-1/3 text-center">
        <h1 className="text-2xl mb-4">Loading....</h1>
      </div>
    </div>
  );
};

// const Loading = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         width: "100vw",
//       }}
//     >
//         Loading...
//       {/* <Image
//         src={loader}
//         width={100}
//         height={100}
//         alt="Loading...."
//         unoptimized
//       /> */}
//     </div>
//   );
// };

export default Loading;
