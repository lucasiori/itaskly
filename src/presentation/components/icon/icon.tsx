import {
  AddIcon,
  CancelIcon,
  ConfirmIcon,
  DeleteIcon,
  EditIcon,
  ProjectIcon,
} from '@presentation/assets';
import { IconProps, IconsMapper } from './icon-types';

export const Icon = ({ icon }: IconProps) => {
  const iconsMapper: IconsMapper = {
    add: AddIcon,
    cancel: CancelIcon,
    confirm: ConfirmIcon,
    delete: DeleteIcon,
    edit: EditIcon,
    project: ProjectIcon,
  };

  const IconComponent = iconsMapper[icon];

  return <IconComponent />;
};
