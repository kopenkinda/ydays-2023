import {
  IconBuildingBank,
  IconChartPie,
  IconList,
  IconSchool,
} from "@tabler/icons-react";

export default function Navbar() {
  return (
    <div className="sticky bottom-0 flex w-full border-b border-gray-200">
      <div className="w-full">
        <div>
          <button aria-label="Search database">
            <IconChartPie />
          </button>

          <button aria-label="Search database">
            <IconBuildingBank />
          </button>
          <button aria-label="Search database">
            <IconSchool />
          </button>
          <button aria-label="Search database">
            <IconList />
          </button>
        </div>
      </div>
    </div>
  );
}
