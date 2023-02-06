import { Link, useNavigate } from "react-router-dom";
import {
  HiChatBubbleLeftEllipsis
} from "react-icons/hi2";
import bride from "../bride.png";
import logo from "../assets/logo/Logo-l.png";
import { Input } from "@material-tailwind/react";
import { GET_USERS, LOGIN_USER } from "../queries/user";
import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const Login = () => {
  const navigate = useNavigate()
  // const {data : dataUsers, loading, error} = useQuery(GET_USERS);
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const [LoginFormUser, {data : dataLoginUser, error: errorLoginUser}] = useMutation(LOGIN_USER);
  
  const loginForm = (e) => {
    e.preventDefault();
    LoginFormUser({
      variables: {
        form: dataLogin
      }});
    };
    useEffect(() => {
      if(dataLoginUser){
        localStorage.setItem('token', dataLoginUser.loginUser.access_token)
        navigate('/')
      }
  }, [dataLoginUser])
  console.log(dataLoginUser, errorLoginUser);
  return (
    <>
      <section className="fixed flex w-full border-b-[1px] bg-white shadow-md z-20">
        <div className="flex w-full mx-[70px] justify-between items-center h-14">
          <div className="h-full flex items-center">
            <Link to={"/"} className="judul">
              <img src={logo} alt="" width={120} />
            </Link>
          </div>
          <div className="h-10 flex h-full">
            <div className="flex mx-8 font-light h-full ">
              <Link to={"/products"}>
                <button className="mx-4 hover:border-b-2 hover:border-[#00425A] border-b-2 border-white font-[500] focus:border-b-2 focus:border-[#00425A] h-full duration-300">
                  Products
                </button>
              </Link>
              <button className="mx-4 hover:border-b-2 hover:border-[#00425A] border-b-2 border-white font-[500] focus:border-b-2 focus:border-[#00425A] h-full duration-300">
                Invitations
              </button>
              <button className="mx-4 hover:border-b-2 hover:border-[#00425A] border-b-2 border-white font-[500] focus:border-b-2 focus:border-[#00425A] h-full duration-300">
                Favorite
              </button>
            </div>
          </div>
          <div className="flex mx-8">
            <button className="mx-2 text-xl">
              <HiChatBubbleLeftEllipsis />
            </button>
            <button className="mx-2 w-8">
              {" "}
              <img src={bride} alt="" />
            </button>
          </div>
        </div>
      </section>
      <section className="pt-14 w-full min-h-[100vh]">
        <div className="w-full flex px-[300px] mt-[50px]">
          <div className="min-w-[60%] bg-gray-100">dsad</div>
          <div className="min-w-[40%] bg-white h-[35em] shadow rounded-lg flex flex-col">
            <div className="w-full p-10 h-[90%]">
              <div className="w-full mt-2 mb-6">
                <p className="text-xl font-semibold">LOGIN</p>
              </div>
              <div className="w-full border-[1px] rounded-lg flex justify-center mt-2 py-2 items-center">
                <img
                  src="https://alexandra.bridestory.com/image/upload/dpr_1.0,f_webp,fl_progressive,q_80,c_fill,g_faces/assets/google-logo2x-rkgZVmis7.webp"
                  className="w-[23px]"
                  alt=""
                />
                <p className="mx-2 text-[13px] font-light">Google</p>
              </div>
              <div className="w-full flex justify-center my-2 py-2 items-center">
                <p className="text-[10px] font-light">atau lanjutkan dengan</p>
              </div>
              <div className="w-full"></div>
              <form action="">
              <div className="w-full mt-4">
                <Input label="Email" type="email" color="purple" onChange={(e) => {
                  setDataLogin({
                    ...dataLogin,
                    email: e.target.value
                  })
                }}/>
              </div>
              <div className="w-full mt-4">
                <Input label="Password" type="password" color="purple" onChange={(e) => {
                  setDataLogin({
                    ...dataLogin,
                    password: e.target.value
                  })
                }}/>
              </div>
                {/* <div className="w-full flex flex-col">
                  <p className="text-sm">email</p>
                  <div className="relative group flex mt-[1px]">
                    <HiEnvelope className="absolute text-[#00425A] top-[12px] left-[7px]" />
                    <input
                      className="pl-10 duration-300 focus:outline-none outline-none focus:border-[#00425A] border-b-2 w-full py-2 font-light"
                      type="text"
                      placeholder="email address"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col mt-8">
                  <p className="text-sm">password</p>
                  <div className="relative group flex mt-[1px]">
                    <HiLockClosed className="absolute text-[#00425A] top-[12px] left-[7px]" />
                    <input
                      className="pl-10 duration-300 focus:outline-none outline-none focus:border-[#00425A] border-b-2 w-full py-2 font-light"
                      type="text"
                      placeholder="password"
                      name=""
                      id=""
                    />
                  </div>
                </div> */}
                <button className="w-full items-center justify-center flex mt-8 bg-[#00425A] hover:bg-[#674188] duration-200 h-[40px] text-white rounded-lg" onClick={loginForm}>
                  <p className="">Login</p>
                </button>
              </form>
              <div className="w-full flex items-center justify-center mt-2">
                <a
                  className="w-full flex items-center justify-center text-[12px] font-[300] text-red-700 hover:underline"
                  href=""
                >
                  forgot password?
                </a>
              </div>
              <div className="w-full flex items-center justify-center mt-2">
                asds
              </div>
            </div>
            <div className="w-full bg-gray-100 h-[10%] rounded-b-lg flex items-center justify-center">
                <div className="text-[12px]">Punya bisnis terkait pernikahan? <a href="" className="text-red-700 hover:underline">bergabung sebagai vendor</a></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;