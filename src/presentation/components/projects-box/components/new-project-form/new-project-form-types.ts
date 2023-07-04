export type StyledNewProjectFormContainerProps = {
  $isAddingNewProject: boolean;
};

export type StyledNewProjectInputContainerProps = {
  $hasError: boolean;
};

export type NewProjectFormProps = {
  isAdding: boolean;
  onSave: (title: string) => void;
  onCancel: () => void;
};
