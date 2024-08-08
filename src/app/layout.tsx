import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { cn } from "~/lib/utils";

import { ThemeProvider } from "~/components/theme-provider";
import { QueryClientProvider } from "~/components/query-client-provider";

export const metadata: Metadata = {
  title: "UNDERSCORE",
  description: "Manage your valorant premier team from a centralized plateform",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-background min-h-screen font-sans antialiased",
        GeistSans.variable,
      )}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <QueryClientProvider>{children}</QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
