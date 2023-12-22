import { RedirectToSignIn, SignedIn, SignedOut, UserButton } from "@clerk/remix";
import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
return (
    <div>
      <SignedIn>
        <h1>Index route</h1>
        <p>You are signed in!</p>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
