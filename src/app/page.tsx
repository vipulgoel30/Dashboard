// Third party imports
import clsx from "clsx";
import { FaCheck } from "react-icons/fa6";
import { IconType } from "react-icons";
import { FaCaretRight } from "react-icons/fa";
import { IoChatbubble } from "react-icons/io5";

// User imports
import {
  BtnBlue,
  BtnGrey,
  Flex,
  FlexCenter,
  Grid,
  Heading,
  Text,
} from "@/components/utils";

// Type defination for step data
type StepData = {
  title: string;
  desc: string;
  isCompleted: boolean;
};

// Steps data
const stepsData: StepData[] = [
  {
    title: "Add leads",
    desc: "Leads are people interested",
    isCompleted: true,
  },
  {
    title: "Create a sequence",
    desc: "Leads are people interested",
    isCompleted: false,
  },
  {
    title: "Summarize launch",
    desc: "Leads are people interested",
    isCompleted: false,
  },
];

// Step Component
function Step({ step, title, desc, isCompleted }: { step: number } & StepData) {
  return (
    <Grid className="grid-cols-[minmax(35px,.5fr)_6fr] items-center gap-x-3 gap-y-1">
      <FlexCenter
        className={clsx(
          "aspect-square h-8 rounded-full",
          isCompleted ? "bg-[#17c291]" : "bg-white",
        )}
      >
        {isCompleted ? (
          <FaCheck className="text-lg text-white" />
        ) : (
          <span className="font-semibold text-dark-grey">{step}</span>
        )}
      </FlexCenter>
      <Heading as="h3" className="text-lg font-bold">
        {title}
      </Heading>
      <Text className="col-start-2">{desc}</Text>
    </Grid>
  );
}

// Button with Icon component
function BtnWithIcon({ title, Icon }: { title: string; Icon: IconType }) {
  return (
    <BtnGrey
      as={FlexCenter}
      className="xsm:px-5 gap-2 rounded-full px-4 py-3 sm:px-7"
    >
      <Icon className="text-2xl text-sky-blue" />
      <span className="text-dark-grey">{title}</span>
    </BtnGrey>
  );
}

// Dashboard Component
export default function Dashboard() {
  return (
    <>
      <div className="m-3 rounded-lg bg-[#effaff] px-4 py-6 sm:m-4 sm:px-5 md:m-6">
        {/* Greeting */}
        <Heading as="h2" className="mb-1 text-xl font-bold">
          Hi Jackson, Welcome to Dashhhboard
        </Heading>
        <Text className="mb-8 font-medium">
          Just few more step and ready to set Go!
        </Text>

        {/* Steps */}
        <Grid className="gap-x-12 gap-y-6 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {stepsData.map((stepData: StepData, index: number) => (
            <Step key={stepData.title} {...stepData} step={index + 1} />
          ))}
        </Grid>
      </div>

      {/* Buttons Group */}
      <Flex className="mx-auto my-12 w-11/12 max-w-[36rem] flex-col items-center gap-6 sm:w-3/4 md:w-2/3">
        <Grid className="grid-cols-[1fr_1fr] gap-4">
          <BtnWithIcon title="Watch Demo" Icon={FaCaretRight} />
          <BtnWithIcon title="Help Ai Chat Bot" Icon={IoChatbubble} />
        </Grid>

        <BtnBlue className="mx-auto rounded-full px-8 py-3 font-semibold">
          Add leads
        </BtnBlue>
      </Flex>
    </>
  );
}
