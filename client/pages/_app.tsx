// import { SessionProvider } from "next-auth/react"

// export default function App({
//   Component ,
//   pageProps: { session , ...pageProps },
// }) {
//   return (
//     // `session` comes from `getServerSideProps` or `getInitialProps`.
//     // Avoids flickering/session loading on first load.
//     <SessionProvider session={session} refetchInterval={5 * 60}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }

import { SessionProvider } from "next-auth/react";
import { ReactElement } from "react";

interface AppProps {
  Component: ReactElement;
  pageProps: {
    session: any; // Adjust the type according to your session data structure
    [key: string]: any; // You can adjust this based on your pageProps structure
  };
}

export default function App({ Component, pageProps }: AppProps) {
  const { session, ...restPageProps } = pageProps;

  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Component {...restPageProps} />
    </SessionProvider>
  );
}
