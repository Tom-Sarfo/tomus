import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div>
        <h1>Oops!</h1>
        <p>
          Sorry, we are working on this page. click this link to proceed to the
          store{" "}
          <span>
            <a href="https://tomuswear.company.site/products/">store</a>
          </span>
        </p>
        <p>
          <i>We will be back soon</i>
        </p>
      </div>
    </div>
  );
}
