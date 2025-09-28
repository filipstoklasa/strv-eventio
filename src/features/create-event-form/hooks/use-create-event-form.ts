import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "@tanstack/react-router";
import { useForm, type FieldPath } from "react-hook-form";
import * as yup from "yup";
import { useCreateEvent, type CreateEventRequest } from "src/api/create-event";

const validation = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  startsAt: yup.string().required("Date is required"),
  time: yup.string().required("Time is required"),
  capacity: yup
    .number()
    .min(1)
    .required("Capacity is required")
    .typeError("Capacity is required"),
});

interface CreateEventFormValues {
  title: string;
  description: string;
  startsAt: string;
  time: string;
  capacity: number;
}

const defaultValues = {
  title: "",
  description: "",
  startsAt: "",
  time: "",
  capacity: 1,
};

export const useCreateEventForm = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useCreateEvent();

  const form = useForm<CreateEventFormValues>({
    defaultValues,
    resolver: yupResolver(validation),
  });

  const onSubmit = form.handleSubmit(async (data: CreateEventFormValues) => {
    const { title, description, startsAt, time, capacity } = data;

    const normalizeData: CreateEventRequest = {
      title,
      description,
      startsAt: startsAt + "T" + time,
      capacity,
    };

    mutate(normalizeData, {
      onSuccess: () => {
        navigate({ to: "/", viewTransition: true, replace: true });
      },
      onError: (error) => {
        error.issues.forEach((issue) => {
          const fieldPath = issue.path.join(
            "."
          ) as FieldPath<CreateEventFormValues>;

          form.setError(fieldPath, {
            type: issue.code,
            message: issue.message,
          });
        });
      },
    });
  });

  return { form, isPending, onSubmit };
};
