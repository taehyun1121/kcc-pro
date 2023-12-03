import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const UnRequireAuth = () => {
  const { isLogin } = useSelector((state) => state.isLogin);

  if (!isLogin) {
    return <Outlet />;
  } else {
    toast.error("접근할 수 없는 페이지입니다.");
    return <Navigate to="/main" replace />;
  }
};

export default UnRequireAuth;
