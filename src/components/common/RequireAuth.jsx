import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "./Layout";

const RequireAuth = () => {
  const { isLogin } = useSelector((state) => state.isLogin);
        
  if (isLogin) {
    return (
      <Layout>
        <Outlet />;
      </Layout>
    );
  } else {
    toast.error("접근할 수 없는 페이지입니다.");
    return <Navigate to="/" replace />;
  }
};

export default RequireAuth;
