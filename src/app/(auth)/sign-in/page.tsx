"use client";

import React from "react";
import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";
import { signInWithCredentials } from "@/lib/actions/authActions";

const SignInPage = () => {
  return (
    <AuthForm
      schema={signInSchema}
      defaultValues={{ email: "", passwordHash: "" }}
      type="SIGN_IN"
      onSubmit={signInWithCredentials}
    />
  );
};
export default SignInPage;
