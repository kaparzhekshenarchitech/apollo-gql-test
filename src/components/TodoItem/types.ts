export type TTodoItemProps = {
  id: number;
  title: string;
  completed: boolean;
  onToggle: ({}) => void;
  onDelete: ({}) => void;
};
