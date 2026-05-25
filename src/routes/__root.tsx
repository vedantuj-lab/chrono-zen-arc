import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { AppSidebar, MobileNav, UpgradeBadge } from "@/components/AppSidebar";
import { AICoachFAB } from "@/components/AICoachFAB";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center glass rounded-4xl p-10">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">This page drifted into the ether.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition"
        >
          Return to dashboard
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center glass rounded-4xl p-10">
        <h1 className="text-xl font-semibold">Something glitched</h1>
        <p className="mt-2 text-sm text-muted-foreground">Take a breath and try again.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-2xl border border-border px-5 py-3 text-sm font-semibold">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aether — Digital Wellness & Focus" },
      {
        name: "description",
        content:
          "Aether is a futuristic digital wellness app for focus sessions, screen-time control, gamified habits, and AI-powered coaching.",
      },
      { property: "og:title", content: "Aether — Digital Wellness & Focus" },
      {
        property: "og:description",
        content: "Reduce screen time, build streaks, grow your focus garden.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen relative">
        {/* Aurora background blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-15%] left-[-10%] w-[45%] h-[45%] rounded-full bg-electric/15 blur-[140px]" />
          <div className="absolute bottom-[-15%] right-[-10%] w-[55%] h-[55%] rounded-full bg-luxe/15 blur-[160px]" />
          <div className="absolute top-1/3 right-1/4 w-[25%] h-[25%] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <AppSidebar />
        <UpgradeBadge />
        <main className="md:pl-28 px-4 md:px-10 pb-28 md:pb-12 pt-6 md:pt-10 max-w-[1440px] mx-auto">
          <Outlet />
        </main>
        <MobileNav />
        <AICoachFAB />
      </div>
    </QueryClientProvider>
  );
}
