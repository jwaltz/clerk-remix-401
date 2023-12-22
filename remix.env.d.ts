/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

declare module "@remix-run/server-runtime" {
  export interface AppLoadContext {
    env: {
      CLERK_PUBLISHABLE_KEY: string;
      CLERK_SECRET_KEY: string;
    };
  }
}