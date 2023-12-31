import React from "react";
const Sidebar = () => {
  return (
    <div className="z-0 absolute">
      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-black dark:bg-gray-800"></div>
      </aside>
    </div>
  );
};

export default Sidebar;
