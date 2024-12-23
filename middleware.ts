// Import necessary functions from Clerk for authentication middleware
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Create a route matcher to define protected routes
const isProtectedRoute = createRouteMatcher([
  '/bookings(.*)',
  '/checkout(.*)',
  '/favorites(.*)',
  '/profile(.*)',
  '/rentals(.*)',
  '/reviews(.*)',
]);

// Export the middleware that protects the defined routes
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

// Configuration for the middleware to match specific routes
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};