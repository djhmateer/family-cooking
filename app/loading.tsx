import loader from "@/assets/loader.gif";
import Image from "next/image";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image
        src={loader}
        width={100}
        height={100}
        alt="Loading...."
        unoptimized
      />
    </div>
  );
};

export default Loading;
