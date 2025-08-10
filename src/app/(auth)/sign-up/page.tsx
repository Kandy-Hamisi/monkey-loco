"use client";

import React from "react";
import { signUpSchema } from "@/lib/validations";
import AuthForm from "@/components/AuthForm";
import { signUp } from "@/lib/actions/authActions";

const SignUpPage = () => {
  return (
    <AuthForm
      schema={signUpSchema}
      defaultValues={{
        username: "",
        email: "",
        passwordHash: "",
        confirmPassword: "",
      }}
      type="SIGN_UP"
      onSubmit={signUp}
    />
  );
};
export default SignUpPage;
