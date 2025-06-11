import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex flex-col-reverse sm:flex-row">
      {/*  Auth illustation */}
      <section className="sticky h-40 w-full sm:top-0 sm:h-screen sm:flex-1">
        <Image
          src="/images/pexels-2.jpg"
          alt="Auth-illustration"
          height={1000}
          width={1000}
          className="size-full object-cover"
        />
      </section>
      {/*    sign in form */}
      <section className="my-auto flex h-full min-h-screen flex-1 items-center px-5 py-10">
        <div className="mx-auto flex max-w-xl flex-col gap-6 rouned-lg p-10">
          <div>
            <h1>Monkey Loco</h1>
            <p>Dare Me!</p>
          </div>
          <div>{children}</div>
        </div>
      </section>
    </main>
  );
};
export default Layout;
