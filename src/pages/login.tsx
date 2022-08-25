import { Button, Stack, TextField } from "@mui/material";
import { BaseLayout } from "@src/components/layouts";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { NextPageWithLayout } from "./_app";

const Login: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://github.com/login/oauth/authorize", {
      method: "GET",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <TextField
            {...register("user")}
            color="success"
            placeholder="user"
            variant="filled"
            label="Vui long nhap ten"
          />
          <TextField
            {...register("exampleRequired", { required: true })}
            color="info"
            label="Vui long nhap password"
            variant="filled"
            required
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
};
Login.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
export default Login;
