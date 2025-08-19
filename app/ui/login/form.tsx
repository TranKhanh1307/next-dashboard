"use client";

import { useSearchParams } from "next/navigation";
import { FilledBtn } from "../common/custom-buttons";
import { OutlinedTextField } from "../common/custom-inputs";
import FormField from "../common/form-field";
import { atSymbol, keyIcon, rightArrowIcon } from "../common/icons";
import { useActionState } from "react";
import { authenticate } from "@/app/lib/action";
import { FormErrorMessage } from "../common/form-errors";

export default function Form() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="space-y-4 rounded-md bg-gray-100 p-4">
      <h2>Please log in to continue</h2>
      <FormField label="Email" id="email">
        <OutlinedTextField
          name="email"
          id="email"
          leadingIcon={atSymbol}
          type="email"
          placeholder="Enter your email"
          required
        />
      </FormField>
      <FormField label="Password" id="password">
        <OutlinedTextField
          name="password"
          id="password"
          leadingIcon={keyIcon}
          type="password"
          placeholder="Enter your password"
          required
        />
      </FormField>
      <input type="hidden" name="redirectTo" value={callbackUrl} />
      <FilledBtn
        type="submit"
        variant="primary"
        className="w-full"
        aria-disabled={isPending}
        disabled={isPending}
      >
        <p className="flex-1 text-start">Log in</p>
        {rightArrowIcon}
      </FilledBtn>
      {errorMessage && <FormErrorMessage message={errorMessage} />}
    </form>
  );
}
