/// <reference path="../node_modules/@geovistory/design-system-web/dist/types/react.d.ts" />
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { defineCustomElements } from '@geovistory/design-system-web/loader';

// Here we define the web components (custom elements)
defineCustomElements();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
