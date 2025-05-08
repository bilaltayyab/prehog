import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PartyPopper } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Card className="w-full max-w-lg shadow-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <PartyPopper size={64} className="text-primary" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-extrabold">
            Find Your Inner PostHog!
          </CardTitle>
          <CardDescription className="text-lg md:text-xl text-muted-foreground mt-2">
            Are you a Data Gremlin or a Product Pirate? Uncover your true developer persona with this highly scientific* quiz.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6 p-8">
          <p className="text-center text-foreground/80">
            Get ready for 7 existential questions about your coding life, feature flag habits, and how you *really* feel about that Jira ticket.
          </p>
          <Link href="/quiz" legacyBehavior>
            <Button size="lg" className="w-full md:w-auto text-lg font-semibold px-8 py-6 shadow-lg hover:shadow-primary/40 transition-shadow duration-300">
              Start the Quiz!
            </Button>
          </Link>
          <p className="text-xs text-muted-foreground text-center mt-4">
            *Not actually scientific. But definitely fun.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
