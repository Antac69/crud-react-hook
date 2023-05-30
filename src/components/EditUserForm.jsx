import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  console.log(props.currentUser.name);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: props.currentUser,
  });
  //dandole los valores
  useEffect(() => {
    setValue("name", props.currentUser.name);
    setValue("username", props.currentUser.username);
  });

  const onSubmit = (data, e) => {
    console.log(data);
    data.id = props.currentUser.id;
    //limpiar inputs
    props.updateUser(props.currentUser.id, data);
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          type="text"
          {...register("name", {
            required: {
              value: true,
              message: "Campo Requerido",
            },
          })}
        />
        <div>{errors?.name?.message}</div>
        <label>Username</label>
        <input
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "Campo Requerido",
            },
          })}
        />
        <div>{errors?.username?.message}</div>
        <button>Edit user</button>
      </form>
    </>
  );
};

export default EditUserForm;
