import Image from "next/image";
import { profile } from "@/lib/data";

// Renders nothing until profile.photo is set in lib/data.ts.
export default function Portrait() {
  if (!profile.photo) return null;
  return (
    <div className="portrait">
      <Image
        src={profile.photo}
        alt={`Portrait of ${profile.name}`}
        width={640}
        height={800}
        sizes="(min-width: 860px) 224px, 60vw"
        priority
      />
    </div>
  );
}
