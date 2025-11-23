import _ from "lodash";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { useCallback, useEffect, useState } from "react";

// import { Link } from "react-router-dom";

const CommonDataTableHeader = (props) => {
  const {
    lazyState,
    setLazyState,
    title,
    addLink,
    setDateRange,
    dateRange,
    setFilter,
    filter,
    disabled,
    dropDownOptions,
    dropDownLabel,
    showFilterBy = true,
    customButtons,
    hideCalender = false,
  } = props;
  const pathname = "/";

  // State to hold input value
  const [searchInput, setSearchInput] = useState(lazyState.search.value || "");

  // Create a debounced function
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    _.debounce((value) => {
      setLazyState((prevLazyState) => ({
        ...prevLazyState,
        search: { value },
      }));
    }, 500), // 500ms delay
    [setLazyState]
  );

  // Update debounced value when input changes
  useEffect(() => {
    debouncedSearch(searchInput);

    // Cleanup the debounce on unmount
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchInput, debouncedSearch]);

  const handleBtnLabel = () => {
    switch (pathname) {
      case "/category":
        return "Add New Category";
      case "/commission":
        return "Manage Commission";
      case "/gift-cards":
        return "Generate Coupons";
      default:
        return "Add";
    }
  };

  return (
    <div className="flex justify-between items-center">
      <h2 className="mb-0">{title}</h2>
      <div className="flex items-center">
        {pathname === "/" && (
          <div className="flex mr-3">
            {showFilterBy && (
              <Dropdown
                value={filter}
                options={dropDownOptions}
                onChange={(e) => setFilter(e.value)}
                placeholder={dropDownLabel}
                className="mr-2 w-[200px]"
                showClear
              />
            )}
            {!hideCalender && (
              <Calendar
                value={dateRange}
                onChange={(e) => setDateRange(e.value)}
                selectionMode="range"
                readOnlyInput
                placeholder="Date Range"
                showButtonBar
                className="w-[200px]"
                tooltip="Select Date Range"
              />
            )}
          </div>
        )}
        <div className="flex items-center">
          <div className="relative mr-3">
            <input
              type="search"
              aria-label="Search"
              placeholder="Search"
              className="w-[200px] pl-9 pr-3 py-2 rounded border  border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-navy-700 dark:border-navy-600 dark:text-black"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          {/* {addLink && (
            <Link
              to={disabled ? "" : addLink}
              className={`inline-flex items-center px-4 py-2 bg-gradient-text text-white text-lg rounded ${
                disabled ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              <i className="fa fa-plus-square me-2"></i>
              {handleBtnLabel()}
            </Link>
          )} */}
        </div>
      </div>
      {customButtons && customButtons}
    </div>
  );
};

export default CommonDataTableHeader;
