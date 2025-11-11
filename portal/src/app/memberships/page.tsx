import { membershipTiers } from "@/lib/membershipUtil";
import Link from "next/link";

const page = async () => {
  return (
    <div>
      {Object.entries(membershipTiers).map(([name, info], index) => (
        <div key={index} className="mb-8">
          <div className="mb-4">{info.display}</div>
          <Link
            href={`/memberships/${name}`}
            className="hover:cursor-pointer border-2 p-2 rounded-2xl hover:text-black hover:bg-white"
          >
            purchase
          </Link>
        </div>
      ))}
    </div>
  );
};

export default page;
