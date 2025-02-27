import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import LocationSelection from "./LocationSelection";

export default function SearchMobile() {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          {/* location selection */}
          <LocationSelection />
          {/* date selection */}
          <DateSelection />
          {/* hours selection */}
          <HoursSelection />
          {/* search button */}
          <div className="flex items-center px-6">
            <button className="btn btn-sm bg-red-600 w-[164px] mx-auto">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
