import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const games: GameNav[] = [
  {
    img: "https://bbs-static.miyoushe.com/avatar/avatar10011.png",
    label: "原神",
    path: "/genshinimpact",
  },
  {
    img: "https://upload-bbs.miyoushe.com/upload/2023/01/18/fedd35d19a7c3021827ae42424886c3c_8697203160169690147.png",
    label: "崩坏：星穹铁道",
    path: "/honkaistarrail",
  },
  {
    img: "https://bbs-static.miyoushe.com/static/2023/11/03/a656c33c5b828840428aad75a06e7292_3318931884571074949.png",
    label: "绝区零",
    path: "/zzz",
  },
];

function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/genshinimpact");
    }
  }, [location.pathname]);

  return (
    <div className="flex">
      <nav className="nav flex h-screen w-16 flex-col items-center justify-end bg-[#0d0d0f] py-6">
        <ul>
          {games.map((el, idx) => (
            <li
              onClick={() => {
                navigate(el.path);
              }}
              key={el.path}
              className={`flex aspect-square w-12 cursor-pointer items-center justify-center rounded-lg border-2 transition-all hover:border-[#474748] ${idx > 0 ? "mt-2" : ""} ${el.path === location.pathname ? "border-[#646466]" : "border-transparent"}`}
            >
              <img className="aspect-square w-[36px] rounded-lg" src={el.img} />
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-1">
        {/* {location.pathname} */}
        {/* <RouterProvider router={router} /> */}
        <Outlet />
      </main>
    </div>
  );
}
export default MainLayout;
