import { AVATAR_SIZE } from "@/app/lib/constants";
import Image from "next/image";

export default function CustomerInfo({
  imageUrl,
  name,
  email,
}: {
  imageUrl: string;
  name: string;
  email: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Image
          src={imageUrl}
          alt={name}
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          className="rounded-full"
        />
        <p>{name}</p>
      </div>
      <p className="mt-2 text-gray-600">{email}</p>
    </div>
  );
}
