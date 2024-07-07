"use client";
// Third party imports
import styled from "styled-components";

// Container
export const Container = styled.div.attrs({
  className: "bg-white shadow-[0_0_20px_1px_rgba(0,0,0,.1)] rounded-lg",
})``;

// Content
export const Heading = styled.h3.attrs({ className: "text-dark-grey" })``;
export const Text = styled.p.attrs({ className: "text-medium-grey" })``;

// Layouts
export const Grid = styled.div.attrs({ className: "grid" })``;

export const Flex = styled.div.attrs({ className: "flex" })``;
export const FlexCenter = styled(Flex).attrs({
  className: "items-center justify-center",
})``;

// Buttons
export const BtnBlue = styled.button.attrs({
  className: "text-white bg-sky-blue font-semibold",
})``;

export const BtnGrey = styled.button.attrs({
  className: "text-dark-grey bg-[#f7f8fa] font-semibold",
})``;
