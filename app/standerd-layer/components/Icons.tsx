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
      className="fixed inset-0 bg-black/50 backdrop-blur-[1px] flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg p-4 shadow-lg w-96"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search icons..."
          className="w-full p-2 border border-gray-300 rounded-md mb-2"
        />
        <div className="h-[446px] overflow-y-auto">
          {Object.entries(filteredIcons).map(([groupName, icons]) => (
            <div key={groupName} className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                {groupName}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {icons?.map((icon: string) => (
                  <div
                    key={icon}
                    onClick={() => setItemIcon(icon)}
                    className="p-2 hover:bg-gray-100 rounded cursor-pointer gap-2 flex flex-col items-center justify-center w-full"
                  >
                    <i className={`ri-${icon} text-2xl`}></i>
                    <p>{icon?.split("/")[1]}</p>
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
