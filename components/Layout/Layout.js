import Navigation from "../Navigation/Navigation";

export default function Layout({ children }) {
  return (
    <>
      <body>
        <main>{children}</main>
        <footer>
          <Navigation />
        </footer>
      </body>
    </>
  );
}
