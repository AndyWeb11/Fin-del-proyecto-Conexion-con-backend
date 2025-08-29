import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { AuthProvider } from '@/contexts/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Configurar OpenPay globalmente cuando el componente se monte
    if (typeof window !== 'undefined' && window.OpenPay) {
      window.OpenPay.setId('tu_merchant_id'); // Reemplaza con tu Merchant ID
      window.OpenPay.setApiKey('tu_public_key'); // Reemplaza con tu llave pública
      window.OpenPay.setSandboxMode(true); // false para producción
    }
  }, []);

  return(
  <AuthProvider>
  <Component {...pageProps} />
  </AuthProvider>
  );
}
