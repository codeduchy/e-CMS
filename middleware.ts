import { authMiddleware } from "@clerk/nextjs";

export const middleware = authMiddleware({
  // publicRoutes: ["/api"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
