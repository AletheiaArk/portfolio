import Image from "next/image";
import { site } from "@/lib/site";

// The home profile card: avatar, name, role, and the motto quote.
export default function Profile() {
  return (
    <div className="card profile">
      <div className="profile-avatar">
        <div className="profile-halo" aria-hidden="true" />
        <Image src={site.avatar} alt={site.name} width={92} height={92} />
      </div>
      <p className="profile-name display">{site.name}</p>
      <p className="profile-role">{site.role}</p>
      <blockquote className="profile-quote">
        <p>&ldquo;{site.motto}&rdquo;</p>
      </blockquote>
    </div>
  );
}
