import { useNavigate } from "@tanstack/react-router";
import { ActionButton } from "src/components/action-button";
import { EventsList } from "src/features/events-list";
import { ControlsProvider } from "src/features/events-list/components/controls/context";

export const Home = () => {
  const navigate = useNavigate();

  const openCreateEvent = () => {
    navigate({
      to: "/create-event",
      viewTransition: true,
    });
  };

  return (
    <ControlsProvider>
      <EventsList />
      <ActionButton action={openCreateEvent} />
    </ControlsProvider>
  );
};
