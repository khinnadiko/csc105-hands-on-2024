import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const favouritesSchema = z.object({
  number: z.number("Expected number, received nan").min(1).max(100),
  q: z.enum(["love", "like"], { message: "Select either 'love' or 'like'" }),
  size: z.enum(["small", "medium", "large"], {
    message: "Select a valid size",
  }),
});

const FavouritesPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(favouritesSchema),
  });

  const onSubmit = (data) => {
    navigate(`/fav/${data.number}?q=${data.q}&size=${data.size}`);
  };

  return (
    <div className="container flex flex-col min-w-screen min-h-screen justify-center items-center bg-gray-100">
      <div className="form shadow-lg w-1/4 p-6 bg-white rounded-lg">
        <h2 className="text-center font-bold mb-5 text-2xl">Favourites Page</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>
              Number:
              <input
                className="rounded-sm"
                type="number"
                {...register("number", { valueAsNumber: true })}
              />
            </label>
            {errors.number && (
              <span style={{ color: "red" }}>{errors.number.message}</span>
            )}
          </div>

          <div>
            <label>Q: </label>
            <select
              className="rounded-sm"
              name="q"
              id="q"
              defaultValue="select"
              {...register("q")}
            >
              <option value="select">Select</option>
              <option value="love">Love</option>
              <option value="like">Like</option>
            </select>
            {errors.q && (
              <span style={{ color: "red" }}>{errors.q.message}</span>
            )}
          </div>

          <div>
            <label>Size: </label>
            <select
              className="rounded-sm"
              name="size"
              id="size"
              defaultValue="select"
              {...register("size")}
            >
              <option value="select">Select</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            {errors.size && (
              <span style={{ color: "red" }}>{errors.size.message}</span>
            )}
          </div>

          <button
            className="bg-blue-500 py-2 text-white rounded-sm"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FavouritesPage;
