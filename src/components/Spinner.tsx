"use client";

// Third party imports
import styled from "styled-components";

// Spinner ring component
const SpinnerRing = styled.div.attrs({
  className: "w-24 h-24 border-sky-blue border-8 rounded-full animate-spin ",
})`
  clip-path: polygon(50% 50%, 50% 0, 0 0, 0 100%, 100% 100%, 100% 50%, 50% 50%);
`;

// Spinner Component
export default function Spinner() {
  return (
    <main className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-white">
      <SpinnerRing />
    </main>
  );
}
