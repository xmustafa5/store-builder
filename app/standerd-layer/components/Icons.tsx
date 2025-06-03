import React from "react";

export default function IconsModal({
  icons,
  setIsEditIcon,
  setItemIcon,
}: {
  icons: any;
  setIsEditIcon: (value: boolean) => void;
  setItemIcon: (value: string) => void;
}) {
  const [searchTerm, setSearchTerm] = React.useState("");

  // Filter icons based on search term
  const filteredIcons = React.useMemo(() => {
    if (!searchTerm) return icons;

    const searchLower = searchTerm.toLowerCase();
    return Object.entries(icons).reduce((filtered, [groupName, groupIcons]) => {
      const matchingIcons = groupIcons.filter((icon) =>
        icon.toLowerCase().includes(searchLower)
      );

      if (matchingIcons.length > 0) {
        filtered[groupName] = matchingIcons;
      }
      return filtered;
    }, {});
  }, [icons, searchTerm]);

  return (
    <div
      onClick={() => setIsEditIcon(false)}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl p-6 shadow-2xl w-[948px] max-h-[90vh]"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search icons..."
          className="w-full p-3 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="max-h-[calc(90vh-140px)] overflow-y-auto pr-2">
          {Object.entries(filteredIcons).map(([groupName, icons]) => (
            <div key={groupName} className="mb-8 last:mb-2">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                {groupName}
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {icons?.map((icon: string) => (
                  <div
                    key={icon}
                    onClick={() => setItemIcon(icon)}
                    className="p-3 hover:bg-gray-50 transition-colors duration-200 rounded-lg cursor-pointer gap-2.5 flex flex-col items-center justify-center w-full border border-gray-100 hover:border-gray-200"
                  >
                    <i className={`ri-${icon} text-2xl text-gray-700`}></i>
                    <p className="text-sm text-gray-600">
                      {icon?.split("/")[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
