export function FieldError({ errors, id }: { errors?: string[]; id: string }) {
  if (!errors?.length) return null;

  return (
    <div id={id} aria-live="polite" aria-atomic="true">
      {errors.map((error) => (
        <p className="mt-2 text-sm text-red-500" key={error}>
          {error}
        </p>
      ))}
    </div>
  );
}

export function FormErrorMessage({ message }: { message?: string | null }) {
  return (
    <div aria-live="polite" aria-atomic="true">
      {message ? <p className="my-2 text-sm text-red-500">{message}</p> : null}
    </div>
  );
}
