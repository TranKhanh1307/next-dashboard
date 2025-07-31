import { AVATAR_SIZE } from "@/app/lib/constants";
import Image from "next/image";

export default function CustomerNameCell({
  imageUrl,
  name,
}: {
  imageUrl: string;
  name: string;
}) {
  return (
    <td className="whitespace-nowrap">
      <div className="flex items-center gap-2">
        <Image
          src={imageUrl}
          alt={name}
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          className="rounded-full"
        />
        <p className="mr-4">{name}</p>
      </div>
    </td>
  );
}
