import { membershipTiers } from "@/utils/membershipUtil";
import Link from "next/link";
import { notFound } from "next/navigation";

async function page({ params }: { params: Promise<{ tier: string }> }) {
  const { tier } = await params;

  if (!(tier in membershipTiers)) {
    notFound();
  }

  const formattedPrice = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(membershipTiers[tier].price);

  return (
    <div>
      <Link href={"/memberships"}>back</Link>
      <div>
        membership: {membershipTiers[tier].display} <br></br>
        price: {formattedPrice} <br></br>
        {membershipTiers[tier].description
          ? membershipTiers[tier].description
          : ""}
      </div>
    </div>
  );
}

export default page;
