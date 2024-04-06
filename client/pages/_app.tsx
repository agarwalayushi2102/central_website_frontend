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
import { createStore, applyMiddleware, compose } from 'redux'; // Import applyMiddleware from 'redux'
import thunk from 'redux-thunk'; // Import thunk middleware
import reducers from "../components/redux/reducers";

// Combine reducers
const rootReducer = combineReducers(reducers);

// Setup Redux DevTools extension for development environment
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Apply middleware
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default function App({ Component, pageProps }: AppProps) {
  const { session, ...restPageProps } = pageProps;

  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Provider store={store}>
        <Component {...restPageProps} />
      </Provider>
    </SessionProvider>
  );
}
