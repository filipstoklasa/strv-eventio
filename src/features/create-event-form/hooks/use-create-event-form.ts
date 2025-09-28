import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "@tanstack/react-router";
import { useForm, type FieldPath } from "react-hook-form";
import {
  useCreateEvent,
  type PostCreateEventRequest,
} from "src/api/post-create-event";
import * as yup from "yup";

const validation = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  startsAt: yup.string().required("Date is required"),
  time: yup.string().required("Time is required"),
  capacity: yup.number().required("Capacity is required"),
});

interface CreateEventFormValues {
  title: string;
  description: string;
  startsAt: string;
  time: string;
  capacity: number;
}

const defaultValues = {
  title: "Title",
  description: "Description",
  startsAt: "2025-11-11",
  time: "22:22",
  capacity: 14,
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

    const normalizeData: PostCreateEventRequest = {
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
