'use server';

/**
 * @fileOverview Generates personalized greetings for website visitors based on their inferred industry and role.
 *
 * - personalizedGreeting - A function that generates a personalized greeting.
 * - PersonalizedGreetingInput - The input type for the personalizedGreeting function.
 * - PersonalizedGreetingOutput - The return type for the personalizedGreeting function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedGreetingInputSchema = z.object({
  industry: z
    .string()
    .describe('The industry of the website visitor.'),
  role: z.string().describe('The role of the website visitor.'),
});
export type PersonalizedGreetingInput = z.infer<typeof PersonalizedGreetingInputSchema>;

const PersonalizedGreetingOutputSchema = z.object({
  greeting: z.string().describe('A personalized greeting for the website visitor.'),
});
export type PersonalizedGreetingOutput = z.infer<typeof PersonalizedGreetingOutputSchema>;

export async function personalizedGreeting(input: PersonalizedGreetingInput): Promise<PersonalizedGreetingOutput> {
  return personalizedGreetingFlow(input);
}

const personalizedGreetingPrompt = ai.definePrompt({
  name: 'personalizedGreetingPrompt',
  input: {schema: PersonalizedGreetingInputSchema},
  output: {schema: PersonalizedGreetingOutputSchema},
  prompt: `You are an AI assistant that specializes in creating personalized greetings for website visitors.

  Given the visitor's industry and role, generate a short and engaging greeting that highlights the value proposition of TechFusion Ventures.

  Industry: {{{industry}}}
  Role: {{{role}}}
  Greeting: `,
});

const personalizedGreetingFlow = ai.defineFlow(
  {
    name: 'personalizedGreetingFlow',
    inputSchema: PersonalizedGreetingInputSchema,
    outputSchema: PersonalizedGreetingOutputSchema,
  },
  async input => {
    const {output} = await personalizedGreetingPrompt(input);
    return output!;
  }
);
