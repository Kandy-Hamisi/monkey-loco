"use client";

import React from "react";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { ZodType } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import { FIELD_NAMES, FIELD_TYPES } from "../../constants";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  // onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "SIGN_IN" | "SIGN_UP";
}

const AuthFormer = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  // onSubmit,
}: Props<T>) => {
  const router = useRouter();
  const isSignIn = type === "SIGN_IN";

  //   Define your form
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema as any),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  //   Define a submit handler
  const handleSubmit: SubmitHandler<T> = async (data) => {
    //     Do something with the form values
    // const result = await onSubmit(data);

    // if (result.success) {
    //   toast.success("User Successfully Sign in");
    //   router.push("/");
    // } else {
    //   toast.error("User failed to login");
    // }

    console.log(data);
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-black">
        {isSignIn ? "Welcome back to Silenzio" : "Create your Silenzio Account"}
      </h1>
      <p className="text-black">
        {isSignIn
          ? "Join other creators in embracing the Silence"
          : "Please complete all the fields to register"}
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-6 w-full"
        >
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl>
                    <Input
                      required
                      placeholder={field.name}
                      type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit" className="form-btn">
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </Form>

      <p className="text-center text-base font-medium">
        {isSignIn ? "New to Silenzio? " : "Already Have an Account? "}
        <Link
          href={isSignIn ? "sign-up" : "sign-in"}
          className="font-bold text-primary"
        >
          {isSignIn ? "Create an account" : "Sign-in"}
        </Link>
      </p>
    </div>
  );
};
export default AuthFormer;
