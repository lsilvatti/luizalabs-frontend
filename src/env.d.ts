declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_MARVEL_BASE_URL: string;
    readonly REACT_APP_MARVEL_PUBLIC_API_KEY: string;
    readonly REACT_APP_MARVEL_PRIVATE_API_KEY: string;
  }
}
