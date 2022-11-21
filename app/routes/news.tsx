import { Outlet } from "@remix-run/react";

const News = () => {
  return (
    <div className="mx-6">
      Here's some news!
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default News;
