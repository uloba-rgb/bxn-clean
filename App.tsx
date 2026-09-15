import { useEffect, useRef } from "react";
import NotFound from "./NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeProvider } from "./ThemeContext";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Privacy from "./Privacy";
import Terms from "./Terms";
import SignIn from "./SignIn";
import ResetPassword from "./ResetPassword";


/**
 * BXN design reminder: one connected, dark operating system with neon-lime signals.
 * The graph belongs to the global shell, not an individual page.
 */

function Router() {
  const mobileBackgroundRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = mobileBackgroundRef.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch (error) {
        console.log("Mobile background autoplay waiting for interaction.");
      }
    };

    // Try immediately
    playVideo();

    // Try when enough video data is available
    video.addEventListener("loadedmetadata", playVideo);
    video.addEventListener("loadeddata", playVideo);
    video.addEventListener("canplay", playVideo);

    // Retry when user returns to the page
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        playVideo();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    // Mobile browser fallback:
    // first interaction gives the browser permission to start playback
    const handleFirstInteraction = () => {
      playVideo();

      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("click", handleFirstInteraction);
    };

    document.addEventListener("touchstart", handleFirstInteraction, {
      passive: true,
    });

    document.addEventListener("click", handleFirstInteraction);

    return () => {
      video.removeEventListener("loadedmetadata", playVideo);
      video.removeEventListener("loadeddata", playVideo);
      video.removeEventListener("canplay", playVideo);

      document.removeEventListener("visibilitychange", handleVisibility);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("click", handleFirstInteraction);
    };
  }, []);

  return (
    <div className="relative isolate min-h-screen bg-black">

      {/* MOBILE BACKGROUND VIDEO */}
      <video
        ref={mobileBackgroundRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controls={false}
        aria-hidden="true"
        className="
          fixed
          inset-0
          z-0
          block
          h-[100svh]
          w-screen
          object-cover
          pointer-events-none
          md:hidden
        "
      >
        <source
          src={`${import.meta.env.BASE_URL}bxn-background-mobile.mp4`}
          type="video/mp4"
        />
      </video>


      {/* DESKTOP BACKGROUND VIDEO — ORIGINAL */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="
          fixed
          inset-0
          z-0
          hidden
          h-full
          w-full
          object-cover
          pointer-events-none
          md:block
        "
      >
        <source
          src={`${import.meta.env.BASE_URL}bxn-background.mp4`}
          type="video/mp4"
        />
      </video>


      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/50 z-[1] pointer-events-none" />


      {/* WEBSITE CONTENT */}
      <div className="relative z-10">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/signin" component={SignIn} />
          <Route path="/reset-password" component={ResetPassword} />

          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </div>

    </div>
  );
}


function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <WouterRouter>
          <Router />
        </WouterRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
