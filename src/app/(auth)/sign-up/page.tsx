"use client";

import React from "react";
import { signInSchema, signUpSchema } from "@/lib/validations";
import AuthForm from "@/components/AuthForm";

const SignUpPage = () => {
  return (
    <AuthForm
      schema={signUpSchema}
      defaultValues={{ email: "", password: "" }}
      type="SIGN_IN"
    />
  );
};
export default SignUpPage;
