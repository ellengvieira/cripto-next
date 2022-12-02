import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";
import Menu from '../pages/Menu'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.min.js');
    require('@popperjs/core/dist/cjs/popper.js');
  }, []);
  return <>
    <Menu />
    <Component {...pageProps} />
  </>
}

export default MyApp