//import { Toaster } from "@/components/ui/sonner";
//import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "./NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./ErrorBoundary";
import LiveGraph from "./LiveGraph";
import { ThemeProvider } from "./ThemeContext";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

/**
 * BXN design reminder: one connected, dark operating system with neon-lime signals.
 * The graph belongs to the global shell, not an individual page.
 */
function Router() {
  return (
    <div className="relative isolate min-h-screen">
      <LiveGraph />
      <div className="relative z-10">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/os" component={About} />
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
        <WouterRouter base="/bxn-clean">
          <Router />
        </WouterRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
