import { Loader } from "lucide-react";
import React from "react";

const LoadingComponent = () => {
  return (
    <div className=" w-full h-[44vh] flex items-center justify-center">
      <Loader className=" animate-spin opacity-75" size={18} />
    </div>
  );
};

export default LoadingComponent;
