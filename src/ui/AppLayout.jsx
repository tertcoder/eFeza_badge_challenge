import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-main-bg py-20">
      <Outlet />
    </div>
  );
}

export default AppLayout;
