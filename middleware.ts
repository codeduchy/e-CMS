import { authMiddleware } from "@clerk/nextjs";

export const middleware = authMiddleware();

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
