"use client";
import React from "react";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { cn } from "@/utils/cn";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-5xl md:p-8 dark:bg-black">
    <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
      Contact Us
    </h2>
    <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
      Have a question, suggestion, or just want to say hello? Fill out the form below and we’ll get back to you soon.
    </p>
  
    <form className="my-8" onSubmit={handleSubmit}>
      <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <LabelInputContainer>
          <Label htmlFor="firstname">First name</Label>
          <Input id="firstname" placeholder="John" type="text" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="lastname">Last name</Label>
          <Input id="lastname" placeholder="Doe" type="text" />
        </LabelInputContainer>
      </div>
  
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="you@example.com" type="email" />
      </LabelInputContainer>
  
      <LabelInputContainer className="mb-4">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" placeholder="I have a question about..." type="text" />
      </LabelInputContainer>
  
      <LabelInputContainer className="mb-8">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          placeholder="Write your message here..."
          rows={4}
          className="w-full rounded-md border border-neutral-300 bg-white p-2 text-sm text-black dark:border-neutral-700 dark:bg-zinc-800 dark:text-white"
        />
      </LabelInputContainer>
  
      <button
        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
        type="submit"
      >
        Send Message &rarr;
        <BottomGradient />
      </button>
    </form>
  </div>
  
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
