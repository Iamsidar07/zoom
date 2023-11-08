import { SignIn } from "@clerk/clerk-react";

const Signin = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
        Sign in with zoom
      </h1>
      <SignIn />{" "}
    </div>
  );
};

export default Signin;
