import { QueryClientProvider } from "react-query";
import "@styles/globals.css";
import { Hydrate } from "react-query/hydration";
import { useQueryClientAndsettings } from "@config/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import PropTypes from "prop-types";

function MyApp({ Component, pageProps }) {
  const { queryClient } = useQueryClientAndsettings();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default MyApp;
