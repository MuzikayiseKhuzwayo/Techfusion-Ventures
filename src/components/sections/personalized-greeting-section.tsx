"use client";

import { useState, type FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { personalizedGreeting, type PersonalizedGreetingInput, type PersonalizedGreetingOutput } from '@/ai/flows/personalized-greeting';
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles } from 'lucide-react';

export default function PersonalizedGreetingSection() {
  const [industry, setIndustry] = useState('');
  const [role, setRole] = useState('');
  const [greeting, setGreeting] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setGreeting(null);

    if (!industry || !role) {
      setError("Please provide both industry and role.");
      setIsLoading(false);
      toast({
        title: "Missing Information",
        description: "Please provide both industry and role.",
        variant: "destructive",
      });
      return;
    }

    try {
      const input: PersonalizedGreetingInput = { industry, role };
      const result: PersonalizedGreetingOutput = await personalizedGreeting(input);
      setGreeting(result.greeting);
      toast({
        title: "Greeting Generated!",
        description: "Your personalized greeting is ready.",
      });
    } catch (err) {
      console.error("Error generating greeting:", err);
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
      setError(`Failed to generate greeting: ${errorMessage}`);
      toast({
        title: "Error",
        description: `Failed to generate greeting: ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="greeting" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <Sparkles className="h-12 w-12 text-accent" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Get a Personalized Greeting
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Tell us a bit about yourself, and our AI will craft a special welcome message for you, highlighting how TechFusion Ventures can help.
          </p>
        </div>
        <div className="mx-auto max-w-md mt-12">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Your Details</CardTitle>
              <CardDescription>Enter your industry and role to receive a custom greeting.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="industry">Your Industry</Label>
                  <Input
                    id="industry"
                    type="text"
                    placeholder="e.g., Healthcare, Finance, Education"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    disabled={isLoading}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Your Role</Label>
                  <Input
                    id="role"
                    type="text"
                    placeholder="e.g., CEO, Marketing Manager, Developer"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    disabled={isLoading}
                    required
                    aria-required="true"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-stretch">
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Get My Greeting"
                  )}
                </Button>
                {error && <p className="mt-4 text-sm text-destructive text-center">{error}</p>}
              </CardFooter>
            </form>
          </Card>

          {greeting && (
            <Card className="mt-8 shadow-lg bg-gradient-to-r from-primary to-accent text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Your Personalized Greeting:</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-center italic">&quot;{greeting}&quot;</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
