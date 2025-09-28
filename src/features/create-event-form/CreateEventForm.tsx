import { Card } from "src/components/card";
import { Typography } from "src/components/typography";
import { useCreateEventForm } from "./hooks/use-create-event-form";
import { Input } from "src/components/input";
import { Button } from "src/components/button";
import styles from "./CreateEventForm.module.css";

export const CreateEventForm = () => {
  const {
    form: {
      formState: { errors },
      register,
    },
    isPending,
    onSubmit,
  } = useCreateEventForm();

  return (
    <Card className={styles.container}>
      <div className={styles.heading}>
        <Typography sm="xl" lg="3xl" as="h1">
          Create new event
        </Typography>
        <Typography sm="sm" lg="lg" variant="secondary">
          Enter details below.
        </Typography>
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input
          label="Title"
          placeholder="Title"
          error={!!errors.title}
          errorMessage={errors.title?.message}
          {...register("title")}
        />
        <Input
          label="Description"
          placeholder="Description"
          error={!!errors.description}
          errorMessage={errors.description?.message}
          {...register("description")}
        />
        <Input
          label="Date"
          placeholder="Date"
          type="date"
          error={!!errors.startsAt}
          errorMessage={errors.startsAt?.message}
          {...register("startsAt")}
        />
        <Input
          label="Time"
          placeholder="Time"
          type="time"
          error={!!errors.time}
          errorMessage={errors.time?.message}
          {...register("time")}
        />
        <Input
          label="Capacity"
          placeholder="Capacity"
          type="number"
          error={!!errors.capacity}
          errorMessage={errors.capacity?.message}
          {...register("capacity")}
        />
        <Button loading={isPending}>CREATE NEW EVENT</Button>
      </form>
    </Card>
  );
};
