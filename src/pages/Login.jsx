import Header from "../components/Header";
import GoogleLoginButton from "../components/GoogleButton";
import { isLoggedIn } from "../firebase.config";
import { createEffect } from "solid-js";

function Login() {
  createEffect(() => {
    if (isLoggedIn()) {
      location = "/";
    }
  });
  return (
    <>
      <Header />
      <div
        className="
        flex flex-col items-center justify-center
        h-screen pb-7"
      >
        {!isLoggedIn() && (
          <div
            className="
            rounded
            flex flex-col items-center
            p-5 w-10/12 max-w-5xl h-[450px]
            bg-black/90"
          >
            <h1
              className="
              font-bold text-center
              text-white text-5xl"
            >
              Login
            </h1>
            <h2
              className="
              mt-4
              font-medium
              text-center text-white text-xl"
            >
              Login to access the website
            </h2>
            <div className="w-1/2 flex h-full flex-col justify-center items-center">
              <GoogleLoginButton />
              <div
                className="
                relative
                flex items-center justify-center
                my-2 w-10/12"
              >
                <div
                  className="
                  absolute left-2
                  bg-white rounded
                  h-0.5 w-1/3"
                ></div>
                <p className="text-white font-bold">Or</p>
                <div
                  className="
                  absolute right-2
                  bg-white rounded
                  h-0.5 w-1/3"
                ></div>
              </div>
              <button
                className="
                h-10 w-10/12
                font-medium
                py-1 px-2 rounded
                text-white
                bg-zinc-800"
              >
                Login as a guest
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
