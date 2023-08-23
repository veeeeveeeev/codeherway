"use client";
import { Contact } from "@/devlink";
import React from "react";

const page = () => {
  return (
    <Contact
      formProps={{
        onSubmit: async (e) => {
          e.preventDefault();
          router.push(
            `mailto:kphamnm06@gmail.com?subject=${e.target[0].value}&body=${e.target[2].value}`
          );
        },
      }}
    />
  );
};

export default page;
