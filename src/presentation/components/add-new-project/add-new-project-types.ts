export type StyledAddNewProjectContainerProps = {
  $isAddingNewProject: boolean;
};

export type StyledNewProjectInputContainerProps = {
  $hasError: boolean;
};

export type AddNewProjectProps = {
  isAdding: boolean;
  onSave: (title: string) => void;
  onCancel: () => void;
};
