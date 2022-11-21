import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>Welcome to Murderless News</h1>
      <p>
        We've filtered out some Bad News Bears for you already. If you would
        like to see any of these bad news categories, simply press the
        associated button!
      </p>
      <Link to="/news">Let's see some news!</Link>
    </div>
  );
}
