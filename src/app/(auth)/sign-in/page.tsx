"use client";

import React from "react";
import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";

const SignInPage = () => {
  return (
    <AuthForm
      schema={signInSchema}
      defaultValues={{ email: "", password: "" }}
      type="SIGN_IN"
    />
  );
};
export default SignInPage;
