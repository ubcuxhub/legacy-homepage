type MembershipTier = {
  display: string;
  price: number;
  ubcStudent: boolean;
  description?: string;
};

const membershipDescriptions: Record<string, string> = {
  nonUbc:
    "This tier is for all non-UBC members. This tier is for all individuals not affiliated to UBC as a student, faculty or staff member.",
  explorer:
    "Whether you're just starting out or you have some experience in design, this tier comes with exclusive access to all of UX Hub's events for the year for free (except UXathon) 🤩",
  faculty: "",
  innovator: `This tier includes a guaranteed spot at UBC UX Hub's flagship event and annual designathon, UXathon 👀. \n Whether you're just starting out or you have some experience in design, this tier comes with exclusive access to all of UX Hub's events for the year for free (except UXathon) 🤩`,
};

export const membershipTiers: Record<string, MembershipTier> = {
  nonUbc: {
    display: "Non-UBC",
    price: 24.0,
    ubcStudent: false,
    description: membershipDescriptions.nonUbc,
  },
  innovator: { display: "Innovator", price: 18.0, ubcStudent: true },
  explorer: { display: "Explorer", price: 12.0, ubcStudent: true },
  faculty: { display: "Faculty", price: 18.0, ubcStudent: false },
};
