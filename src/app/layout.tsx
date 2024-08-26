import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { cn } from "~/lib/utils";

import { ThemeProvider } from "~/components/theme-provider";
import { QueryClientProvider } from "~/components/query-client-provider";
import { AuthSessionProvider } from "~/components/auth-session-provider";

export const metadata: Metadata = {
  title: "UNDERSCORE",
  description: "Manage your valorant premier team from a centralized plateform",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-screen font-sans antialiased",
        GeistSans.variable,
      )}
      suppressHydrationWarning
    >
      <body className="h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <QueryClientProvider>
            <AuthSessionProvider>{children}</AuthSessionProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
