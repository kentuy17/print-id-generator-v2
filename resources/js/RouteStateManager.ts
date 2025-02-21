import { useEffect } from "react";

export function RouterStateManager() {
  useEffect(() => {
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    // Keep track of the last Inertia state and last URL
    let lastInertiaState: any = null;
    let lastUrl: string | null = null;
    let isHandlingPopState = false;

    window.history.pushState = function (...args) {
      const [state, title, url] = args;

      // Prevent duplicate pushState calls to the same URL
      if (url === lastUrl) {
        console.log("Preventing duplicate pushState to:", url);
        return;
      }

      // If this is a React Router state update
      if (state && "usr" in state) {
        // Only allow React Router pushState if we're not handling a popstate
        if (!isHandlingPopState) {
          const inertiaState = lastInertiaState || window.history.state;
          const mergedState = {
            ...inertiaState,
            routerState: state,
          };
          lastUrl = url as string;
          return originalPushState.call(this, mergedState, title, url);
        }
        return;
      }

      // If this is an Inertia state update
      if (state && "component" in state) {
        lastInertiaState = state;
        lastUrl = url as string;
      }

      return originalPushState.apply(this, args);
    };

    window.history.replaceState = function (...args) {
      const [state, title, url] = args;

      // If this is a React Router state update
      if (state && "usr" in state) {
        // Only allow React Router replaceState if we're not handling a popstate
        if (!isHandlingPopState) {
          const inertiaState = lastInertiaState || window.history.state;
          const mergedState = {
            ...inertiaState,
            routerState: state,
          };
          lastUrl = url as string;
          return originalReplaceState.call(this, mergedState, title, url);
        }
        return;
      }

      // If this is an Inertia state update
      if (state && "component" in state) {
        lastInertiaState = state;
        lastUrl = url as string;
      }

      return originalReplaceState.apply(this, args);
    };

    // Handle popstate events to restore Inertia state
    const handlePopState = (event: PopStateEvent) => {
      isHandlingPopState = true;
      if (event.state && event.state.component) {
        lastInertiaState = event.state;
        lastUrl = window.location.pathname;
      }
      // Reset the flag after a short delay to allow for any React Router updates
      setTimeout(() => {
        isHandlingPopState = false;
      }, 0);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return null;
}
