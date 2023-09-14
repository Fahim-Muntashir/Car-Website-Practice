// components
import DateSelection from "./DateSelection";
import HourSelection from "./DateSelection";
import LocationSelection from "./LocationSelection";

const SearchMobile = () => {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-4">
          {/* location selection */}
          <LocationSelection></LocationSelection>
          {/* Data Selection */}
          <DateSelection></DateSelection>
          {/* Hourse Selection */}
          <HourSelection></HourSelection>
          {/* Btn */}
          <div className="flex items-center px-6">
            <button className="btn btn-sm btn-accent w-[164px] mx-auto ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
