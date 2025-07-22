import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import Contact from "@/pages/contact";
import Navigation from "@/components/navigation";

function Router() {
  return (
    <>
    <Navigation />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/contact" component={Contact} />
      <Route path="*">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
            <a href="/" className="text-primary hover:underline">Back to Home</a>
          </div>
        </div>
      </Route>
    </Switch>
    </>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="flokiz-ui-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
