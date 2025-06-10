"use client";

import React from "react";
import { FieldValues } from "react-hook-form";
import { ZodType } from "zod";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = () => {
  return <div>AuthForm</div>;
};
export default AuthForm;
