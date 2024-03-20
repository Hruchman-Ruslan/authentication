import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigation = useNavigate();

  return { navigation };
};
