import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigate();

  return { navigation, dispatch };
};
