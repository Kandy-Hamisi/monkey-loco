"use client";

import React from "react";
import {
  DefaultValues,
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
}: Props<T>) => {
  const isSignIn = type === "SIGN_IN";

  // Define your form
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  // 2. Define submit handler
  const handleSubmit: SubmitHandler<T> = async (data) => {
    //   Do something with the form values
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">
        {isSignIn
          ? "Welcome back to MonkeyLoco"
          : "Create Your MonkeyLoco Acount"}
      </h1>
    </div>
  );
};
export default AuthForm;
