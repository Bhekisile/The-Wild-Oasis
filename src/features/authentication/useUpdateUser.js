import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/ApiAuth";

export function useUpdateUser() {

const queryClient = useQueryClient();


  const {mutate: updatedUser, isLoading: isUpdating} = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
      queryClient.invalidateQueries({ queryKey: ["user"], user });
    //   reset();
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updatedUser };
}
