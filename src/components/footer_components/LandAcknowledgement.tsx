import React from "react";

const LandAcknowledgement = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <p
        style={{
          color: "var(--Black, #2F2E41)",
          textAlign: "center",
          fontFamily: "DM Sans",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
        }}
      >
        UX Hub recognizes that we live, learn, and host our events on the
        traditional, ancestral, and unceded territory of the xʷməθkʷəy̓əm
        (Musqueam) and səlilwətaɬ (Tsleil-Waututh) Nations. We acknowledge the
        privilege this carries and are committed to ongoing learning,
        reflection, and action as part of our role in reconciliation. To further
        your understanding, we encourage you to explore{" "}
        <a
          href="#"
          className="text-blue-600 underline hover:text-blue-800 transition-colors"
        >
          xʷi7xʷa Library&apos;s Indigenous Research Guide
        </a>{" "}
        and{" "}
        <a
          href="https://native-land.ca"
          className="text-blue-600 underline hover:text-blue-800 transition-colors"
        >
          native-land.ca
        </a>
        .
      </p>
    </div>
  );
};

export default LandAcknowledgement;
