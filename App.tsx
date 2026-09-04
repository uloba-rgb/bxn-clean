//import { Toaster } from "@/components/ui/sonner";
//import { TooltipProvider } from "@/components/ui/tooltip";
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
  return (
    <div className="relative isolate min-h-screen bg-black">

      {/* BXN GLOBAL BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source
          src={`${import.meta.env.BASE_URL}bxn-background.mp4`}
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/50 z-[1]" />

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
