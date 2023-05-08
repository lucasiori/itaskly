import type React from 'react';

type Icon = 'add' | 'cancel' | 'confirm' | 'delete' | 'edit' | 'project';

export type IconsMapper = {
  [key in Icon]: React.FC;
};

export type IconProps = {
  icon: Icon;
};
