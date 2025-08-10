"use client";

import React from "react";
import { signUpSchema } from "@/lib/validations";
import AuthForm from "@/components/AuthForm";

const SignUpPage = () => {
  return (
    <AuthForm
      schema={signUpSchema}
      defaultValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      type="SIGN_IN"
    />
  );
};
export default SignUpPage;
